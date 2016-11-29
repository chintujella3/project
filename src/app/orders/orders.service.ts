"use strict";

/// <reference path="../../_reference.d.ts" />

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as PouchDB from 'pouchdb';
@Injectable()
export class OrdersService {
    ordersPouch: any;
    ordersCouch: any;

    constructor(private http: Http) {
        this.ordersPouch = new PouchDB('orders');
        this.ordersCouch = new PouchDB(SERVER_HOST + 'orders');
    }
}