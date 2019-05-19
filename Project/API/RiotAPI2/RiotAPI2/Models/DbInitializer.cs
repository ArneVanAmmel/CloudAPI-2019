using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace RiotAPI2.Models
{
    public class DbInitializer
    {
        public static void Initialize(LibraryContext context)
        {
        //Create the db if not yet exists
        context.Database.EnsureCreated();

            if (!context.Summoners.Any())
            {
                var summoner = new Summoner()
                {
                    
                    accountId = "4CSDIe4Lj34YuAj_HKf-0SD-S0bXPjGvn4GLms-SHxUM-pI",
                    puuid = "pOjXv-qXNyyyYHdVnZh2j4sCVY-lXjKRkP9WAtcsvpRBfpqmUXlESANCXWohUf6j8T3kjOelJ2DTZg",
                    name = "Djorick",
                    profileIconId = 3379,
                    revisionDate = 1556887811000,
                    summonerLevel = 82,
                    region = "euw1"
                };

                var summoner2 = new Summoner()
                {
                    
                    accountId = "Okd-alz-F63BKVtD5N-Vt1bTLcgjPsa66EPuZSjkW8Ib-ko",
                    puuid = "LJCsCPU9AxjjD_UclgiejmTSEVzOWqpuiWXV8ERG9-hWVUb4xTS-kVCBoFECfBsqVZFTZX878sMGEg",
                    name = "King Potato xD",
                    profileIconId = 4092,
                    revisionDate = 1558201696000,
                    summonerLevel = 233,
                    region = "euw1"
                };

                var summoner3 = new Summoner()
                {
                   
                    accountId = "RtlxgFfJBpvOrGhEnPDj3ww5KZKEsq5FleIiBP8_XZBjsw",
                    puuid = "oITCLCpEsCD8d6faT6gwi-fUaro3xPr-DCAQyhxdD--ueNzRyXEqZXKtUA4iAHN-9KEEVi-gFyOl-w",
                    name = "vincent boden",
                    profileIconId = 909,
                    revisionDate = 1558201696000,
                    summonerLevel = 164,
                    region = "euw1"
                };

                var summoner4 = new Summoner()
                {
                    
                    accountId = "Ie29F74S6VexwwR4SLc3rqMxLRUMksXBIF1VFsKf5RZXsoU",
                    puuid = "dB5VA6ay_Se1nYmVhUCieXyM8BBSgTC4hNuSq5D8Rqy8U_u1VTEm-Ym3p1sgFdiri4uMojLXEeAU_g",
                    name = "TheConfirmer0",
                    profileIconId = 3587,
                    revisionDate = 1557950919000,
                    summonerLevel = 65,
                    region = "euw1"

                };

                context.Summoners.Add(summoner);
                context.Summoners.Add(summoner2);
                context.Summoners.Add(summoner3);
                context.Summoners.Add(summoner4);
                context.SaveChanges();
            }
        
        }
    }

}

