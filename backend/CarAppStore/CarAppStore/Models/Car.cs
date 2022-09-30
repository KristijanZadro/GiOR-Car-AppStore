using CarAppStore.Models.Base;
using System;
using System.Collections.Generic;

namespace CarAppStore.Models
{
    public class Car : BaseEntity
    {
        public string CoverImage { get; set; }
        public string Description { get; set; }
        public string Name { get; set; }
        public string Model { get; set; }
        public int Price { get; set; }
    }
}
