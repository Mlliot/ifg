import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  @Output() clicked = new EventEmitter<string>();
  check(){
    this.clicked.emit("Checked");
  }
}
