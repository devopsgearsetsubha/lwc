import { LightningElement, wire, api } from 'lwc';
import { getObjectInfos } from 'lightning/uiObjectInfoApi';
import Account_object from '@salesforce/schema/Account';
import Contact_object from '@salesforce/schema/Contact';
const objectApiNames = [Account_object, Contact_object];
export default class WireAdaptor extends LightningElement {
    objectInfo;
    @wire(getObjectInfos, { objectApiNames: objectApiNames })
    objectInfoHandler({ data, error }) {
        console.log('Inside Handler');
        if (data) {
            console.log(data);
            this.objectInfo = data
        }
        if (error) {
            console.log(error)
        }
    }

}