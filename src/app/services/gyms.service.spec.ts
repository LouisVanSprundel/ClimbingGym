import { TestBed, inject } from '@angular/core/testing';

import { GymsService } from './gyms.service';

describe('GymsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GymsService]
    });
  });

  it('should be created', inject([GymsService], (service: GymsService) => {
    expect(service).toBeTruthy();
  }));
});
