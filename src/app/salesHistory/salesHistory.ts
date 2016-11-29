export interface IStore {
    _id: string;
    _rev?: string;
    acctype: string;
    address: string;
    city: string;
    payer: string;
    payersetup: string;
    roe_authorization: string;
    salesDistrict: string;
    salesREP: string;
    salesREPEmail: string;
    state: string;
    storeContact: string;
    storeEmail: string;
    store_name: string;
    store_number?: string;
    zip?: string;
}

export interface ISalesHistory{
    doc?:ISalesHistory;
    _id: string;
    _rev: string;
    amount_dollar: string[];
    history_type: string;
    item_type: string;
    division: string;
    base: string;
    sap_number: string;
    qty: number[];
    item_no: string;
}
