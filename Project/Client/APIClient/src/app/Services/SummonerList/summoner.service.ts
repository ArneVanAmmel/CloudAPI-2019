import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SummonerService {
 
  
  constructor(private http: HttpClient) { }

  GetSummoners(){
    return this.http.get<ISummoners>("http://localhost:30968/api/Summoners")
  } 

  GetSummoner(name){
    return this.http.get<ISummoners>("http://localhost:30968/api/Summoners/"+name)
  }

  DeleteSummoner(summonerId){
    return this.http.delete<ISummoners[]>("http://localhost:30968/api/Summoners/"+summonerId)
  }
  
}

export interface ISummoners {
  id: string;
  summonerId: number;
  accountId: string;
  puuid: string;
  name: string;
  profileIconId: number;
  revisionDate: number;
  summonerLevel: number;
  region: string;
}
