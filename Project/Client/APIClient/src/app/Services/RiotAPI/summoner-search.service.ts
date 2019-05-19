import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class SummonerSearchService {
  //name:string = "King Potato xD";
  constructor(private http: HttpClient) { }


  GetName(name,region){
    return this.http.get<ISummoner[]>("https:"+region+".api.riotgames.com/lol/summoner/v4/summoners/by-name/"+name+"?api_key=RGAPI-2309ae74-e48e-4e69-8285-62d7c5a304e8")
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
}



