import { LightningElement } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import ACCOUNT_FIELD from '@salesforce/schema/Contact.AccountId';
export default class LightningRecordFormDIY2 extends LightningElement {
    objectname=CONTACT_OBJECT;
    fields=ACCOUNT_FIELD;

}