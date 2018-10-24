import { Injectable } from '@angular/core';
import { Item } from '../../modelo/Item';
import { AbstractItemsService } from './abstract-items.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MockItemsService extends AbstractItemsService{

  items:Item[];

  constructor() {
  super();
  this.items = [
    new Item("Buy pendrives"),
    new Item("Buy backpacks"),
    new Item("Rent projectors")];
     }
    getItems():Observable<Item[]>{
    return new Observable((obs) => {

        obs.next(this.items);
        obs.complete();
    });
  };
  remove(item:Item):Observable<Item[]>{

    return new Observable((obs) => {
      this.items = this.items.filter(it => it !== item);
      obs.next((this.items));
      obs.complete();
    });
  };

   addItem(item:Item):Observable<Item[]>{

    return new Observable((obs) => {
      this.items.push(item);
      obs.next((this.items));
      obs.complete();
    });
  };
    

}
