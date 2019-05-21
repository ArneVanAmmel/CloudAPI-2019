import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISummoners } from '../SummonerList/summoner.service';



@Injectable({
  providedIn: 'root'
})
export class SummonerSearchService {
  //name:string = "King Potato xD";
  constructor(private http: HttpClient) { }


  GetName(name,region){
    return this.http.get<ISummoner>("https:"+region+".api.riotgames.com/lol/summoner/v4/summoners/by-name/"+name+"?api_key=RGAPI-d2c5ed83-9c4d-4d46-b7c8-9d51e1de2e41")
  }
  addSummoner(Summoner){
    return this.http.post<ISummoners>("http://localhost:30968/api/Summoners",Summoner);
  }
}

export interface ISummoner {
  id: string;
  accountId: string;
  puuid: string;
  name: string;
  profileIconId: number;
  revisionDate: number;
  summonerLevel: number;
  region: string;
  summonerId:number;
}



