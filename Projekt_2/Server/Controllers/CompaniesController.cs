using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Projekt_2.Server.Models;
using Projekt_2.Services;
using Projekt_2.Shared.DTOs;
using Projekt_2.Shared.Models;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Projekt_2.Server.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]

    public class CompaniesController : ControllerBase
    {
        private readonly ICompanyService _service;
      

        public CompaniesController(ICompanyService service)
        {
            _service = service;

        }




        [HttpGet]
        public async Task<ActionResult<IEnumerable<CompanyMainInfo>>> GetStocks()
        {
            var stocks = await _service.GetAllCompanies();
            return Ok(stocks);
        }

        [HttpGet("{ticker}")]
        public async Task<ActionResult<CompanyFullInfo>> GetStocks(string ticker)
        {
            var companyInfo = await _service.GetCompanyInfo(ticker);
            return Ok(companyInfo);
        }
        [HttpGet("articles/{ticker}")]
        public async Task<ActionResult<IEnumerable<CompanyArticle>>> GetCompanyArticles(string ticker)
        {
            var articlesList = await _service.GetCompanyArticles(ticker);
            return Ok(articlesList);

        }

        [HttpGet("stocks/{ticker}")]
        public async Task<ActionResult<IEnumerable<CompanyStock>>> GetCompanyStocks(string ticker)
        {
            
            
                var companyStocks = await _service.GetStocks(ticker);
                return Ok(companyStocks);
          

        }
        [HttpGet("sessionend/{ticker}/{date}")]
        public async Task<ActionResult<IEnumerable<CompanyStock>>> GetCompanySessionEnd(string ticker, string date)
        {
            
          
            
            var companySessionEnd = await _service.GetStockSessionEnd(ticker, date);
                return Ok(companySessionEnd);


            
        }

        

        [HttpPost]
        public async Task<ActionResult> AddCompany(CompanyPost company)
        {
            try { await _service.AddCompany(company); 
            }catch(Exception) 
            {
                return Conflict();
            }
            return Ok();

        }


        



    }
}
