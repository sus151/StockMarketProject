
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Projekt_2.Server.Data;
using Projekt_2.Server.Models;
using Projekt_2.Shared.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Projekt_2.Server.Services
{
    public class UserService : IUserService
    {
        
        private readonly ApplicationDbContext _context;
        

        public UserService(ApplicationDbContext context)
        {
            _context = context;
        }



        public async Task AddCompanyToUserWatchList(string ticker, string id)
        {

            
            var company = await _context.Companies.Where(e => e.Ticker == ticker).Select(e => e.IdCompany).FirstOrDefaultAsync();
            var userCompany = await _context.UserCompanies.Where(e => e.IdCompany == company && id == e.IdUser).FirstOrDefaultAsync();
            if (userCompany != null)
            {
                throw new Exception("Conflict");
            }
            var count = await _context.UserCompanies.Where(e => e.IdUser == id).ToListAsync();
            if(count.Count > 15)
            {
                throw new Exception("BadRequest");
            }
            await _context.UserCompanies.AddAsync(new UserCompany
            {
                IdCompany = company,
                IdUser = id
            });
            await _context.SaveChangesAsync();
        }

        public async Task DeleteCompanyFromUserWatchlist(string id, string ticker)
        {
            var companyId = await _context.Companies.Where(e => e.Ticker == ticker).Select(e=>e.IdCompany).FirstOrDefaultAsync();
            var userCompany = await _context.UserCompanies.Where(e => e.IdUser==id && e.IdCompany==companyId).FirstOrDefaultAsync();
            _context.UserCompanies.Remove(userCompany);
            await _context.SaveChangesAsync();
        }

        public async Task<List<CompanyFullInfo>> GetUserWatchlist(string id)
        {
            List<CompanyFullInfo> userCompanies = new List<CompanyFullInfo>();
            var companies = await _context.UserCompanies.Where(e => e.IdUser.Equals(id)).Select(e => e.Company).ToListAsync();
            foreach(var company in companies)
            {
                userCompanies.Add(new CompanyFullInfo
                {
                    Name = company.Name,
                    Ticker = company.Ticker,
                    HomepageUrl = company.HomepageUrl,
                    Description = company.Description,
                    PhoneNumber = company.PhoneNumber,
                    City = company.City,
                    IconUrl = company.IconUrl
                });
            }

            return userCompanies;
        }
    }
}
