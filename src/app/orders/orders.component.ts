import { Component } from '@angular/core';
import { OrdersService } from './orders.service';

@Component({
    selector: 'orders', 
    templateUrl: 'app/orders/orders.component.html', 
    providers: [OrdersService]
})

export class OrdersComponent { }
