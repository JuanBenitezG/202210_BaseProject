import { Component, Input, OnInit } from '@angular/core';
import { BandaDetail } from '../banda-detail';

@Component({
  selector: 'app-actividad-detail',
  templateUrl: './banda-detail.component.html',
  styleUrls: ['./banda-detail.component.css']
})
export class ActividadDetailComponent implements OnInit {

  constructor() { }


  @Input() actividadDetail!: BandaDetail;


  ngOnInit() {
  }

}
