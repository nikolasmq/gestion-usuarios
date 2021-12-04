/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PeticionesService } from './peticiones.service';

describe('Service: Peticiones', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeticionesService]
    });
  });

  it('should ...', inject([PeticionesService], (service: PeticionesService) => {
    expect(service).toBeTruthy();
  }));
});
