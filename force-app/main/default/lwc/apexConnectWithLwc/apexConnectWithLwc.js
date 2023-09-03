import { LightningElement,api,wire,track } from 'lwc';
//1)import apex method
import getAccountList from '@salesforce/apex/accountControllerVS.getAccountList';
import getAccountListWithParameter from '@salesforce/apex/accountControllerVS.getAccountListWithParameter';
// @salesforce/apex common for all then classname.methodname
// donot need {} for getAccountList
export default class ApexConnectWithLwc extends LightningElement {
    @track accountList;
    ratingValue;
    get options() {
        return [
            { label: 'Hot', value: 'Hot' },
            { label: 'Warm', value: 'Warm' },
            { label: 'Cold', value: 'Cold' }
        ];
    }
    handleChange(event) {
        this.ratingValue = event.detail.value;
    }
    //2) I have to call the method (using wire property or method)
    // strRating is function paramater variable in apex class
    // strRating is an object. It obivously a key:value pair
    @wire(getAccountListWithParameter,{strRating:'$ratingValue'})//to pass parameter to apex class method
    accountHandler({data,error})
    {
        console.log('Inside Apex with LWC');
        if(data)
        {
            console.log(data);
            this.accountList = data;  
        }
        if(error)
        {
            console.log(error);
        }
    }
}