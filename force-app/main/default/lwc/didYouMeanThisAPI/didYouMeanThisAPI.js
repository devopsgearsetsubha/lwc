import { LightningElement } from 'lwc';
import getResult from '@salesforce/apex/DidYouMeanThisAPI.getResult';// bring apex method in js
import LightningConfirm from "lightning/confirm";
export default class DidYouMeanThisAPI extends LightningElement {
    myText;
    handleonchange(event) {
        this.myText = event.target.value;
    }
    buttonClick() {
        // before passing it here encodeuricomponent will make your string or component url friendly
        // Instead of white space it will add % sign and 20
        // In url pecertange sign and 20 means white space
        getResult({ text: encodeURIComponent(this.myText.trim()) }).then((response) => {
            console.log("###Response : " + response);
            let parsedData = JSON.parse(response);// to remove all  double quotes to make it like an object
            console.log("###parsedData : " + parsedData.result);
            let message = parsedData.result;// will hold the new message basically
            if (parsedData.is_modified === true) { 
                this.handleConfirm(message);// this method called only if modified text available
            }
        })
        .catch((error) => {
            console.log('###Error : ' + JSON.stringify(error));
        });
    }

    // let show user a confrim box whether user want to keep it the same
    // confirm box actually do whatever action you need to perform after button click .
    // It will ask ok or cancel.If we click ok it will do the cion. Otherwise the action will be depricated
    async handleConfirm(message) {
        const result = await LightningConfirm.open({
        message: message,
        theme: "info",
        label: "Did You Mean This?"
        });
        if (result === true) { 
            this.myText = message;// if user clicks okay we will update the message in text box
        }
    }

}