import { Component, OnInit } from '@angular/core';
import {SummonerSearchService, IMatchHistory, IMatch, IMatches} from '../Services/RiotAPI/summoner-search.service';

@Component({
  selector: 'app-match-history',
  templateUrl: './match-history.component.html',
  styleUrls: ['./match-history.component.css']
})
export class MatchHistoryComponent implements OnInit {

  name:string;
  MatchHistory:IMatchHistory;
  Match:IMatch;
  Matches:IMatches;
  summonerName:string;
  participantId:number;
  

  
  constructor(private SummonerSearchSvc:SummonerSearchService) { }

  ngOnInit() {
    this.summonerName = this.SummonerSearchSvc.summonerName;
    this.name = this.SummonerSearchSvc.accountId;
    
    //i is 10 omdat endIndex ingestelt is op 10 -> eerste 10 matchen oproepen
    this.SummonerSearchSvc.getMatchHistory().subscribe(matches=>{
      this.MatchHistory = matches;
      console.log(this.MatchHistory)
      for(let i = 0; i < 10; i++){
        console.log(this.MatchHistory.matches[i].gameId);
        this.SummonerSearchSvc.getMatchById(this.MatchHistory.matches[i].gameId).subscribe(match =>{
          this.Match = match;
          console.log(match);
          for(let i = 0; i < 10; i++){
            if(match.participantIdentities[i].player.summonerName == this.summonerName){
              console.log(match.participantIdentities[i].participantId)
              console.log(match.participants[i].teamId);
              for( let j=0; j<2;j++){
                if(match.participants[i].teamId == match.teams[j].teamId){
                  console.log(match.teams[j].win);
                  if(match.teams[j].win == "Win"){
                    this.Match.won = "Victory";
                    this.Match.win = true;
                    console.log(this.Match.won);
                  }
                  else{
                    this.Match.won = "Defeat";
                    this.Match.win = false;
                    console.log(this.Match.won);
                  }
                }
              } 
              
            }
            
          }
          console.log(this.Match.won);
          for(let i=0; i< 10;i++){
            this.Match = this.Matches[i];
            console.log(this.Matches[i]+"dfdjgk");
          }
        });
      }
      console.log(this.MatchHistory.matches)
      
    });

   
    //this.Matches = this.MatchHistory.matches.gameId
    
    
  }

}
