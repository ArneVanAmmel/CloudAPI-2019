import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSummonerComponent } from './add-summoner.component';

describe('AddSummonerComponent', () => {
  let component: AddSummonerComponent;
  let fixture: ComponentFixture<AddSummonerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSummonerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSummonerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
