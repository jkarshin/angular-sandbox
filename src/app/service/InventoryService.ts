import { Injectable } from '@angular/core';
import { Item } from '../model/Item';
import { SharedDataService } from './SharedDataService';
import inventory from '../../assets/inventory.json';

@Injectable({ providedIn: 'root' })
export class InventoryService extends SharedDataService<Array<Item>> {
  constructor() {
    super(inventory.inventory);
  }
}
