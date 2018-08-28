import { TestBed, inject } from '@angular/core/testing';

import { DipiService } from './dipi.service';

describe('DipiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DipiService]
    });
  });

  it('should be created', inject([DipiService], (service: DipiService) => {
    expect(service).toBeTruthy();
  }));
});
