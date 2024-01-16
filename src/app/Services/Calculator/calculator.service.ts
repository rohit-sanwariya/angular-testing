import { Injectable } from '@angular/core';
import { LoggerService } from '../Logger/logger.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(
    private _logger:LoggerService,
  ) { }

  add(x:number,y:number):number{
    this._logger.log(`Adding ${x} and ${y}`);
    return x+y;
  }
}
