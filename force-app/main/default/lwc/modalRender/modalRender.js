import { LightningElement } from 'lwc';
import modalRender from './modalRender.html';
import modalPopup from './modalPopup.html';
export default class ModalRender extends LightningElement {
    currentTemplate=modalRender;
    handleClick()
    {
        this.currentTemplate=modalPopup;
    }
    handleCancel()
    {
        this.currentTemplate=modalRender;
    }
    handleSave()
    {
        this.currentTemplate=modalRender;
    }
    render()
    {
        return this.currentTemplate;
    }
}