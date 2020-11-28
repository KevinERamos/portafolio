import { Component, OnInit } from '@angular/core';
import { ProyectosService } from '../service/proyectos.service';
import { proyecto } from '../models/proyecto'
import { parseSelectorToR3Selector } from '@angular/compiler/src/core';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  arr:Array<proyecto> = new Array<proyecto>();

  constructor(private serProy: ProyectosService) { }

  ngOnInit(): void {

    this.serProy.getProy().subscribe(
      (data)=>{
        this.arr = data;
        //console.log(typeof this.arr)
      }
    );      
  }

  
}
