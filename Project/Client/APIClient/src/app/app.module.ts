import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AddSummonerComponent } from './add-summoner/add-summoner.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavigationComponent,
    AddSummonerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: "", component: LoginComponent},
      {path: "home", component: HomeComponent},
      {path: "AddSummoner", component:AddSummonerComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
