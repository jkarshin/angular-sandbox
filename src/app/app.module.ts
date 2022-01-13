import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MyInputComponentComponent } from './my-input-component/my-input-component.component';
import { InventoryComponent } from './inventory/inventory.component';
import { InventoryDescComponent } from './inventory-desc/inventory-desc.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    InventoryComponent,
    InventoryDescComponent,
    MyInputComponentComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
