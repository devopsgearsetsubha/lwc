import { LightningElement } from 'lwc';
export default class Parentcomponentprogress extends LightningElement {
    handleClick() {
        this.template.querySelector("c-childcomponentprogress").handleStart();
        this.template.querySelector("lightning-button").disabled = true;// once the progress bar started
        // we disable start button
    }
    handlefinish() {
        // once it reached 100 in progress we will enable the start button
        // we created a custom event in child and captured the event in parent
        this.template.querySelector("lightning-button").disabled = false;
        this.template.querySelector("c-childcomponentprogress").resetProgress();
    }
}