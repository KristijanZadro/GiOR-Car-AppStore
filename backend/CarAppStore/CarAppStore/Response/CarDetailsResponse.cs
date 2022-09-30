using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CarAppStore.Response
{
    public class CarDetailsResponse
    {
        public int Id { get; set; }
        public string CoverImage { get; set; }
        public string Description { get; set; }
        public string Name { get; set; }
        public string Model { get; set; }
        public int Price { get; set; }
    }
}
