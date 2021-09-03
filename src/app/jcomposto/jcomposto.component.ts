import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jcomposto',
  templateUrl: './jcomposto.component.html',
  styleUrls: ['./jcomposto.component.css']
})
export class JcompostoComponent implements OnInit {
    c: number;
    j: number;
    t: number;
  
constructor() {
    this.c = 2;
    this.j = 1;
    this.t = 10;
  }

ngOnInit() {
  }

getCompostos(){
    let formula = (Math.pow(1 + this.j/100,this.t));
    let final = ((this.c)*(formula));
    let rendimento = ((final)-(this.c));
    let jc: Number = ((this.c)+(rendimento));
    let total = (jc.toFixed(2));
      return total;
    }
    
    Acumulados() {
      let list: number[] = [];
      let formula = (Math.pow(1 + this.j/100,this.t));
      let final = ((this.c)*(formula));
      let rendimento = ((final)-(this.c));
      let total = rendimento;
        for (let i = 0; i < this.t; i++) {
          total = (this.c*((1+this.j/100)**(i+1))-this.c);
          list.push(Number(total.toFixed(2)));
          total = (total);
        }
        return list;
      }

}
