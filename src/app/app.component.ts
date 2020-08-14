import { Component } from '@angular/core';


// properties of component
// selector: the custom HTML Tag using which the component will be
// referred in HTML page (or HTML template of other compients)
// templateUrl: The URL of HTML file that defines UI of component
// templare: Inline HTML to component class
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
   message: string;
   name: string;
   characters: Array<string>;
   selectedCharacter: string;
   url:string;
   isVisible: boolean;
   constructor(){
     this.message = 'The First Angular Component';
     this.name = '';
     this.characters = new Array<string>();
     this.characters.push('James Bond');
     this.characters.push('Ethan Hunt');
     this.characters.push('Indiana Jones');
     this.characters.push('Jason Bourn');
     this.selectedCharacter = '';
     this.url = 'https://www.webnethelper.com';
     this.isVisible = true;

   }

   show(): void {
     if (this.isVisible) {
       this.isVisible = false;
     }else {
       this.isVisible = true;
     }
   }

   display(event): void {
     this.message = `The Event is Raised ${event.target.value}`;
   }
}
