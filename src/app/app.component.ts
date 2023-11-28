import { Component, OnInit } from '@angular/core';
import { Evento } from './models/evento.model';
import data from '../assets/data.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  eventos: Evento[] = [];
  filtro: string = '';


  ngOnInit() {
    const json: any = data;

    this.eventos = json;

    this.eventos.map((value) => value.fecha = new Date(value.fecha));
  }

  obtenerEventosActuales(): Evento[] {
    return this.eventos.filter(value => value.fecha >= new Date() && (value.direccion.toLowerCase()).indexOf(this.filtro.toLowerCase()) != -1)
  }

  obtenerEventosPasados(): Evento[] {
    return this.eventos.filter(value => value.fecha < new Date() && (value.direccion.toLowerCase()).indexOf(this.filtro.toLowerCase()) != -1)
  }

  obtenerLugares(): string[] {

    let direcciones: string[] = this.eventos.map(value => value.direccion);

    return direcciones.filter((value: string, idx: number) => direcciones.indexOf(value) == idx);
  }

}
