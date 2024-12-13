import { TestBed } from '@angular/core/testing';

import { MytestSerService } from './mytest-ser.service';

describe('MytestSerService', () => {
  let service: MytestSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MytestSerService);
  });
  it("check multipliaction",()=>{
    let serObj = new MytestSerService();
    // let result = serObj.mul(8,5);
    // expect(result).toBe(40);
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
