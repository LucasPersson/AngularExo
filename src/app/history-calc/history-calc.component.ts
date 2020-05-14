import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import HistoryCalc from './history-calc.model'

@Component({
  selector: 'app-history-calc',
  templateUrl: './history-calc.component.html',
  styleUrls: ['./history-calc.component.css']
})
export class HistoryCalcComponent implements OnInit {


  @Input()
  historycalc : HistoryCalc;

  @Output()
  tooBad : EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteButton(){
    console.log("test");
    this.tooBad.emit([this.historycalc]);
  }

}
