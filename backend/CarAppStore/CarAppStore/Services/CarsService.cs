using CarAppStore.data;
using CarAppStore.Models;
using CarAppStore.Response;
using Microsoft.EntityFrameworkCore;
using StackExchange.Redis;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text.Json;
using System.Threading.Tasks;
using System.Web;

namespace CarAppStore.Services
{
    public class CarsService : ICarsService
    {
        private readonly AppDbContext _context;
        private readonly IConnectionMultiplexer _redis;
        public CarsService(AppDbContext context, IConnectionMultiplexer redis)
        {
            _context = context;
            _redis = redis;
        }

        public async Task<IEnumerable<CarsResponse>> GetCars()
        {
            var key = "cars";
            IDatabase db = _redis.GetDatabase();
            var cachedCars = await db.StringGetAsync(key);
            if (!cachedCars.IsNullOrEmpty) return JsonSerializer.Deserialize<IEnumerable<CarsResponse>>(cachedCars);

            var cars = new List<Car>();

            cars = await _context.Cars.OrderByDescending(x => x.Id).ToListAsync();
           
            var mappedCars = cars.Select(m => new CarsResponse
            {
                Id = m.Id,
                Name = m.Name,
                CoverImage = m.CoverImage,
                Description = m.Description,
                Model = m.Model,
                Price = m.Price
                
            });

            db.StringSet(key, JsonSerializer.Serialize(mappedCars));
            db.KeyExpire(key, new TimeSpan(0, 0, 20, 0));

            return mappedCars;
        }

        public async Task<CarDetailsResponse> GetCar(int id)
        {
            var key = "cars";
            IDatabase db = _redis.GetDatabase();
            var cachedCars = await db.StringGetAsync(key);

            if (!cachedCars.IsNullOrEmpty)
            {
                var currentCars = JsonSerializer.Deserialize<IEnumerable<Car>>(cachedCars);
                var requestedCar = currentCars.FirstOrDefault(x => x.Id == id);

                if (requestedCar != null)
                {
                    var cacheResponse = new CarDetailsResponse
                    {
                        Id = requestedCar.Id,
                        CoverImage = requestedCar.CoverImage,
                        Description = requestedCar.Description,
                        Model = requestedCar.Model,
                        Price = requestedCar.Price,
                        Name = requestedCar.Name
                    };
                    return cacheResponse;
                }
            }

            var car = await _context.Cars.FirstOrDefaultAsync(c => c.Id == id);

            if (car == null) return null;

            var mappedCar = new CarDetailsResponse
            {
                Id = car.Id,
                CoverImage = car.CoverImage,
                Description = car.Description,
                Model = car.Model,
                Name = car.Name,
                Price = car.Price
            };

            db.StringSet(key, JsonSerializer.Serialize(mappedCar));
            db.KeyExpire(key, new TimeSpan(0, 0, 20, 0));

            return mappedCar;

        }

        public async Task DeleteCar(int id)
        {
            var car = await _context.Cars.FindAsync(id);
            if (car == null) return;

            _context.Cars.Remove(car);
            await _context.SaveChangesAsync();

            var key = "cars";
            IDatabase db = _redis.GetDatabase();

            var cachedCars = await db.StringGetAsync(key);
            if (!cachedCars.IsNullOrEmpty)
            {
                var currentCars = JsonSerializer.Deserialize<IEnumerable<Car>>(cachedCars);
                var newCars = currentCars.Where(x => x.Id != id);
                db.StringSet(key, JsonSerializer.Serialize(newCars));
                db.KeyExpire(key, new TimeSpan(0, 0, 20, 0));
            }
        }

        public Task<IEnumerable<CarsResponse>> GetCars(string search, int num)
        {
            throw new NotImplementedException();
        }
    }
}
