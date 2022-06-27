using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Projekt_2.Server.Models
{
    public class ApplicationUser : IdentityUser
    {
        public virtual ICollection<UserCompany> UserCompanies { get; set; }
    }
}
