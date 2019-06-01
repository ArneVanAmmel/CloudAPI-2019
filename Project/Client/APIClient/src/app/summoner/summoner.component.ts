import { Component, OnInit } from '@angular/core';
import { SummonerService, ISummoners } from '../Services/SummonerList/summoner.service';


@Component({
  selector: 'app-summoner',
  templateUrl: './summoner.component.html',
  styleUrls: ['./summoner.component.css']
})
export class SummonerComponent implements OnInit {
  searching:boolean = false;
  Summoner: ISummoners;

  constructor(private SummonerSvc:SummonerService) { }

  ngOnInit() {
  }

  search(summonername){
    this.searching = true;
    this.SummonerSvc.GetSummoner(summonername).subscribe((summoners)=>{
      console.log(summoners)
      this.Summoner = summoners;  
    });
  }

  back(){
    this.searching = false;
  }
}
