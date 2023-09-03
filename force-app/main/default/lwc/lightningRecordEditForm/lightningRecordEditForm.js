import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import ANNUALREVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class LightningRecordEditForm extends LightningElement {
    fieldList = {
        nameField: NAME_FIELD,
        industryField: INDUSTRY_FIELD,
        phoneField: PHONE_FIELD,
        annualRevenueField: ANNUALREVENUE_FIELD
    };
    handleSuccess(event) {
        console.log("Inside handlerSuccess");
    }
    // when you are going to click the submit button you have handler for the submit button the handler gets called
    handleSubmit(event) {
        event.preventDefault();// this will make submit button as normal button now to stop the default behaviour
        console.log("Inside handleSubmit");
        // before submitting you need to do custom validation
        const inputRevenue = this.template.querySelector(".revenue").value;
        if (inputRevenue < 100) {
            // if less than 100 the data should not be submitted 
            this.dispatchEvent(new ShowToastEvent({
                title: 'Annual Revenue cannot be less than 100',
                message: event.detail.message,
                variant: 'error'
            }));
        }
        else {
            // if you are going for handler in the sense you have to submit the data
            // lightning-record-edit-form have method submit you can use this explicit to submit
            // you have to specify the fields you are going to submit explicitly
            // event.detail.fields contain all field data in key value pair
            const fields = event.detail.fields;
            console.log(JSON.stringify(fields));// converting proxy object to string
            this.template.querySelector("lightning-record-edit-form").submit(fields);
            // custom validity for lightning-input
        }
    }
    handleError(event) {
        // when network is off we need to show error
        console.log("Inside handleError");
        // creating a toast(customevent) build in salesforce itself
        // dipatch event used to trigger the custom event
        // when user network is off for the browser and trying to edit the record will receive the error as "Error Updating Data"
        this.dispatchEvent(new ShowToastEvent({
            title: 'Error Updating Data',
            message: event.detail.message,
            variant: 'error'
        }));
    }
}