import { TestBed, inject } from '@angular/core/testing';

import { RuoliService } from './ruoli.service';

describe('RuoliService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RuoliService]
    });
  });

  it('should be created', inject([RuoliService], (service: RuoliService) => {
    expect(service).toBeTruthy();
  }));
});
