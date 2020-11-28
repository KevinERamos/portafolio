import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { proyecto } from '../models/proyecto'
@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  proyecto: proyecto = new proyecto();

  enlace = "https://kevineramos.github.io/json/portafolio.json";
  constructor(private http: HttpClient) { }

  getProy():Observable<proyecto[]> {
    return this.http.get<proyecto[]>(this.enlace);
  }

  
}
