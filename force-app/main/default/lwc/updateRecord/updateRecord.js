import { LightningElement, api, wire } from 'lwc';
import Account_object from '@salesforce/schema/Account';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import { getPicklistValues, getObjectInfo } from 'lightning/uiObjectInfoApi';
import { updateRecord } from 'lightning/uiRecordApi';
export default class UpdateRecord extends LightningElement {
    formdata = {};
    recordTypeId;
    industryOptions;
    industryvalue;
    @wire(getObjectInfo, { objectApiName: Account_object })
    getobjectData({ data, error }) {
        console.log("Inside");
        if (data) {
            console.log(data);
            this.recordTypeId = data.defaultRecordTypeId;
            console.log(this.recordTypeId);
        }
    }
    @wire(getPicklistValues, { recordTypeId: '$recordTypeId', fieldApiName: INDUSTRY_FIELD })
    getPicklistData({ data, error }) {
        console.log('inside picklist wire');
        if (data) {
            this.industryOptions = data.values.map(d => {
                return { label: d.label, value: d.value }
            })
        }
    }
    handleChange(event) {
        const { name, value } = event.target;
        this.formdata[name] = value;
    }
    handleChangeIndustry(event) {
        console.log(event.target.name);
        this.industryvalue = event.detail.value;
        this.formdata[event.target.name] = this.industryvalue;
    }
    handleClick(event) {
        updateRecord({fields:this.formdata})
            .then(() => {
                this.formdata = {};
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Contact updated',
                        variant: 'success'
                    })
                );
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error creating record',
                        message: error.body.message,
                        variant: 'error'
                    })
                );
            });
    }
    handleClear(event) {
        this.template.querySelector('[data-id="AccountId"]').value = "";
        this.template.querySelector('[data-name="AccountName"]').value = "";
        this.template.querySelector('[data-revenue="AccountRevenue"]').value = "";
        this.industryvalue = "";
    }
}