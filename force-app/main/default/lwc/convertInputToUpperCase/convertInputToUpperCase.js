import { LightningElement } from 'lwc';

export default class ConvertInputToUpperCase extends LightningElement {
    ConvertedCase = '';
    handleChange(event) {
        this.ConvertedCase = event.target.value.toUpperCase();
    }
}