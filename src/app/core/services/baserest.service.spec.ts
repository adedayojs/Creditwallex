import { TestBed } from '@angular/core/testing';

import { BaserestService } from './baserest.service';

describe('BaserestService', () => {
  let service: BaserestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaserestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
