import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import HistoryCalc from '../history-calc/history-calc.model';
//import historycalc from '../historycalc/historycalc.component';

@Component({
  selector: 'app-root',
  templateUrl: './calcultrice.component.html',
  styleUrls: ['./calcultrice.component.css']
})
export class CalcultriceComponent implements OnInit {

  resultat = "0";
  historyList =[];


  @Input()
  //article : historycalc;

  @Output()
  tooBad : EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  egal(){

    try{
      this.historyList.push(new HistoryCalc(this.resultat));
      this.resultat = ""+eval(this.resultat);
    } catch (e){
      this.resultat = "Err";
    }
  }

  nettoie(){
    this.resultat = "0";
  }

  presse(e,touche){
    if (this.resultat=="0" || this.resultat=="Err")
      this.resultat=""+touche;
    else this.resultat+=""+touche;
  }

  deleteHistory(e){
    var indice = this.historyList.indexOf(e[1]);
    if (indice!=-1){
      console.log("bbbbb");
      this.historyList.splice(indice,1);
    }
  }

}
