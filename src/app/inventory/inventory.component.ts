import { Component, OnInit } from '@angular/core';
import { Item } from '../model/Item';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
})
export class InventoryComponent implements OnInit {
  items: Array<Item>;

  ngOnInit(): void {
    console.info('Initting inventory...');
    this.items = [
      {
        name: 'Bronze Dagger',
      },
      {
        name: 'Fire Rune',
      },
      {
        name: 'Iron Bar',
      },
    ];
  }
}
