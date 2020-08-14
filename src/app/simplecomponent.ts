import {Component} from '@angular/core';

@Component({
  selector: 'app-simple-component',
  template: `
     <h2>The Simple Component</h2>
     <div>
       <strong>{{message}}</strong>
     </div>
  `
})
export class SimpleComponent {
  message: string;
  constructor(){
    this.message = 'I am from Simple Component';
  }
}
