import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import{ListComponent} from './list/list.component';
import{NewItemComponent} from './new-item/new-item.component';

//var 
const routes: Routes = [
{path:'', pathMatch:'full', redirectTo:'/items'},
{path: 'items', component: ListComponent},
{path:'new-item', component: NewItemComponent}
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { 

}
