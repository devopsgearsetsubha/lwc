import { LightningElement, wire, api } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
export default class ObjectInfo extends LightningElement {
    @api objectApiName;
    totalFields = 0;
    totalCustomFields = 0;
    totalPicklistFields = 0;
    totalRecordTypes;
    fieldApiNames = [];
    @wire(getObjectInfo, { objectApiName: '$objectApiName' })
    objectinfo({ data, error }) {
        console.log('Inside Handler')
        if (data) {
            console.log(data)
            this.totalFields = Object.keys(data.fields).length;
            console.log('Total number of fields:' + this.totalFields);
            const customFields = Object.values(data.fields).filter(field => field.custom===true);
            this.totalCustomFields = customFields.length;
            console.log('Total number of custom fields:' + this.totalCustomFields);
            const picklistFields = Object.values(data.fields).filter(field =>
                field.dataType === 'Picklist' || field.dataType === 'Multipicklist'
            );
            console.log(picklistFields);
            this.totalPicklistFields = picklistFields.length;
            console.log('Total number of picklist fields:' + this.totalPicklistFields);
            // Check if record types exist for the object
            if (data.recordTypeInfos) {
                this.totalRecordTypes = Object.keys(data.recordTypeInfos).length;
            } else {
                this.totalRecordTypes = 0; // No record types found
            }
            console.log('Total number of record Types:' + this.totalRecordTypes);
            this.fieldApiNames = Object.keys(data.fields);
            console.log('Total number of fieldApiNames:' + this.fieldApiNames);
        }
        if (error) {
            console.log(error)
        }
    }

}