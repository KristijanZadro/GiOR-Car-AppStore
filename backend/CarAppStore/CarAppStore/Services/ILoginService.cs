using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CarAppStore.Services
{
    public interface ILoginService
    {
        Task<string> LoginUser(string username, string password);
    }
}
