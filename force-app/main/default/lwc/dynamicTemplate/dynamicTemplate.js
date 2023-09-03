import { LightningElement } from 'lwc';
import dynamicTemplate from "./dynamicTemplate.html";
import accountTemplate from "./accountTemplate.html";
import contactTemplate from "./contactTemplate.html";
export default class DynamicTemplate extends LightningElement {
    currentTemplate = dynamicTemplate; // Initial template
    handleAccount() {
        this.currentTemplate = accountTemplate; // Set the account details template
    }
    handleContact() {
        this.currentTemplate = contactTemplate; // Set the contact details template
    }
    render() {
        return this.currentTemplate;
    }
}