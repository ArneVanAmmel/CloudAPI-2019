import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonerListComponent } from './summoner-list.component';

describe('SummonerListComponent', () => {
  let component: SummonerListComponent;
  let fixture: ComponentFixture<SummonerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummonerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
