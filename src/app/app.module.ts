import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CustomersModule} from './customers/customers.module'
import {OrdersModule} from './orders/orders.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CurrentOptionComponent } from './current-option/current-option.component';
import { AddComponent } from './orders/add/add.component';
import {IndexComponent} from './customers/index/index.component';
import { AddComponent as OrderAddComponent} from './orders/add/add.component'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {  
  MdAutocompleteModule,  
  MdButtonModule,  
  MdButtonToggleModule,  
  MdCardModule,  
  MdCheckboxModule,  
  MdChipsModule,  
  MdCoreModule,  
  MdDatepickerModule,  
  MdDialogModule,  
  MdExpansionModule,  
  MdGridListModule,  
  MdIconModule,  
  MdInputModule,  
  MdListModule,  
  MdMenuModule,  
  MdNativeDateModule,  
  MdPaginatorModule,  
  MdProgressBarModule,  
  MdProgressSpinnerModule,  
  MdRadioModule,  
  MdRippleModule,  
  MdSelectModule,  
  MdSidenavModule,  
  MdSliderModule,  
  MdSlideToggleModule,  
  MdSnackBarModule,  
  MdSortModule,  
  MdTableModule, 
  MdTabsModule, 
  MdToolbarModule,  
  MdTooltipModule,  
  } from '@angular/material';

const appRoutes: Routes = [
  {path:"customers/index", component : IndexComponent},
  {path: "orders/add", component:OrderAddComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CurrentOptionComponent,
    AddComponent
  ],
  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomersModule,
    MdAutocompleteModule,  
    MdButtonModule,  
    MdButtonToggleModule,  
    MdCardModule,  
    MdCheckboxModule,  
    MdChipsModule,  
    MdCoreModule,  
    MdDatepickerModule,  
    MdDialogModule,  
    MdExpansionModule,  
    MdGridListModule,  
    MdIconModule,  
    MdInputModule,  
    MdListModule,  
    MdMenuModule,  
    MdNativeDateModule,  
    MdPaginatorModule,  
    MdProgressBarModule,  
    MdProgressSpinnerModule,  
    MdRadioModule,  
    MdRippleModule,  
    MdSelectModule,  
    MdSidenavModule,  
    MdSliderModule,  
    MdSlideToggleModule,  
    MdSnackBarModule,  
    MdSortModule,  
    MdTableModule, 
    MdTabsModule, 
    MdToolbarModule,  
    MdTooltipModule, 
    OrdersModule,
    RouterModule.forRoot( appRoutes )
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
