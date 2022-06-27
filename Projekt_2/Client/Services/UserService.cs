using Newtonsoft.Json;
using Projekt_2.Shared.DTOs;
using Projekt_2.Shared.Models;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Json;
using System.Threading.Tasks;

namespace Projekt_2.Client.Services
{
    public class UserService : IUserService
    {
        private readonly HttpClient _httpClient;

        public UserService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task AddCompanyToUserWatchlist(CompanyTickerPost ticker)
        {
            var url = $"https://localhost:44375/api/users/watchlist";
            var result = await _httpClient.PostAsJsonAsync(url, ticker);
        }

        public async Task<bool> DeleteCompanyFromUserWatchlist(string ticker)
        {
            var url = $"https://localhost:44375/api/users/watchlist/{ticker}";
            var result = await _httpClient.DeleteAsync(url);
            var data = await result.Content.ReadAsStringAsync();
            if (result.IsSuccessStatusCode)
            {
                return true;
            }
            return false;
        }

        public async Task<List<CompanyFullInfo>> GetUserCompanies()
        {
            var url = $"https://localhost:44375/api/users/watchlist";
            var result = await _httpClient.GetAsync(url);
            var data = await result.Content.ReadAsStringAsync();
            List<CompanyFullInfo> userCompanies = JsonConvert.DeserializeObject<List<CompanyFullInfo>>(data);
            return userCompanies;
        }
    }
}
