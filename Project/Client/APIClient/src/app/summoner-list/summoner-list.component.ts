import { Component, OnInit } from '@angular/core';
import {SummonerService, ISummoners} from '../Services/SummonerList/summoner.service';
import { SummonerSearchService } from '../Services/RiotAPI/summoner-search.service';
//import { SummonerSearchService , ISummoner} from '../Services/RiotAPI/summoner-search.service';

@Component({
  selector: 'app-summoner-list',
  templateUrl: './summoner-list.component.html',
  styleUrls: ['./summoner-list.component.css']
})
export class SummonerListComponent implements OnInit {
 
  Summoners: ISummoners;
 // Summoners:ISummoner[];
 selected:boolean = false;
 name: string = "";
 searching: boolean = false;
 
 
  constructor(private SummonerSvc:SummonerService, private SummonerSearchSvc:SummonerSearchService) { }

  ngOnInit() {
    this.SummonerSvc.GetSummoners().subscribe((summoners)=>{
      
      this.Summoners = summoners;
    });
  }

  select(accountId,region,summonerName){
    this.selected = true
    this.SummonerSearchSvc.accountId = accountId;
    this.SummonerSearchSvc.region = region;
    this.SummonerSearchSvc.summonerName = summonerName;
    console.log(this.SummonerSearchSvc.accountId);
  }

  

  
}
