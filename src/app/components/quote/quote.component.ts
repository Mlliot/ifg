import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quote',
  imports: [FormsModule],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.css'
})
export class QuoteComponent {
  @Input() isOn = false;

  isSubmitted = false;

  nameQuote = '';
  emailQuote = '';
  textQuote = '';

  dataQuote = {
    'quoteName': '',
    'quoteEmail': '',
    'quoteText': ''
  }

  closeQuote(){
    console.log("Submitted!");
    this.isOn = false;
  }

  submitQuote(e: Event){
    const quoteName = this.nameQuote;
    const quoteEmail = this.emailQuote;
    const quoteText = this.textQuote;
    e.stopPropagation();
    this.dataQuote = {
      quoteName,quoteEmail,quoteText
    }
    console.log(this.dataQuote);
    this.isSubmitted=true;
    // this.isOn = false;
    setTimeout( () => {
      this.isSubmitted = false;
      this.nameQuote = '';
      this.emailQuote = '';
      this.textQuote = '';
      this.closeQuote();
    }, 5000)
  }
}
