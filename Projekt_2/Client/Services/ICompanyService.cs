using Projekt_2.Shared.DTOs;
using Projekt_2.Shared.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Projekt_2.Client.Services
{
    public interface ICompanyService
    {
        public Task<List<CompanyMainInfo>> GetAllCompaniesMainInfo();
        public Task<CompanyFullInfo> GetCompanyFullInfo(string ticker);
        public Task<List<CompanyArticle>> GetCompanyArticles(string ticker);
        public Task<List<CompanyStock>> GetCompanyStocks(string ticker);
        public Task<SessionEnd> GetSessionEnd(string date, string ticker);
        public Task AddCompanyToDatabase(CompanyPost company);
    }
}
