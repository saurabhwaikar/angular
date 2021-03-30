import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainParentComponent } from './main-parent/main-parent.component';
import { RouterModule } from "@angular/router";


@NgModule({
  declarations: [MainParentComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
