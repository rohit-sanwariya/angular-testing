import { TestBed } from '@angular/core/testing';
import { CalculatorService } from './calculator.service';
import { LoggerService } from '../Logger/logger.service';


describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService); 
  }); 

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return addition of two numbers',()=>{
    const logger = new LoggerService();
    spyOn(logger,'log');
    expect(service.add(2,2)).toEqual(4);
    // expect(logger.log).toHaveBeenCalledTimes(1);
  })
});
