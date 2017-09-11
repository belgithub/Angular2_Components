import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppRoutingModule, appRouterComponents } from './app.routing.module';

import { AdminModule } from './admin/admin.module';
import { CartModule } from './cart/cart.module';
import { OrdersModule } from './orders/orders.module';

import { CartService } from './cart/services/cart.service';
import { DialogService } from './services/dialog.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './admin/guards/auth.guard';

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    appRouterComponents,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    CartModule,
    ProductsModule,
    OrdersModule,
    AdminModule,
    AppRoutingModule
  ],
  providers: [
    CartService,
    AuthGuard,
    AuthService,
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
 }
