import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AddSummonerComponent } from './add-summoner/add-summoner.component';
import { SummonerListComponent } from './summoner-list/summoner-list.component';
import { from } from 'rxjs';
import {SummonerService} from './Services/SummonerList/summoner.service';
import {SummonerSearchService} from './Services/RiotAPI/summoner-search.service';
import {FormsModule} from '@angular/forms';
import { DeleteSummonerComponent } from './delete-summoner/delete-summoner.component';
import { SummonerComponent } from './summoner/summoner.component';
import { MatchHistoryComponent } from './match-history/match-history.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavigationComponent,
    AddSummonerComponent,
    SummonerListComponent,
    DeleteSummonerComponent,
    SummonerComponent,
    MatchHistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: "", component: LoginComponent},
      {path: "Home", component: HomeComponent},
      {path: "AddSummoner", component:AddSummonerComponent},
      {path: "SummonerList",component:SummonerListComponent},
      {path: "DeleteSummoner",component:DeleteSummonerComponent},
      {path: "SummonerSearch",component:SummonerComponent},
      {path: "Match-History",component:MatchHistoryComponent},
    ])
  ],
  providers: [
    SummonerService,
    SummonerSearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
