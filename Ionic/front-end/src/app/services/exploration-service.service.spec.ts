import { TestBed } from '@angular/core/testing';

import { ExplorationServiceService } from './exploration-service.service';

describe('ExplorationServiceService', () => {
  let service: ExplorationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExplorationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
