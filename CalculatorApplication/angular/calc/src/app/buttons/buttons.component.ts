import { Component, EventEmitter, Output } from '@angular/core';
import { DisplayService } from '../display.service';
import { EqualsService } from '../equals.service';
import { OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-buttons',
  imports: [],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent implements OnInit {
  constructor(private displayService: DisplayService, private equalsService: EqualsService){}

  public click$ = new Subject<MouseEvent>();
  private subscriptions = new Subscription();
  
  @Output() buttonDown = new EventEmitter<any>;
  e = '';

  buttonClicked(event: MouseEvent){
    // this.buttonDown.emit(event);
    this.equalsService.updateCurrentDisplay((event.target as HTMLElement).id);
  }

  sendNumToDisplay(event: MouseEvent) {
    // this.e = (event.target as HTMLElement).id;
    //   this.displayService.changeDisplay(this.e);
  }

  ngOnInit(): void {
      this.subscriptions.add(this.handleClick(this.click$));
  }

  handleClick<T>(subject: Subject<T>): Subscription {
    return subject.subscribe(event => {
      console.log("Button clicked!!!!!");
    })
  }

}