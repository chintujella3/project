"use strict";

/// <reference path="/src/_reference.d.ts" />

import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import * as PouchDB from 'pouchdb';

import 'rxjs/add/operator/toPromise';

import {IStore, ISalesHistory} from './salesHistory';
import {Observable} from 'rxjs/Observable';
import {stringify} from "querystring";

@Injectable()

export class SalesHistoryService {
    storesPouch: any;
    storesCouch: any;
    saleshistoryPouch: any;
    saleshistoryCouch: any;
    data: any;

    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {
        this.storesPouch = new PouchDB('stores');
        this.storesCouch = new PouchDB(SERVER_HOST + 'stores');
        this.saleshistoryPouch = new PouchDB('sales_history');
        this.saleshistoryCouch = new PouchDB(SERVER_HOST + 'sales_history');

    }

    // syncing the stores from couchdb to pouchdb
    syncStores(): Promise<IStore> {
        var storeDataSrvInstance = this;
        return storeDataSrvInstance.storesPouch.replicate.from(storeDataSrvInstance.storesCouch)
            .then( () => storeDataSrvInstance.storesPouch.allDocs({ include_docs: true } ))
            .then(res => res.rows);
    }

    syncSalesHistory(): Promise<ISalesHistory> {
        var salesHistorySrvInstance = this;
        return salesHistorySrvInstance.saleshistoryPouch.replicate.from(salesHistorySrvInstance.saleshistoryCouch)
            .then( () => salesHistorySrvInstance.saleshistoryPouch.allDocs({ include_docs: true } ))
            .then(function(res){
                console.log(JSON.stringify(res));
                return res;
            });

    }


    //getting the stores from pouchdb
    /*getLocalStores(): Promise<IStore> {
        var storeDataSrvInstance = this;
        return storeDataSrvInstance.storesPouch.allDocs({ include_docs: true })
            .then(res => res.rows);
    }

    getLocalSalesHistory(): Promise<IStoreHistory[]> {
        var storeDataSrvInstance = this;
        return storeDataSrvInstance.saleshistoryPouch.allDocs({ include_docs: true })
            .then(res => res.rows);
    }*/

    //getting the stores by Id from pouch Db
    getStoresbyid(id:string): Promise<IStore> {
        var storeDataSrvInstance = this;
        return storeDataSrvInstance.storesPouch.get(id)
            .then(function (store:IStore) {
                return store;});

    }

    getsalesHistory(id:string): Promise<ISalesHistory[]>
    {
        var salesHistorySrvInstance = this;
        return salesHistorySrvInstance.saleshistoryPouchbyview
            .then(function (salesHistory:ISalesHistory) {
                console.log(salesHistory);
                return salesHistory;});
    }
    // getsalesHistory(id:string): Promise<ISalesHistory[]>
    // {
    //     var salesHistorySrvInstance = this;
    //     return salesHistorySrvInstance.saleshistoryPouch.get("100060-71751185")
    //         .then(function (salesHistory:ISalesHistory) {
    //             console.log(salesHistory);
    //             return salesHistory;});
    // }


    // getsalesHistory(id:string): Promise<ISalesHistory[]> {
    //     console.log("entered here");
    //     console.log(id);
    //     var salesHistorySrvInstance = this;
    //     return salesHistorySrvInstance.saleshistoryPouch.replicate.from(salesHistorySrvInstance.saleshistoryCouch, {filter: function (doc)
    //     {
    //         //console.log(doc);
    //         return doc.sap_number === id }})
    //         .then( function (res) {
    //             console.log(res);
    //             // return storeDataSrvInstance.saleshistoryPouch.allDocs( { include_docs: true, attachments: true }).then(
    //             //     function (res) {
    //             //         console.log(res);
    //             //     }
    //             // )
    //         });

        // get({by_sapnumber:id})
        //     .then(function (storeHistory: IStoreHistory[]) {
        //         return storeHistory;
        //     });
    }


//     return $q.when(currentStoreContactsPouch.replicate.from(contactsCouch,
//     { filter: function (doc) { return doc.store_id === storeId; } }))
// .then(function () {
//     return $q.when(currentStoreContactsPouch.allDocs({ include_docs: true, attachments: true }))
//         .then(function (allContactsFromSyncedPouch)
//         { return allContactsFromSyncedPouch.rows; },
//             function (err) { console.log(err); }); });

