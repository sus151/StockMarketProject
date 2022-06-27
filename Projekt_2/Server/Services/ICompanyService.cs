using Projekt_2.Shared.DTOs;
using Projekt_2.Shared.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Projekt_2.Services
{
    public interface ICompanyService
    {
        public Task<IEnumerable<CompanyMainInfo>> GetAllCompanies();
        public Task<CompanyFullInfo> GetCompanyInfo(string ticker);
        public Task<List<CompanyArticle>> GetCompanyArticles(string ticker);
        
        public Task<List<CompanyStock>> GetStocks(string ticker);
        public Task<SessionEnd> GetStockSessionEnd(string ticker, string date);
        public Task AddCompany(CompanyPost company);
       



    }
}
