import { LightningElement,api} from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import ANNUALREVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
export default class LightningRecordForm extends LightningElement {
    // the below two avriables used to capture the objectname and record Id from the record detail page for each record
    @api objectApiName;
    @api recordId;

    //objectname = ACCOUNT_OBJECT;
    fields = [NAME_FIELD, INDUSTRY_FIELD, ANNUALREVENUE_FIELD];
    updateHandler(event) {
        // when record gets created the record stored in event.detail.id
        alert(event.detail.id);
        // showToastEvent is class and it receives object
        /*this.dispatchEvent(new showToastEvent({title:'Record Created',
                            message:'Record Created with Id ::'+event.detail.id,
                            variant:'success'
                           }))*/
    }
}