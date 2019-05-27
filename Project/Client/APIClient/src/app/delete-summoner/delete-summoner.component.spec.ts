import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSummonerComponent } from './delete-summoner.component';

describe('DeleteSummonerComponent', () => {
  let component: DeleteSummonerComponent;
  let fixture: ComponentFixture<DeleteSummonerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteSummonerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSummonerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
