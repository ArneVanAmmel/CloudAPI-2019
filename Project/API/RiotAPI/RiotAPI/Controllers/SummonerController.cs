using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RiotAPI.Models;

namespace RiotAPI.Controllers
{
    [Route("api/Summoners")]
    [ApiController]
    public class SummonerController : ControllerBase
    {
        static List<Summoner> list = new List<Summoner>();
        static Summoner[] list2 = new Summoner[20];

        static SummonerController()
        {
            list.Add(new Summoner()
            {
                summonerName = "King Potato xD"
            });

            list.Add(new Summoner()
            {
               summonerName = "Djorick"
            });
        }

        [HttpGet]
        public List<Summoner> GetSummoners()
        {
            return list;
        }
    }
}