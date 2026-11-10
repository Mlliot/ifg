import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisplayComponent } from "./display/display.component";
import { NavComponent } from './nav/nav.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CalculatorComponent } from "./calculator/calculator.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DisplayComponent, NavComponent, ButtonsComponent, CalculatorComponent],
  // templateUrl: './app.component.html',
  template: "<app-calculator></app-calculator>",
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calc';

}
