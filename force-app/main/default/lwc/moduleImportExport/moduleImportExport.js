import { LightningElement } from 'lwc';
import {sum,firstName} from './util'// should not specify .js
import {oddOrEven} from 'c/myUtil';// different util outside component
export default class ModuleImportExport extends LightningElement {
    handleClick(event)
    {
        // the function should be called inside another function
        alert(oddOrEven(5));
        alert(firstName);
        alert(sum(10,20));
    }
}