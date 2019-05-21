import { Component, OnInit } from '@angular/core';
import {SummonerService, ISummoners} from '../Services/SummonerList/summoner.service';
//import { SummonerSearchService , ISummoner} from '../Services/RiotAPI/summoner-search.service';

@Component({
  selector: 'app-summoner-list',
  templateUrl: './summoner-list.component.html',
  styleUrls: ['./summoner-list.component.css']
})
export class SummonerListComponent implements OnInit {

  Summoners: ISummoners[];
 // Summoners:ISummoner[];
 selected:boolean = false;
 
  constructor(private SummonerSvc:SummonerService) { }

  ngOnInit() {
    this.SummonerSvc.GetSummoners().subscribe((summoners)=>{
      console.log(summoners)
      this.Summoners = summoners;
    });
  }

  select(){
    this.selected = true
  }

  delete(){
    
  }
}
