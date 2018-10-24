import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { NewItemComponent } from './new-item/new-item.component';
import { RouterModule} from '@angular/router';
import {MockItemsService} from './_services/mock-items.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NewItemComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, RouterModule
  ],
  providers: [MockItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
