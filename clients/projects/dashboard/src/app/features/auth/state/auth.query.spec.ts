import { TestBed } from '@angular/core/testing';

import { AuthQuery } from './auth.query';

describe('AuthQuery', () => {
  let service: AuthQuery;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthQuery);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
