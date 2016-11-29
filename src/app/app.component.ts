import { Component, OnInit } from '@angular/core';
import { StoresService } from './stores/stores.service';
import {SalesHistoryService} from "./salesHistory/salesHistory.service";
@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    providers: [ StoresService, SalesHistoryService]
})
export class AppComponent {
    constructor(private storesService: StoresService, private salesHistoryService: SalesHistoryService) { }

    ngOnInit(): void {
        this.storesService.syncStores();
        this.salesHistoryService.syncSalesHistory();
    }
}