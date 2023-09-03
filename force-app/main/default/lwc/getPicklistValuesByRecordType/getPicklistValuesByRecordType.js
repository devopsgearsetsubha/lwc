import { LightningElement, wire, api } from 'lwc';
import { getObjectInfo, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import Account_object from '@salesforce/schema/Account';
export default class GetPicklistValuesByRecordType extends LightningElement {
    ABCDOptions;
    valueABCD;
    valueIndustry;
    @wire(getObjectInfo, { objectApiName: Account_object })
    objectInfoProp;// here we are using property
    @wire(getPicklistValuesByRecordType, { objectApiName: Account_object, recordTypeId: '$objectInfoProp.data.defaultRecordTypeId' })
    getPicklistValuesProp({ data, error }) {
        console.log('Inside Wire');
        if (data) {
            console.log(data.picklistFieldValues.ABCDF__c.values);
            this.ABCDOptions = data.picklistFieldValues.ABCDF__c.values.map(d => {
                console.log(d);
                return { label: d.label, value: d.value };
            })

            this.IndustryOptions = data.picklistFieldValues.Industry.values.map(d => {
                console.log(d);
                return { label: d.label, value: d.value };
            })

        }
    }
    handleChangeABCD(event) {
        this.valueABCD = event.detail.value;
    }
    handleChangeIndustry(event) {
        this.valueIndustry = event.detail.value;
    }


}