import { LightningElement } from 'lwc';

export default class AccessingTemplateElementInJS extends LightningElement {
    handleChange(event)
    {
        console.log(event.target.dataset.id1);
    }
    
    handleClick(event) 
    {
        // without data binding we can able to set the value using data attributes
        //const p = this.template.querySelector("lightning-input[data-id1='id1']").value;// when i click the button it will retrive the data from input1 box
        //console.log(p);
        //this.template.querySelector("lightning-input[data-id1='id1']").value="Sample Data";// you can also set value for first input box
        //this.template.querySelector("lightning-input[data-id1='id1']") it will give back reference
        // to identify the tag using data attribute and setting the value for that
        
        console.log(event.target.dataset.btn);// currently one data key value pair is available
        console.log(event.target.dataset.taskid);
    }
}