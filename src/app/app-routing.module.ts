import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Import Components here
import { StoresComponent } from './stores/stores.component';
import { OrdersComponent } from './orders/orders.component';
import {SalesHistoryComponent} from "./salesHistory/salesHistory.component";


const routes: Routes = [
    { path: '', redirectTo: '/orders', pathMatch: 'full' },
    { path: 'stores', component: StoresComponent },
    { path: 'orders', component: OrdersComponent },
    { path: 'saleshistory', component: SalesHistoryComponent},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
