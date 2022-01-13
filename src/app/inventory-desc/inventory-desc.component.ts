import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Item } from '../model/Item';
import { InventoryService } from '../service/InventoryService';

@Component({
  selector: 'app-inventory-desc',
  templateUrl: './inventory-desc.component.html',
  styleUrls: ['./inventory-desc.component.css'],
})
export class InventoryDescComponent implements OnInit, OnDestroy {
  description: string = '';
  items: Array<Item>;
  subscription: Subscription;

  constructor(private inventoryService: InventoryService) {}

  ngOnInit() {
    this.subscription = this.inventoryService.getState().subscribe((items) => {
      this.items = items;
      this.computeDescription();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  computeDescription() {
    let newDescription = '';

    let counts = {};
    this.items
      .map((item) => item.name)
      .filter((name) => name != 'Empty Item')
      .forEach((name) => (counts[name] = counts[name] ? counts[name] + 1 : 1));

    for (let key of Object.keys(counts).sort()) {
      newDescription += `${key}: x${counts[key]}\n`;
    }

    this.description = newDescription;
  }
}
