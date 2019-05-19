import { Component, OnInit } from '@angular/core';
import {SummonerSearchService, ISummoner } from '../Services/RiotAPI/summoner-search.service';

@Component({
  selector: 'app-add-summoner',
  templateUrl: './add-summoner.component.html',
  styleUrls: ['./add-summoner.component.css']
})
export class AddSummonerComponent implements OnInit {

  nameSearch: boolean =false;
  Summoner: ISummoner[];
  name:string ="";
  region: string = "euw1";

  constructor(private SummonerSvc:SummonerSearchService) { }

  ngOnInit() {
    
   
  }

  continue(){
    this.nameSearch=true;
  }

  back(){
    this.nameSearch=false;
  }

  search(name,region){
    this.SummonerSvc.GetName(name,region).subscribe((summoners)=>{
      console.log(summoners)
      this.Summoner = summoners;
      
    });
  }

}
