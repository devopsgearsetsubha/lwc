import { LightningElement, api } from 'lwc';
export default class Childcomponentprogress extends LightningElement {
    progress = 0;
    intervalId;
    @api handleStart() {
        // call back function to increase progress bar step by step when once start button clicked in parent
        this.intervalId = setInterval(() => {
            this.progress = this.progress + 10;
            if (this.progress >= 100) {
                // create a custom event
                const e = new CustomEvent("progressfinished");
                this.dispatchEvent(e);
            }
        }, 300);
    }
    // to call this method in parent it should be @api
    @api resetProgress() {
        this.progress = 0;
        clearInterval(this.intervalId)// to stop the setInterval
    }
}