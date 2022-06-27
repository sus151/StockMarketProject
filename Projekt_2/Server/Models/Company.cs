using System;
using System.Collections.Generic;

namespace Projekt_2.Server.Models
{
    public class Company
    {
        public int IdCompany { get; set; }
        public string Name { get; set; }
        public string Ticker { get; set; }

        public string HomepageUrl { get; set; }
        public string Description { get; set; }
        public string PhoneNumber { get; set; }
        public string City { get; set; }
        public string IconUrl { get; set; }
        public DateTime LastUpdateDate { get; set; }
        public virtual ICollection<UserCompany> CompanyUsers { get; set; }
        public virtual ICollection<Session> CompanySessions { get; set; }
        public virtual ICollection<Stock> CompanyStocks { get; set; }
        public virtual ICollection<Article> CompanyArticles { get; set; }

    }
}
