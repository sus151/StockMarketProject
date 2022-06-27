using Newtonsoft.Json;
using Projekt_2.Shared.DTOs;
using Projekt_2.Shared.Models;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Json;
using System.Threading.Tasks;

namespace Projekt_2.Client.Services
{
    public class CompanyService : ICompanyService
    {
        private readonly HttpClient _httpClient;

        public CompanyService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task AddCompanyToDatabase(CompanyPost company)
        {
            var url = "https://localhost:44375/api/companies";
            var result = await _httpClient.PostAsJsonAsync(url, company);
        }

        public async Task<List<CompanyMainInfo>> GetAllCompaniesMainInfo()
        {
            var result = await _httpClient.GetAsync("https://localhost:44375/api/companies");
            var data = await result.Content.ReadAsStringAsync();
            List<CompanyMainInfo> companies = JsonConvert.DeserializeObject<List<CompanyMainInfo>>(data);
            return companies;
        }

        public async Task<List<CompanyArticle>> GetCompanyArticles(string ticker)
        {
            var url = $"https://localhost:44375/api/companies/articles/{ticker}";
            var result = await _httpClient.GetAsync(url);
            var data = await result.Content.ReadAsStringAsync();
            List<CompanyArticle> companies = JsonConvert.DeserializeObject<List<CompanyArticle>>(data);
            return companies;
        }

        public async Task<CompanyFullInfo> GetCompanyFullInfo(string ticker)
        {
            var url = $"https://localhost:44375/api/companies/{ticker}";
            var result = await _httpClient.GetAsync(url);
            var data = await result.Content.ReadAsStringAsync();
            CompanyFullInfo companyInfo = JsonConvert.DeserializeObject<CompanyFullInfo>(data);
            return companyInfo;
        }

        public async Task<List<CompanyStock>> GetCompanyStocks(string ticker)
        {
            var url = $"https://localhost:44375/api/companies/stocks/{ticker}";
            var result = await _httpClient.GetAsync(url);
            var data = await result.Content.ReadAsStringAsync();
            List<CompanyStock> companyStocks = JsonConvert.DeserializeObject<List<CompanyStock>>(data);
            return companyStocks;
        }

        public async Task<SessionEnd> GetSessionEnd(string date, string ticker)
        {
            var url = $"https://localhost:44375/api/companies/sessionend/{ticker}/{date}";
            var result = await _httpClient.GetAsync(url);
            var data = await result.Content.ReadAsStringAsync();

            if (!result.IsSuccessStatusCode)
            {
                return new SessionEnd
                {
                    From = date,
                    Symbol = ticker,
                    Open = 0,
                    High = 0,
                    Low = 0,
                    Close = 0,
                    Volume = 0,
                    AfterHours = 0,
                    PreMarket = 0
                };
            }
            SessionEnd companySessionEnd = JsonConvert.DeserializeObject<SessionEnd>(data);
            return companySessionEnd;
        }
    }
}
