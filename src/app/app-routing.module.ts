import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemListComponent } from './feature/item-list/item-list.component';
import { ItemComponent } from './feature/item/item.component';
import { MainParentComponent } from './layout/main-parent/main-parent.component';


const routes: Routes = [
  { path:'', component: MainParentComponent  },
  {
    path: 'groc',
    component: MainParentComponent,
    children: [
      { path: 'items', component: ItemListComponent }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
