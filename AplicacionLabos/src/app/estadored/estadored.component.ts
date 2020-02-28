import { Component, OnInit } from '@angular/core';
import {Laboratorio} from "../../../../AplicacionServidor/src/app/interfaces/laboratorio";
import {Estadored} from "../interfaces/estadored";
import {OverlayPanel} from "primeng/overlaypanel";

@Component({
  selector: 'app-estadored',
  templateUrl: './estadored.component.html',
  styleUrls: ['./estadored.component.css']
})
export class EstadoredComponent implements OnInit {
  nombreLaboratorio: string;
  imagenLaboratorio: string;
  pc: Estadored;
  pc1: Estadored;
  pc2: Estadored;
  pc3: Estadored;
  pc4: Estadored;
  pc5: Estadored;
  pcauxiliar: Estadored;
  constructor() {
    this.pcauxiliar = {
      id_laboratorio: 0,
      id_pc: 0,
      nombre_pc: '',
      ip: '',
      almacenamiento: '',
      estado: true,
      ram: ''
    };
  }

  ngOnInit() {
    this.nombreLaboratorio = 'Beta';
    this.imagenLaboratorio = 'https://www.greeksymbols.net/img/beta-symbol.png';
    this.pc = {
      id_laboratorio: 1,
      id_pc: 1,
      nombre_pc: 'PC1',
      ip: '192.168.71.201',
      almacenamiento: '256GB',
      estado: true,
      ram: '16GB'
    };
    this.pc1 = {
      id_laboratorio: 1,
      id_pc: 1,
      nombre_pc: 'PC1',
      ip: '192.168.71.201',
      almacenamiento: '256GB',
      estado: true,
      ram: '16GB'
    };
    this.pc2 = {
      id_laboratorio: 1,
      id_pc: 2,
      nombre_pc: 'PC2',
      ip: '192.168.71.202',
      almacenamiento: '256GB',
      estado: true,
      ram: '16GB'
    };
    this.pc3 = {
      id_laboratorio: 1,
      id_pc: 3,
      nombre_pc: 'PC3',
      ip: '192.168.71.203',
      almacenamiento: '256GB',
      estado: true,
      ram: '16GB'
    };
    this.pc4 = {
      id_laboratorio: 1,
      id_pc: 4,
      nombre_pc: 'PC4',
      ip: '192.168.71.204',
      almacenamiento: '256GB',
      estado: true,
      ram: '16GB'
    };
    this.pc5 = {
      id_laboratorio: 1,
      id_pc: 5,
      nombre_pc: 'PC5',
      ip: '192.168.71.205',
      almacenamiento: '256GB',
      estado: true,
      ram: '16GB'
    };
  }
  enviarLaboratorio(event, overlay: OverlayPanel, pc) {
    this.pcauxiliar = pc;
    overlay.toggle(event);
  }
  cerrarToggle(overlay: OverlayPanel) {
    overlay.hide();
  }

}
