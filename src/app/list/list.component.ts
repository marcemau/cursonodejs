import { Component, OnInit } from '@angular/core';
import { Item } from '../../modelo/Item';
import { MockItemsService } from '../_services/mock-items.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	items : Item[];
 // service: MockItemsService;

  constructor(private service:MockItemsService) { 

//this.service=new MockItemsService();
this.service.getItems().subscribe(serviceItems => {
  this.items=serviceItems

});
//this.items=serviceItems();

}

  ngOnInit() {
  }
  onRemove(item:Item){
  //this.items = this.items.filter(it => it !== item);
  //this.items=serviceItems;
  this.service.remove(item);
  }

}
