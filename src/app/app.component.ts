import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   error = ""
  num1 = "";
  num2 = "";
  result = "";

  operator = "";
  finished = false;

  constructor() { }

  ngOnInit(): void {
  }

  restartOperation(){
    //this.result = "";
      this.num1 = "";
      this.num2 = "";
      this.operator = "";
  }

  toto(event,a){

    var list = ["*","+","-","/"];

    this.error = "";

    if(this.finished){
      this.result="";
      this.finished = false;
    }

    if(a == 'C'){
      this.restartOperation();
      this.result = "";
    }
    else if(a == "=") {
      if(this.num1 == "" || this.num2 == ""){
        this.error = "Mettez deux numéros avant de faire le calcul!"
      }
      else {
        var finalResult = 0.0;

        if(this.operator == "/"){
          if(this.num1 == "0" || this.num2 == "0"){
            this.error = "Pas de 0 dans les divisions!";
          }
          else {
            finalResult = parseFloat(this.num1) / parseFloat(this.num2);
          }
        }
        else if(this.operator == "*"){
          finalResult = parseInt(this.num1) * parseInt(this.num2);
        }
        else if(this.operator == "+"){
          finalResult = parseInt(this.num1) + parseInt(this.num2);
        }
        else if(this.operator == "-"){
          finalResult = parseInt(this.num1) - parseInt(this.num2);
        }

        //console.log(finalResult);
        this.result = finalResult.toString();

        this.finished = true;

        this.restartOperation();
      }

    }
    else if(list.indexOf(a) !== -1){
      if(this.num1 != "" && this.operator == ""){
        this.operator = a;
        this.result += a;
      }
      else {
        this.error = "Vous pouvez pas faire ca maintenant!"
      }
    }
    else {
      if(this.num2 == "" && this.operator == ""){
        this.num1 += a;
      }
      else {
        this.num2 += a;
      }

      this.result += a;
    }

    //console.log("Num1 : " + this.num1);
    //console.log("Num2 : " + this.num2);

    //console.log(event);
  }
}
