import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css'],
})
export class PorPaisComponent implements OnInit {
  termino: string = '';
  error: boolean = false;
  paises: any[] = [];
  paisesSugeridos: any[] = [];

  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  buscar(termino: string) {
    this.mostrarSugerencias=false;
    this.termino = termino;
    this.error = false;
    this.paisService.buscarPais(this.termino).subscribe(
      (resp: any) => {
        console.log(resp);
        this.paises = resp;
      },
      (err) => {
        this.paises=[];
        this.error = true;
        console.log(err);
      }
    );
  }

  sugerencias(termino: string) {
    this.error=false;
    this.mostrarSugerencias=true;
    this.paisService.buscarPais(termino).subscribe(paises => {
      this.paisesSugeridos=paises.splice(0,5);
    },(err)=>{
      this.paisesSugeridos=[];
    })
  }
}
