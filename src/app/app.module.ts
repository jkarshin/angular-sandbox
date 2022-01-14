import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MyInputComponentComponent } from './my-input-component/my-input-component.component';
import { InventoryComponent } from './inventory/inventory.component';
import { InventoryDescComponent } from './inventory-desc/inventory-desc.component';
import { TabBarComponent } from './tab-bar/tab-bar.component';
import { UIRouterModule } from '@uirouter/angular';
// import { UIRouterModule } from '@uirouter/angular';

/** States */

const inventoryState = { name: 'inventory', component: InventoryComponent };
const inventoryDescState = {
  name: 'inventoryDesc',
  component: InventoryDescComponent,
};
// TODO combined?

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    UIRouterModule.forRoot({
      states: [inventoryState, inventoryDescState],
      useHash: true,
    }),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    InventoryComponent,
    InventoryDescComponent,
    MyInputComponentComponent,
    TabBarComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
