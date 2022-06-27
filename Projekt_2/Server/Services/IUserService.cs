using Projekt_2.Shared.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Projekt_2.Server.Services
{
    public interface IUserService
    {
        public Task AddCompanyToUserWatchList(string ticker, string id);
        public Task<List<CompanyFullInfo>> GetUserWatchlist(string id);
        public Task DeleteCompanyFromUserWatchlist(string id, string ticker);
    }
}
