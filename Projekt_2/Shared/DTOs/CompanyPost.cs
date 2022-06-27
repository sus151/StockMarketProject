using Projekt_2.Shared.Models;
using System.Collections.Generic;

namespace Projekt_2.Shared.DTOs
{
    public class CompanyPost
    {
        public List<CompanyArticle> CompanyArticles { get; set; }
        public CompanyFullInfoPost CompanyInfo { get; set; }
        public List<CompanyStock> CompanyStocks { get; set; }
        public List<SessionEnd> SessionsEnds { get; set; }
    }
}
