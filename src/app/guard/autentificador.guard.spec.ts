import { TestBed } from '@angular/core/testing';

import { AutentificadorGuard } from './autentificador.guard';

describe('AutentificadorGuard', () => {
  let guard: AutentificadorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutentificadorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
