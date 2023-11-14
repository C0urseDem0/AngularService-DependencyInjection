/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SubscribeService } from './Subscribe.service';

describe('Service: Subscribe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubscribeService]
    });
  });

  it('should ...', inject([SubscribeService], (service: SubscribeService) => {
    expect(service).toBeTruthy();
  }));
});
