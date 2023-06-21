import { TestBed } from '@angular/core/testing';

import { AccountsStore } from './accounts.store';

describe('AccountsStore', () => {
  let service: AccountsStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountsStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
