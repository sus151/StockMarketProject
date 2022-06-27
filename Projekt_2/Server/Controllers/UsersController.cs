using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Projekt_2.Server.Services;
using Projekt_2.Shared.DTOs;
using Projekt_2.Shared.Models;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Projekt_2.Server.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserService _service;
        private readonly IHttpContextAccessor _contextAccessor;


        public UsersController(IUserService service, IHttpContextAccessor httpContextAccessor)
        {
            _contextAccessor = httpContextAccessor;
            _service = service;

        }


        [HttpPost("watchlist")]
        public async Task<ActionResult> AddCompanyToUserWatchlist(CompanyTickerPost ticker)
        {

            var principal = _contextAccessor.HttpContext.User;
            var id = principal.FindFirstValue(ClaimTypes.NameIdentifier);
            try
            {
                await _service.AddCompanyToUserWatchList(ticker.Ticker, id);
            }
            catch(Exception e)
            {
                if (e.Message == "Conflict")
                {
                    return Conflict();
                }
                return BadRequest();
            }
            return Ok();


        }
        [HttpGet("watchlist")]
        public async Task<ActionResult<IEnumerable<CompanyFullInfo>>> GetUserWatchlist()
        {
            var principal = _contextAccessor.HttpContext.User;
            var id = principal.FindFirstValue(ClaimTypes.NameIdentifier);
            var companiesList = await _service.GetUserWatchlist(id);
            return Ok(companiesList);
        }
        [HttpDelete("watchlist/{ticker}")]
        public async Task<ActionResult> DeleteCompanyFromUserWatchlist(string ticker)
        {
            var principal = _contextAccessor.HttpContext.User;
            var id = principal.FindFirstValue(ClaimTypes.NameIdentifier);
            await _service.DeleteCompanyFromUserWatchlist(id, ticker);
            return Ok();
        }
    }
}
