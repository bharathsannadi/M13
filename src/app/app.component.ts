import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HerosComponent} from './heros/heros.component'


@NgModule({
  declarations:[HerosComponent],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
}
