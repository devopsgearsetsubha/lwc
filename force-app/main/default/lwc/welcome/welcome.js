import { LightningElement } from 'lwc';

export default class Welcome extends LightningElement {
    customStyle;
    handleClickRed(event)
    {
        this.customStyle='myStyle_red';
    }
    handleClickBlue(event)
    {
        this.customStyle='myStyle_blue';
    }
}