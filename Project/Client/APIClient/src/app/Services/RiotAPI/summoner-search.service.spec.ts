import { TestBed } from '@angular/core/testing';

import { SummonerSearchService } from './summoner-search.service';

describe('SummonerSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SummonerSearchService = TestBed.get(SummonerSearchService);
    expect(service).toBeTruthy();
  });
});
