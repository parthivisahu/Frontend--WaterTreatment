import { Injectable } from '@angular/core';
import {Observable, timer} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  startTimer() :Observable<number>{
    return timer(0,1000);
  }
}
