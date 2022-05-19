import { Component, OnInit } from '@angular/core';
import { Banda } from '../banda';
import { BandaDetail } from '../banda-detail';
import { BandaService } from '../banda.service';

@Component({
  selector: 'app-banda-list',
  templateUrl: './banda-list.component.html',
  styleUrls: ['./banda-list.component.css']
})
export class BandaListComponent implements OnInit {

  selected: Boolean = false;
  selectedBanda!: BandaDetail;

  onSelected(banda: BandaDetail):void{
    this.selected = true;
  }
  bandas :Array<Banda>=[];

  constructor(private servicioBanda:BandaService) { }

  ngOnInit() {
    this.getBandas();

  }


  getBandas(): void {
    this.servicioBanda.getBandas().subscribe((bandas)=>{this.bandas=bandas});

}

public darPromedioMiembros(bandass: Banda[]){
  let suma=0
  for(let i=0;i<bandass.length;i++){
      suma+=bandass[i].numberOfMembers;
  }
  return Math.ceil((suma/bandass.length))
}
}
