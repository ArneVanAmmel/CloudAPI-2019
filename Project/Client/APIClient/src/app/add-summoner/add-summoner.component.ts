import { Component, OnInit } from '@angular/core';
import {SummonerSearchService, ISummoner } from '../Services/RiotAPI/summoner-search.service';
import {SummonerService, ISummoners} from '../Services/SummonerList/summoner.service';

@Component({
  selector: 'app-add-summoner',
  templateUrl: './add-summoner.component.html',
  styleUrls: ['./add-summoner.component.css']
})
export class AddSummonerComponent implements OnInit {

  nameSearch: boolean =false;
  searching:boolean = false;
  Summoner: ISummoner;
  Summoners :ISummoner[];
  sumonername:string ="";
  region: string = "";

  //info summoner for posting
  /*name: string ="";
  summonerId: string ="";
  accountId: string ="";
  puuid: string="";
  summonerLevel: number = 0;
  revisionDate: number = 0;
  profileIconId: number = 0;*/


  //checkboxes
  checkbox1:boolean = false;
  marked1: boolean = false;

  checkbox2:boolean = false;
  marked2: boolean = false;

  checkbox3:boolean = false;
  marked3: boolean = false;

  checkbox4:boolean = false;
  marked4: boolean = false;

  checkbox5:boolean = false;
  marked5: boolean = false;

  checkbox6:boolean = false;
  marked6: boolean = false;

  checkbox7:boolean = false;
  marked7: boolean = false;

  checkbox8:boolean = false;
  marked8: boolean = false;

  checkbox9:boolean = false;
  marked9: boolean = false;

  checkbox10:boolean = false;
  marked10: boolean = false;

  checkbox11:boolean = false;
  marked11: boolean = false;

  checkbox12:boolean = false;
  marked12: boolean = false;


  constructor(private SummonerSvc:SummonerSearchService , private SummonerlistSvc: SummonerService) { }

  ngOnInit() {
    
   
  }

  continue(){
    console.log(this.region);
    this.nameSearch=true;
    
    console.log(this.region);
  }

  back(){
    
    this.nameSearch=false;
    if(this.searching == true){
      this.searching = false;
      this.nameSearch = true;
    }
  }

  search(summonername){
    this.searching=true;
    this.SummonerSvc.GetName(summonername,this.region).subscribe((summoners)=>{
      console.log(summoners)
      this.Summoner = summoners;  
    });
  }

  adding(){
    this.Summoner.region = this.region;
    
    console.log(this.Summoner);
    this.SummonerSvc.addSummoner(this.Summoner).subscribe((Summoner)=>{
      console.log(Summoner)
      this.Summoners.push(Summoner);
    })
    this.searching = false;
    this.nameSearch = false;
  }
  Checked(e){
    this.marked1= e.target.checked;
    this.marked2= e.target.checked;
    this.marked3= e.target.checked;
    this.marked4= e.target.checked;
    this.marked5= e.target.checked;
    this.marked6= e.target.checked;
    this.marked7= e.target.checked;
    this.marked8= e.target.checked;
    this.marked9= e.target.checked;
    this.marked10= e.target.checked;
    this.marked11= e.target.checked;
    this.marked12= e.target.checked;
   
    if(this.checkbox1){
      this.region = "br1";
    }

    else if(this.checkbox2){
      this.region = "eun1";
    }

    else if(this.checkbox3){
      this.region = "euw1";
    }

    else if(this.checkbox4){
      this.region = "jp1";
    }

    else if(this.checkbox5){
      this.region = "kr";
    }

    else if(this.checkbox6){
      this.region = "la1";
    }

    else if(this.checkbox7){
      this.region = "la2";
    }

    else if(this.checkbox8){
      this.region = "na1";
    }

    else if(this.checkbox9){
      this.region = "oce1";
    }

    else if(this.checkbox10){
      this.region = "tr1";
    }

    else if(this.checkbox11){
      this.region = "ru";
    }

    else if(this.checkbox12){
      this.region = "pbe";
    }
    
  }
}
