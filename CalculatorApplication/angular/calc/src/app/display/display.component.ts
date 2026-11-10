import { Component, EventEmitter, input, Input, Signal } from '@angular/core';
import { isInNotificationPhase } from '@angular/core/primitives/signals';
import { DisplayService } from '../display.service';
import { EqualsService } from '../equals.service';
import { CalculatorComponent } from '../calculator/calculator.component';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-display',
  imports: [],
  template: `
      <div id="display">
      <div id="display_glass">
          @if(isThisThingOn) {
              <div id="screen">
                  {{numbers}}
              </div>
          }
          @else { <div id="screen"></div> }
      </div>
      </div>`,
  styleUrl: './display.component.css'
})
export class DisplayComponent {
  constructor(private displayService: DisplayService, private equalsService: EqualsService){}
  @Input() isThisThingOn = false;
  @Input() value = '';


  numbers = '';
  str = '';

  // displayNumber() {
  //   this.numbers = this.value;
  // }

  ngOnInit() {
    this.str = this.equalsService.display.subscribe;
    // this.displayService.currentDisplay.subscribe( 
    //   numbers => {
    //     console.log(numbers);
    //     if(numbers=="clear"){
    //       this.numbers = '';
    //     } if(numbers=="equals"){
    //       this.str = this.equalsService.equals(this.numbers);
    //       this.numbers = this.str;
    //     } else {
    //       this.numbers = this.numbers + numbers;
    //     }
    //   }
    // );

    
    this.numbers = this.displayService.getRecent();
    this.equalsService.display.subscribe(
      (x) => { console.log(x); }
    );
    // this.numbers = this.displayService.pop();
  
    // this.equalsService
  } 
}