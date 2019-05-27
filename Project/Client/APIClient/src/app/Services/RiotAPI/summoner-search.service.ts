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
    return this.http.get<ISummoner>("https:"+region+".api.riotgames.com/lol/summoner/v4/summoners/by-name/"+name+"?api_key=RGAPI-5ff2cdf6-2e94-4de0-9cf7-9b0a1ece8bf1")
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



