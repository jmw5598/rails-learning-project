import { TestBed } from '@angular/core/testing';

import { AccountsEffects } from './accounts.effects';

describe('AccountsEffects', () => {
  let service: AccountsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountsEffects);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
