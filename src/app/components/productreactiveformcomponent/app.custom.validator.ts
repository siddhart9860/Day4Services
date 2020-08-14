import {AbstractControl} from '@angular/forms';
export class CustomValidator {
  // if the data is valid then the method returns null
  // else for invalid value the method return  JSON object e.g.
  // {even:false} or {odd:true}
  static CheckEven(control: AbstractControl): any {
     // tslint:disable-next-line: radix
     const value = parseInt (control.value);
     if (value % 2 === 0) {
       return null; // valid
     } else {
        return {even : false}; // invalid
     }
  }
}
