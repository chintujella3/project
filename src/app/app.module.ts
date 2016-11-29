import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '@angular/material';
import {FormsModule, ReactiveFormsModule } from "@angular/forms";

//Import Components here
import { AppComponent } from './app.component';
import { StoresComponent } from './stores/stores.component';
import { SalesHistoryComponent } from './salesHistory/salesHistory.component';
import { AppRoutingModule } from './app-routing.module';
import {OrdersComponent} from "./orders/orders.component";


@NgModule({
    imports: [
        NgbModule.forRoot(),
        MaterialModule.forRoot(),
        BrowserModule,
        HttpModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [AppComponent, OrdersComponent, StoresComponent, SalesHistoryComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
