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
import { CombinedInventoryComponent } from './combined-inventory/combined-inventory.component';
import { WSExampleComponent } from './wsexample/wsexample.component';

/** States */

const combinedInvState = {
  name: 'combinedInv',
  component: CombinedInventoryComponent,
};
const inventoryState = { name: 'inventory', component: InventoryComponent };
const inventoryDescState = {
  name: 'inventoryDesc',
  component: InventoryDescComponent,
};
const webSocketState = { name: 'websocket', component: WSExampleComponent };

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    UIRouterModule.forRoot({
      states: [
        combinedInvState,
        inventoryState,
        inventoryDescState,
        webSocketState,
      ],
      useHash: true,
    }),
  ],
  declarations: [
    AppComponent,
    CombinedInventoryComponent,
    HelloComponent,
    InventoryComponent,
    InventoryDescComponent,
    MyInputComponentComponent,
    TabBarComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
