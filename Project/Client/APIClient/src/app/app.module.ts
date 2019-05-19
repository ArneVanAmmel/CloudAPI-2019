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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavigationComponent,
    AddSummonerComponent,
    SummonerListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: "", component: LoginComponent},
      {path: "home", component: HomeComponent},
      {path: "AddSummoner", component:AddSummonerComponent},
      {path: "SummonerList",component:SummonerListComponent},
    ])
  ],
  providers: [
    SummonerService,
    SummonerSearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
