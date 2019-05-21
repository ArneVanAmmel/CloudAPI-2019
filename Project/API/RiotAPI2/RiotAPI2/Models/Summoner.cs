using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace RiotAPI2.Models
{
    public class Summoner
    {
       
        public string Id { get; set; }
        [Key]
        public int summonerId { get; set; }
        public string accountId { get; set; }
        public string puuid { get; set; }
        public string name { get; set; }
        public int profileIconId { get; set; }
        public long revisionDate { get; set; }
        public int summonerLevel { get; set; }
        public string region { get; set; }

        
    }
}
