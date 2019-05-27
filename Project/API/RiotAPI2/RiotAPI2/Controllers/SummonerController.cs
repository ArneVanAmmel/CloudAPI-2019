using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RiotAPI2.Models;

namespace RiotAPI2.Controllers
{
    [Route("api/Summoners")]
    [ApiController]
    [EnableCors("AllowAllMethods")]
    public class SummonerController : ControllerBase
    {
        public LibraryContext _context { get; set; }

        public SummonerController(LibraryContext ctxt)
        {
            _context = ctxt;

        }

        [HttpGet]
        public List<Summoner> GetSummoners()
        {
            return _context.Summoners.ToList();
        }

        [HttpPost]
        public ActionResult<Summoner> AddSummoner([FromBody]Summoner summoner)
        {
            _context.Summoners.Add(summoner);
            _context.SaveChanges();
            //return boek met ID
            return Created("", summoner);
        }

        [Route("{summonerId}")]
        [HttpDelete]
        public IActionResult DeleteBook(int summonerId)
        {
            var theSummoner = _context.Summoners.Find(summonerId);
            if (theSummoner == null)
                return NotFound();

            _context.Summoners.Remove(theSummoner);
            _context.SaveChanges();             // DO NOT FORGET !!!
            return NoContent();
        }
    }
}