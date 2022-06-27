using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using Projekt_2.Server.Data;
using Projekt_2.Server.DTOs;
using Projekt_2.Server.Models;
using Projekt_2.Shared.DTOs;
using Projekt_2.Shared.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace Projekt_2.Services
{
    public class CompanyService : ICompanyService
    {
        private readonly HttpClient _httpClient;
        private readonly IConfiguration _configuration;
        private readonly ApplicationDbContext _context;

        public CompanyService(IConfiguration configuration, ApplicationDbContext context)
        {
            _configuration = configuration;
            _httpClient = new HttpClient();
            _context = context; 
        }

       
        public async Task<IEnumerable<CompanyMainInfo>> GetAllCompanies()
        {
            var url = $"https://api.polygon.io/v3/reference/tickers?active=true&sort=ticker&order=asc&limit=1000&apiKey={_configuration["ApiKeys:Polygon"]}";

            var result = await _httpClient.GetAsync(url);
            var data = await result.Content.ReadAsStringAsync();
            if (!result.IsSuccessStatusCode)
            {
                List<CompanyMainInfo> companies = new List<CompanyMainInfo>(); 
                var companiesDb = await _context.Companies.ToListAsync();
                foreach(var company in companiesDb)
                {
                    companies.Add(new CompanyMainInfo
                    {
                        Ticker = company.Ticker,
                        Name = company.Name
                    });
                }
                return companies;
            }

            CompaniesMainInfoGet companiesGet = JsonConvert.DeserializeObject<CompaniesMainInfoGet>(data);
             
           
            
            return companiesGet.Results;

        }

        public async Task<List<CompanyArticle>> GetCompanyArticles(string ticker)
        {
            var url = $"https://api.polygon.io/v2/reference/news?ticker={ticker}&apiKey={_configuration["ApiKeys:Polygon"]}";
            var result = await _httpClient.GetAsync(url);
            var data = await result.Content.ReadAsStringAsync();
            CompanyArticlesGet companyArticles = new CompanyArticlesGet();
            
            
            companyArticles = JsonConvert.DeserializeObject<CompanyArticlesGet>(data);
            if (!result.IsSuccessStatusCode)
            {
                List<CompanyArticle> articles = new List<CompanyArticle>();
                var company = await _context.Companies.Where(e => e.Ticker == ticker).FirstOrDefaultAsync();
                if (company != null)
                {
                    var articlesDb = await _context.Articles.Where(e => e.IdCompany == company.IdCompany).ToListAsync();
                    foreach (var article in articlesDb)
                    {
                        articles.Add(new CompanyArticle
                        {
                            Published_utc = article.PublishedUtc,
                            Article_url = article.ArticleUrl,
                            Title = article.Title
                        });
                    }
                    
                }
                return articles;
            }
            if (companyArticles.Results.Count > 5)
            {
                companyArticles.Results = companyArticles.Results.Take(5).ToList();
            }
            return companyArticles.Results;
        }

        public async Task<CompanyFullInfo> GetCompanyInfo(string ticker)
        {
            var url = $"https://api.polygon.io/v3/reference/tickers/{ticker}?apiKey={_configuration["ApiKeys:Polygon"]}";
            var result = await _httpClient.GetAsync(url);
            var data = await result.Content.ReadAsStringAsync();
            CompaniesFullInfoGet companyInfo = JsonConvert.DeserializeObject<CompaniesFullInfoGet>(data);
            if (!result.IsSuccessStatusCode)
            {
                var companyDb = await _context.Companies.Where(e => e.Ticker == ticker).FirstOrDefaultAsync();
                if(companyDb != null)
                {
                    return new CompanyFullInfo
                    {
                        Name = companyDb.Name,
                        Ticker = ticker,
                        HomepageUrl = companyDb.HomepageUrl,
                        Description = companyDb.Description,
                        PhoneNumber = companyDb.PhoneNumber,
                        City = companyDb.City,
                        IconUrl = companyDb.IconUrl
                    };

                }
                else
                {
                    return new CompanyFullInfo
                    {
                        Name = "No data",
                        Ticker = ticker,
                        HomepageUrl = "No data",
                        Description = "No data",
                        PhoneNumber = "No data",
                        City = "No data",
                        IconUrl = "No data"
                    };
                }

            }
                CompanyFullInfo company = new CompanyFullInfo();

            if (companyInfo.Results.Name == null)
            {
                company.Name = "No data";
            }
            else
            {
                company.Name = companyInfo.Results.Name;
            }


            if (companyInfo.Results.Ticker == null)
            {
                company.Ticker = "No data";
            }
            else
            {
                company.Ticker = companyInfo.Results.Ticker;
            }


            if (companyInfo.Results.Homepage_url == null)
            {
                company.HomepageUrl = "No data";
            }
            else
            {
                company.HomepageUrl = companyInfo.Results.Homepage_url;
            }




            if (companyInfo.Results.Sic_description == null)
            {
                company.Description = "No data";
            }
            else
            {
                company.Description = companyInfo.Results.Sic_description;
            }


            if (companyInfo.Results.Phone_number == null)
            {
                company.PhoneNumber = "No data";
            }
            else
            {
                company.PhoneNumber = companyInfo.Results.Phone_number;
            }


            if (companyInfo.Results.Address == null)
            {
                company.City = "No data";
            }
            else
            {
                company.City = companyInfo.Results.Address.city;
            }


            if (companyInfo.Results.Branding == null)
            {
                company.IconUrl = "https://cdn-icons-png.flaticon.com/512/1178/1178479.png";
                
            }
            else
            {
                company.IconUrl = companyInfo.Results.Branding.logo_url;
                company.IconUrl += $"?apiKey={_configuration["ApiKeys:Polygon"]}";
            }


            
         
            
            
            
            return company;
        }

       
            


        

        public async Task<List<CompanyStock>> GetStocks(string ticker)
        {
          
                DateTime firstDate = DateTime.Now;
                string todayDate = firstDate.ToString("yyyy-MM-dd");
                DateTime secondDate = firstDate.AddMonths(-3);
                string nextDate = secondDate.ToString("yyyy-MM-dd");
            

            var url = $"https://api.polygon.io/v2/aggs/ticker/{ticker}/range/1/day/{nextDate}/{todayDate}?sort=desc&limit=120&apiKey={_configuration["ApiKeys:Polygon"]}";
            var result = await _httpClient.GetAsync(url);
            var data = await result.Content.ReadAsStringAsync();
            CompanyStocksGet stocks = JsonConvert.DeserializeObject<CompanyStocksGet>(data);
            List<CompanyStock> companyStocks = new List<CompanyStock>();
            if (!result.IsSuccessStatusCode)
            {
                var companyDb = await _context.Companies.Where(e => e.Ticker == ticker).FirstOrDefaultAsync();
                if(companyDb != null)
                {
                    var stocksDb = await _context.Stocks.Where(e => e.IdCompany == companyDb.IdCompany).ToListAsync();
                    foreach (var stock in stocksDb)
                    {
                        companyStocks.Add(new CompanyStock
                        {
                            DateString = stock.Date,
                            High = stock.High,
                            Low = stock.Low,
                            Open = stock.Open,
                            Close = stock.Close
                        });
                    }
                    return companyStocks;

                }
            }
            if (stocks.Results == null)
            {
                companyStocks.Add(new CompanyStock
                {
                    DateString = DateTime.Now.ToString("yyyy-MM-dd"),
                    High = 0,
                    Low = 0,
                    Open = 0,
                    Close = 0
                });
                return companyStocks;
            }
             
                for (int i = 0; i < stocks.Results.Count; i++)
                {
                    while (firstDate.DayOfWeek == DayOfWeek.Saturday || firstDate.DayOfWeek == DayOfWeek.Sunday)
                    {
                        firstDate = firstDate.AddDays(-1);
                    }
                    companyStocks.Add(new CompanyStock
                    {
                        DateString = firstDate.ToString("yyyy-MM-dd"),
                        High = stocks.Results[i].H,
                        Low = stocks.Results[i].L,
                        Open = stocks.Results[i].O,
                        Close = stocks.Results[i].C

                    });
                    firstDate = firstDate.AddDays(-1);
                }
            

            
            return companyStocks;
        }

        public async Task<SessionEnd> GetStockSessionEnd(string ticker, string date)
        {
            
            var url = $"https://api.polygon.io/v1/open-close/{ticker}/{date}?adjusted=true&apiKey={_configuration["ApiKeys:Polygon"]}";
            var result = await _httpClient.GetAsync(url);
            var data = await result.Content.ReadAsStringAsync();
            
            if (result.IsSuccessStatusCode) 
            {
                SessionEnd sessionEndInfo = JsonConvert.DeserializeObject<SessionEnd>(data);
                return sessionEndInfo; } 
            else
            {
                var company = await _context.Companies.Where(e => e.Ticker == ticker).FirstOrDefaultAsync();
                var session = await _context.Sessions.Where(e => e.From == date && e.IdCompany==company.IdCompany).FirstOrDefaultAsync();
                if (session != null && company != null)
                {
                    return new SessionEnd
                    {
                        From = session.From,
                        Symbol = session.Symbol,
                        Open = session.Open,
                        High = session.High,
                        Low = session.Low,
                        Close = session.Close,
                        Volume = session.Volume,
                        AfterHours = session.AfterHours,
                        PreMarket = session.PreMarket
                    };
                }
                return new SessionEnd
                {
                    From = date,
                    Symbol = ticker,
                    Open = 0,
                    High = 0,
                    Close = 0,
                    Low = 0,
                    Volume = 0,
                    AfterHours = 0,
                    PreMarket = 0
                };
            }
            
        }

        public async Task AddCompany(CompanyPost company)
        {
            if(company.CompanyInfo.Name.Equals("No data")
               && company.CompanyInfo.HomepageUrl.Equals("No data")
               && company.CompanyInfo.Description.Equals("No data")
               && company.CompanyInfo.PhoneNumber.Equals("No data")
               && company.CompanyInfo.City.Equals("No data")
               && company.CompanyInfo.IconUrl.Equals("No data"))
            {
                throw new Exception();
            }
            var companyExists = await _context.Companies.Where(e => e.Ticker == company.CompanyInfo.Ticker).FirstOrDefaultAsync();
            if(companyExists == null)
            {
                List<Article> articles = new List<Article>();
                foreach (var artcile in company.CompanyArticles)
                {
                    articles.Add(new Article
                    {
                        PublishedUtc = artcile.Published_utc,
                        ArticleUrl = artcile.Article_url,
                        Title = artcile.Title
                    });
                }
                List<Stock> stocks = new List<Stock>();

                foreach (var stock in company.CompanyStocks)
                {
                    stocks.Add(new Stock
                    {
                        Date = stock.DateString,
                        High = stock.High,
                        Low = stock.Low,
                        Open = stock.Open,
                        Close = stock.Close,

                    });
                }

                List<Session> sessionEnds = new List<Session>();
                foreach (var session in company.SessionsEnds)
                {
                    sessionEnds.Add(new Session
                    {
                        From = session.From,
                        Symbol = session.Symbol,     
                        Open = session.Open,
                        High = session.High,
                        Close = session.Close,
                        Low = session.Low,
                        Volume = session.Volume,
                        AfterHours = session.AfterHours,
                        PreMarket = session.PreMarket
                        

                    });
                }
                await _context.Companies.AddAsync(new Company
                    {
                        Name = company.CompanyInfo.Name,
                        Ticker = company.CompanyInfo.Ticker,
                        HomepageUrl = company.CompanyInfo.HomepageUrl,
                        Description = company.CompanyInfo.Description,
                        PhoneNumber = company.CompanyInfo.PhoneNumber,
                        City = company.CompanyInfo.City,
                        IconUrl = company.CompanyInfo.IconUrl,
                        LastUpdateDate = company.CompanyInfo.LastUpdateDate,
                        CompanyArticles = articles,
                        CompanyStocks = stocks,
                        CompanySessions = sessionEnds
                       
                    });


                  
            }
            else
            {
                var today = DateTime.Today;
                var lastUpdate = companyExists.LastUpdateDate.ToString("yyyy-MM-dd");
                var lastUpdateDate = DateTime.Parse(lastUpdate);
                if (today != lastUpdateDate)
                {
                    var stocksDb = await _context.Stocks.Where(e => e.IdCompany == companyExists.IdCompany).ToListAsync();
                    foreach(var stock in stocksDb)
                    {
                        _context.Remove(stock);
                    }
                    var articlesDb = await _context.Articles.Where(e => e.IdCompany == companyExists.IdCompany).ToListAsync();
                    foreach (var article in articlesDb)
                    {
                        _context.Remove(article);
                    }
                    var sessionsDb = await _context.Sessions.Where(e => e.IdCompany == companyExists.IdCompany).ToListAsync();
                    foreach (var session in sessionsDb)
                    {
                        _context.Remove(session);
                    }
                    List<Article> articles = new List<Article>();
                    foreach (var artcile in company.CompanyArticles)
                    {
                        articles.Add(new Article
                        {
                            PublishedUtc = artcile.Published_utc,
                            ArticleUrl = artcile.Article_url,
                            Title = artcile.Title
                        });
                    }
                    List<Stock> stocks = new List<Stock>();

                    foreach (var stock in company.CompanyStocks)
                    {
                        stocks.Add(new Stock
                        {
                            Date = stock.DateString,
                            High = stock.High,
                            Low = stock.Low,
                            Open = stock.Open,
                            Close = stock.Close,

                        });
                    }

                    List<Session> sessionEnds = new List<Session>();
                    foreach (var session in company.SessionsEnds)
                    {
                        sessionEnds.Add(new Session
                        {
                            From = session.From,
                            Symbol = session.Symbol,
                            Open = session.Open,
                            High = session.High,
                            Close = session.Close,
                            Low = session.Low,
                            Volume = session.Volume,
                            AfterHours = session.AfterHours,
                            PreMarket = session.PreMarket
                            

                        });
                    }
                    companyExists.CompanyArticles = articles;
                    companyExists.CompanyStocks = stocks;
                    companyExists.CompanySessions = sessionEnds;
                    companyExists.LastUpdateDate = DateTime.Now;
                }
            }
            await _context.SaveChangesAsync();
        }

       

    }
}
