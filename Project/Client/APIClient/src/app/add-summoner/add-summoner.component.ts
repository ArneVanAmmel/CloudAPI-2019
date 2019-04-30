import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-summoner',
  templateUrl: './add-summoner.component.html',
  styleUrls: ['./add-summoner.component.css']
})
export class AddSummonerComponent implements OnInit {

  nameSearch: boolean =false;
  constructor() { }

  ngOnInit() {
  }

  continue(){
    this.nameSearch=true;
  }

  back(){
    this.nameSearch=false;
  }

}
