/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShellyService } from './ShellyService.service';

describe('Service: ShellyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShellyService]
    });
  });

  it('should ...', inject([ShellyService], (service: ShellyService) => {
    expect(service).toBeTruthy();
  }));
});
