import { LightningElement, wire } from 'lwc';
import Account_object from '@salesforce/schema/Account';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import { getPicklistValues,getObjectInfo } from 'lightning/uiObjectInfoApi';
export default class GetPicklistValues extends LightningElement {
    //1) get the recordtypeid using objectinfo
    //2) get the picklist field values using the recordtype id
    recordTypeId;
    industryOptions;
    //value="Education";
    value;
    @wire(getObjectInfo,{ objectApiName:Account_object})
    getobjectData({data,error})
    {
        console.log("Inside");
        if(data)
        {
            console.log(data);
            this.recordTypeId=data.defaultRecordTypeId;
            console.log(this.recordTypeId);
        }
    }
    // recordTypeId received from above operation in async mode.So we used $recordTypeId below
    // getPicklistValues will return data
    @wire(getPicklistValues,{recordTypeId:'$recordTypeId',fieldApiName:INDUSTRY_FIELD})
    getPicklistData({data,error})
    {
        console.log('inside picklist wire');
        if(data)
        {
            console.log(data);
            console.log(data.values);
            // we need to traverse the data.values to get the label and value
            this.industryOptions=data.values.map(d=>{
                console.log(d);// get all the label value one by one
                return {label:d.label,value:d.value}
                // label is value in object manager, value is the apiname in object manager
            })
            // we need to pass option in below array of object format to options in combobox
            /*
             return [
                { label: 'New', value: 'new' },
                { label: 'In Progress', value: 'inProgress' },
                { label: 'Finished', value: 'finished' },
            ];
            */
        }
    }

    handleChange(event)
    {
        this.value=event.detail.value;
    }



}