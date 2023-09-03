import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
export default class CreateRecord extends LightningElement {
    formdata = {};
    handleChange(event) {
        const { name, value } = event.target;
        this.formdata[name] = value;
    }
    handleClick(event) {
        // here come create record it is not wire function
        // below fields should as name like below then only create record function will accep data and create record
        createRecord({ apiName: 'Account', fields: this.formdata })
            .then(response => {
                console.log(response.id);
                this.formdata = {};//clear the formdata 
            })
    }
}