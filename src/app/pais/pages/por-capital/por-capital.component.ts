import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  termino: string = '';
  error: boolean = false;
  paises: any[] = [];
  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  buscar(termino: string) {
    this.termino = termino;
    this.error = false;
    this.paisService.buscarXCapital(this.termino).subscribe(
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
    console.log("Entrando")
    this.error=false;
  }

}
