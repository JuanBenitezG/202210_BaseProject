import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BandaListComponent } from './banda-list/banda-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BandaListComponent],
  exports:[BandaListComponent]
})
export class BandaModule { }
