using CarAppStore.Models;
using System;
using System.Collections.Generic;

namespace CarAppStore.Response
{
    public class CarsResponse
    {
        public int Id { get; set; }
        public string CoverImage { get; set; }
        public string Description { get; set; }
        public string Name { get; set; }
        public string Model { get; set; }
        public int Price { get; set; }
    }
}
