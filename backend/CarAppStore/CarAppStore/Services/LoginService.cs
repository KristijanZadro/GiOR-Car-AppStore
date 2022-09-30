using CarAppStore.data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using StackExchange.Redis;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace CarAppStore.Services
{
    public class LoginService : ILoginService
    {
        private readonly AppDbContext _context;
        private IConfiguration _config;
        private readonly IConnectionMultiplexer _redis;

        public LoginService(AppDbContext context, IConfiguration config, IConnectionMultiplexer redis)
        {
            _context = context;
            _config = config;
            _redis = redis;
        }

        private string GenerateJSONWebToken(string userName)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[] {
                new Claim(JwtRegisteredClaimNames.Sub, userName),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
              _config["Jwt:Issuer"],
              claims,
              expires: DateTime.Now.AddMinutes(60),
              signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        public async Task<string> LoginUser(string username, string password)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.UserName == username && u.Password == password);
            if (user == null)
            {
                return null;
            }
            var tokenString = GenerateJSONWebToken(user.UserName);

            var key = "jwt:" + tokenString;
            IDatabase db = _redis.GetDatabase();
            db.StringSet(key, tokenString);
            db.KeyExpire(key, new TimeSpan(0, 0, 60, 0));

            return tokenString;
        }
    }
}
