import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EqualsService } from './equals.service';


//This class is a service class responsible for interacting with HTTP
@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor(private http: HttpClient, private equalsService: EqualsService) { }

  private display = '';

  post(arg: string){
    this.http.post("http://localhost:8080/postCalc", arg).subscribe( (res) => {
      console.log(res);
    })
  }

  getRecent(){
    this.http.get("http://localhost:8080/getRecentCalc").subscribe( (str: any) => {
      console.log(str);
        this.display = str.calc;
    });
    return this.display;
  }

  clearMemory(){
    this.http.delete("http://localhost:8080/deleteAllCalc").subscribe(
      (res) => { console.log("Delete: " + res)}
    )
  }

  pop(){
    this.http.delete("http://localhost:8080/popCalc").subscribe(
      (res: any) => {
        // this.display = res.calc;
        console.log("pop: " + res)
      }
    )
    return this.getRecent();
  }

  // private displaySource = new Subject<string>();
  // currentDisplay = this.displaySource.asObservable();

  // e = '';

  // changeDisplay(numToDisplay: string) {
  //   this.e = numToDisplay;
  //   if(this.e=="●"){
  //     this.displaySource.next(("."));
  //     return;
  //   } else if(this.e=="C"){
  //     this.displaySource.next("clear");
  //   } else if(this.e=="CE"){
  //     this.displaySource.next("clear");
  //   } else if(this.e=="="){
  //     //EQUALS LOGIC
  //     console.log("EQUALS!");
  //     this.displaySource.next("equals");
  //   }else {
  //     this.displaySource.next(this.e);
  //   }
  // }
  
}
