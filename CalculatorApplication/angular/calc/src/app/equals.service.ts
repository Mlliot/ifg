import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { DisplayComponent } from './display/display.component';
import { ButtonsComponent } from './buttons/buttons.component';

//Class responsible for taking button presses, constructing the display string
@Injectable({
  providedIn: 'root'
})
export class EqualsService{

  constructor() { }

  private currentDisplay: string = '';

  display = new Observable<string>();

  // @Output() display = new EventEmitter<string>(); 
  
  //need to be able to update currentDisplay
  updateCurrentDisplay(str: string){
    this.currentDisplay = this.currentDisplay + str;
    console.log("Current Display: " + this.currentDisplay);
    this.display.emit(str);
  }

  getDisplay(){
    return this.currentDisplay;
  }

}
