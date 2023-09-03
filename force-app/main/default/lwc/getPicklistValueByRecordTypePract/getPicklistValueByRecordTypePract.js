import { LightningElement, wire, api, track } from 'lwc';
import { getObjectInfo, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import Account_object from '@salesforce/schema/Account';
export default class GetPicklistValueByRecordTypePract extends LightningElement {
    @track recordTypes = [];
    @track recordTypeOptions = [];
    IndustryOptions;
    valueRecordType;
    valueIndustry;
    @wire(getObjectInfo, { objectApiName: Account_object })
    objectInfoProp({ data, error }) {
        console.log('Inside objectinfo wire');
        if (data) {
            this.recordTypes = [];
            this.recordTypeOptions = [];
            for (let key in data.recordTypeInfos) {
                console.log(key);
                console.log(data.recordTypeInfos[key].name);
                let obj = {
                    label: data.recordTypeInfos[key].name,
                    value: key
                };
                this.recordTypes = [...this.recordTypes, obj];
            }
            console.log(JSON.parse(JSON.stringify(this.recordTypes)));// convert proxy array to normal array of objects
            this.recordTypeOptions = JSON.parse(JSON.stringify(this.recordTypes));
            console.log(this.recordTypeOptions);
        }
    }
    handleChangeRecordType(event) {
        this.valueRecordType = event.detail.value;
    }

    @wire(getPicklistValuesByRecordType, { objectApiName: Account_object, recordTypeId: '$valueRecordType' })
    getPicklistValuesProp({ data, error }) {
        console.log('Inside Wire getPicklistValuesByRecordType');
        if (data) {
            console.log(data.picklistFieldValues.Industry.values)
            this.IndustryOptions = data.picklistFieldValues.Industry.values.map(d => {
                console.log(d);
                return { label: d.label, value: d.value };
            })

        }
    }
    handleChangeIndustry(event) {
        this.valueIndustry = event.detail.value;
    }
}