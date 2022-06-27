using Projekt_2.Server.Models;

namespace Projekt_2.Server.Models
{
    public class UserCompany
    {
        public virtual ApplicationUser User { get; set; }
        public virtual Company Company { get; set; }
        public int IdCompany { get; set; }
        public string IdUser { get; set; }
    }
}
