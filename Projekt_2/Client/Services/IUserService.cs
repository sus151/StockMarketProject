using Projekt_2.Shared.DTOs;
using Projekt_2.Shared.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Projekt_2.Client.Services
{
    public interface IUserService
    {
        public Task<List<CompanyFullInfo>> GetUserCompanies();
        public Task<bool> DeleteCompanyFromUserWatchlist(string ticker);
        public Task AddCompanyToUserWatchlist(CompanyTickerPost ticker);
    }
}
