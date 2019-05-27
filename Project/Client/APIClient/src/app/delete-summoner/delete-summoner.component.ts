import { Component, OnInit } from '@angular/core';
import {SummonerService, ISummoners} from '../Services/SummonerList/summoner.service';

@Component({
  selector: 'app-delete-summoner',
  templateUrl: './delete-summoner.component.html',
  styleUrls: ['./delete-summoner.component.css']
})
export class DeleteSummonerComponent implements OnInit {

  Summoners: ISummoners;
  DeleteSum: ISummoners[];
  
  constructor(private SummonerSvc:SummonerService) { }

  ngOnInit() {
    this.SummonerSvc.GetSummoners().subscribe((summoners)=>{
      console.log(summoners)
      this.Summoners = summoners;
    });
  }

  delete(summonerId:number){
    this.SummonerSvc.DeleteSummoner(summonerId).subscribe(_ =>{
      this.DeleteSum = this.DeleteSum.filter(eachSum => eachSum.summonerId !== summonerId);
    });
  }
}
