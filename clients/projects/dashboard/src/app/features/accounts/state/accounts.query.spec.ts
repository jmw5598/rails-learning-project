import { TestBed } from '@angular/core/testing';

import { AccountsQuery } from './accounts.query';

describe('AccountsQuery', () => {
  let service: AccountsQuery;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountsQuery);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
