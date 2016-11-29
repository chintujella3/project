'use strict';

/// <reference path="/../_reference.d.ts" />

import { Component, OnInit } from '@angular/core';

import { StoresService } from './stores.service';

@Component({
    selector: 'stores',
    templateUrl: 'app/stores/stores.component.html',
    providers: [ StoresService ]
})

export class StoresComponent implements OnInit {
    stores: any;
    loading: boolean;

    constructor(private storesService: StoresService) { }

    ngOnInit(): void {
        this.loading = true;
        this.storesService.getStores()
            .then((stores) => {
                this.stores = stores
                this.loading = false
            })
            .catch(() => this.loading = false);
    }
}
