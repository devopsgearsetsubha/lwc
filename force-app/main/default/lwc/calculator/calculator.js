import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {
    Input1 = '';
    Input2 = '';
    Result;
    handleChangeInput(event) {
        if(event.target.name=='txtInput1')
        {
            this.Input1 = event.target.value;
            console.log(event.target.label);
        }
        if(event.target.name=='txtInput2')
        {
            this.Input2 = event.target.value;
        }        
    }
    handleOperationClick(event) 
    {
        const operationname = event.target.name;
        if (this.Input1 && this.Input2) 
        {
            switch (operationname) {
                case 'Add':
                    this.Result = parseInt(this.Input1) + parseInt(this.Input2);
                    break;
                case 'Sub':
                    this.Result = parseInt(this.Input1) - parseInt(this.Input2);
                    break;
                case 'Mul':
                    this.Result = parseInt(this.Input1) * parseInt(this.Input2);
                    break;
                case 'Div':
                    this.Result = parseInt(this.Input1) / parseInt(this.Input2);
                    break;
            }
        } 
        else 
        {
            alert('Please fill out all fields');
        }
    }
}