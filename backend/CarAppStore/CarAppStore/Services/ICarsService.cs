using CarAppStore.Response;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CarAppStore.Services
{
    public interface ICarsService
    {
        Task<IEnumerable<CarsResponse>> GetCars();
        Task<CarDetailsResponse> GetCar(int id);
        Task DeleteCar(int id);
    }
}
