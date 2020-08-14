import {Injectable, EventEmitter} from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
    notifyData: EventEmitter<string>;
    constructor(){
      this.notifyData = new EventEmitter<string>();
    }

    // define a method
    writeData(value: string): void {
      this.notifyData.emit(value);
    }
}
