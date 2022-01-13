import { Component, OnDestroy, OnInit } from '@angular/core';
import { Item } from '../model/Item';
import inventory from '../../assets/inventory.json';
import { InventoryService } from '../service/InventoryService';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
})
export class InventoryComponent implements OnInit, OnDestroy {
  items: Array<Item>;
  subscription: Subscription;

  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {
    // console.info('Initting inventory...');
    // this.items = inventory.inventory;

    this.subscription = this.inventoryService
      .getState()
      .subscribe((items) => (this.items = items));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onItemClick(i: number) {
    console.log(`You selected item at index ${i}`);
    this.items[i] = {
      name: 'Empty Item',
      image_path: '',
    };
    this.inventoryService.changeState(this.items);
  }
}
