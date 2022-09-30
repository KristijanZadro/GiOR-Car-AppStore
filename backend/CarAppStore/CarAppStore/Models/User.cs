using CarAppStore.Models.Base;
using CarAppStore.Models.Enums;

namespace CarAppStore.Models
{
    public class User : BaseEntity
    {
        public string UserName { get; set; }
        public string Password { get; set; }
        public GroupType GroupType { get; set; }
    }
}
