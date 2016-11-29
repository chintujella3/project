'use strict';

/// <reference path= "/src/_reference.d.ts" />

import { Component,OnInit } from '@angular/core';

import { SalesHistoryService } from './salesHistory.service';
import {IStore, ISalesHistory} from "./salesHistory";
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FormGroup, FormControl} from '@angular/forms'
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'saleshistory-stores',
    templateUrl: 'app/salesHistory/salesHistory.component.html',
    providers: [ SalesHistoryService]
})

export class SalesHistoryComponent{
    salesHistory: ISalesHistory[];
    store: IStore;
    loading: boolean;


    constructor(private saleshistoryService: SalesHistoryService) {
    }

    doSearchStore(sapNo: string) {
        if (sapNo.sapNo) {
            this.loading = true;

            this.saleshistoryService.getStoresbyid(sapNo.sapNo)
                .then((store) => {
                    this.store = store
                    this.loading = false
                });
            this.saleshistoryService.getsalesHistory(sapNo.sapNo)
                .then((salesHistory) => {
                    this.salesHistory = salesHistory
                    this.loading = false
                });
        }
    }
}
