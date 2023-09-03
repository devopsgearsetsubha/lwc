import { LightningElement } from 'lwc';

export default class ModalComponent extends LightningElement {
    showmodal=false;
    handleClick()
    {
        this.showmodal=true;
    }
    handleCancel() {
        this.showmodal = false;
    }
    handleSave() {
        this.showmodal = false;
    }

}