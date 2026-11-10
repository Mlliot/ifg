import { Component, EventEmitter, output, Output } from '@angular/core';
import { DisplayComponent } from '../display/display.component';
import { NavComponent } from '../nav/nav.component';
import { ButtonsComponent } from '../buttons/buttons.component';
import { of } from 'rxjs';

@Component({
  selector: 'app-calculator',
  imports: [DisplayComponent, NavComponent, ButtonsComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  toggleOn = false;
  call = "";

  numToDisplay = '';


  navClicked(){
    if(this.toggleOn==false){
      this.toggleOn=true;
      console.log("True");
    } else {
      this.toggleOn=false;
      console.log("False");
    }
    console.log("On Button Clicked");
  }

  buttonClicked(event: MouseEvent){
    if(!event.target){ return; }
    console.log((event.target as HTMLElement).id);
    this.numToDisplay = event.toString();
  }
}
