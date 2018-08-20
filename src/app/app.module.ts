import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRouting } from './app.routing';

import { AppComponent } from './app.component';
import { SelectTurtleComponent } from './select-turtle/select-turtle.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TurtleDetailsComponent } from './turtle-details/turtle-details.component';


@NgModule({
  declarations: [
    AppComponent,
    SelectTurtleComponent,
    WelcomeComponent,
    TurtleDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
