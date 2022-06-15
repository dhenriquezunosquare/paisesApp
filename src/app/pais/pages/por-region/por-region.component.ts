import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['Africa','Europe','Americas','Asia','Oceania'];
  regionActiva:string='';
  paises: any[] = [];
  
  constructor(private paisService:PaisService) { }

  ngOnInit(): void {
  }

  activarRegion(region:string){
    this.regionActiva=region;

    this.paisService.buscarXRegion(this.regionActiva).subscribe(resp=>{
      console.log(resp);
      this.paises = resp;
    })
  }

  getClaseCss(region:string){
    return (region ===this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

}
