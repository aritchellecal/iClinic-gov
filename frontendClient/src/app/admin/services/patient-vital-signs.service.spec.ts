import { TestBed } from '@angular/core/testing';

import { PatientVitalSignsService } from './patient-vital-signs.service';

describe('PatientVitalSignsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PatientVitalSignsService = TestBed.get(PatientVitalSignsService);
    expect(service).toBeTruthy();
  });
});
