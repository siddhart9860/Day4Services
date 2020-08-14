import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SimpleComponent} from './simplecomponent';
import {ProductFormComponent} from './components/productformcomponent/app.productform.component';
import { TableDirectiveComponent } from './directive/componentdirective/app.tablecomponent.directive';
import { ProductReactiveFormComponent } from './components/productreactiveformcomponent/app.productreactiveform.component';
import { CategorySenderComponent } from './components/multicomponents/app.categorysender.component';
import { ProductReceiverComponent } from './components/multicomponents/app.productreceiver.component';
import { ServiceComponent } from './components/servicecomponent/app.service.component';
// NgModule decorator with properties
// 1. imports: of the type array, used to import standard and external
// angular modules in current application
// 2. declarations: of the type array, used to declare all
// components, pipes and directives of current application
// 3. providers: of the type array, used to provide D.I. Container
// for the current Angular module to register all angular services
// 4. entryComponent: of the type array, used to define Angular
// components as Elements so that they can be exposed to other
// JavaSCript libs/frwks
// 5. bootsrap: of the type array, used to bootsrap all those
// components from declarations array so that they can be used to
// load and render in browser
@NgModule({
  declarations: [
    AppComponent, SimpleComponent, ProductFormComponent,
    TableDirectiveComponent, ProductReactiveFormComponent,
    CategorySenderComponent, ProductReceiverComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ServiceComponent]
})
export class AppModule { }
