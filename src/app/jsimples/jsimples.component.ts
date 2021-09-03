import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jsimples',
  templateUrl: './jsimples.component.html',
  styleUrls: ['./jsimples.component.css']
})
export class JsimplesComponent implements OnInit {
    c: number;
    j: number;
    t: number;

constructor() {
    this.c = 2;
    this.j = 1;
    this.t = 10;
   }

  ngOnInit() {}

getSimples(){
    let list: number[] = [];
    let formula = (this.c*(this.j/100));
    let rendimento = (formula);
      for (let i = 0; i < this.t; i++) {
        list.push(Number(rendimento.toFixed(2)));
        rendimento = (Number(rendimento)+Number(formula));
      }  
      return list;
  }  

}