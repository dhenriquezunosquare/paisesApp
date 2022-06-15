import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css'],
})
export class VerPaisComponent implements OnInit {
  pais:any;
  constructor(
    private actitvatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
      this,this.actitvatedRoute.params
      .pipe(
        switchMap((param:any)=>this.paisService.buscarXCodigo(param.id))
      )
      .subscribe((pais:any) => {
        this.pais=pais[0];
        console.log(this.pais);
      })
    
    // this.actitvatedRoute.params.subscribe((params: any) => {
    //   console.log(params);
    //   this.paisService.buscarXCodigo(params.id).subscribe((pais) => {
    //     console.log(pais);
    //   });
    // });
  }
}
