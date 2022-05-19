import { Component, OnInit } from '@angular/core';
import { Banda } from '../banda';
import { BandaService } from '../banda.service';

@Component({
  selector: 'app-banda-list',
  templateUrl: './banda-list.component.html',
  styleUrls: ['./banda-list.component.css']
})
export class BandaListComponent implements OnInit {

  //selected: Boolean = false;
  //selectedActividad!: ActividadDetail;

  //onSelected(escenario: ActividadDetail):void{
  //  this.selected = true;
   // this.selectedActividad = escenario;
 // }
  bandas :Array<Banda>=[];

  constructor(private servicioBanda:BandaService) { }

  ngOnInit() {
    this.getBandas();

  }


  getBandas(): void {
    this.servicioBanda.getBandas().subscribe((bandas)=>{this.bandas=bandas});

}

}
