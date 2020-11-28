import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dedicacion',
  templateUrl: './dedicacion.component.html',
  styleUrls: ['./dedicacion.component.css']
})
export class DedicacionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  edad = ()=>{
    let cump = new Date(1995,6,4);
    let fecha = new Date();

    let anos = fecha.getFullYear() - cump.getFullYear();
    let mes = fecha.getMonth() - cump.getMonth();
    let dias = fecha.getDate() - cump.getDate();

    if (mes >= 0 && dias >= 0) {
      return anos;
    }else{
      return anos -1;
    }
  }
}
