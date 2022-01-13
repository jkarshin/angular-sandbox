import { Component, OnInit } from '@angular/core';
import { Item } from '../model/Item';
import inventory from '../../assets/inventory.json';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
})
export class InventoryComponent implements OnInit {
  items: Array<Item>;

  ngOnInit(): void {
    console.info('Initting inventory...');
    this.items = inventory.inventory;
  }

  onItemClick(i: number) {
    console.log(`You selected item at index ${i}`);
    this.items[i] = {
      name: 'Empty Item',
      image_path: '',
    };
  }
}
