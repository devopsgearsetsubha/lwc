import { LightningElement } from 'lwc';

export default class QuerySelectorUseCases extends LightningElement {
    employees =[
        {
            id:101,
            name:'John',
            salary:50000
        },
        {
            id:102,
            name:'Ram',
            salary:30000
        },
        {
            id:103,
            name:'Mathew',
            salary:20000
        }
    ];
    handleSelect(event)
    {
        const empno = event.target.dataset.empno;
        const empname = event.target.dataset.empname;
        alert(`ID : ${empno} Name : ${empname}`);
    }
    handleClear(event)
    {
        const empno = event.target.dataset.empno;
        // to bind the variable in query selector we will use `'${variable}'`
        this.template.querySelector(`lightning-input[data-empno='${empno}']`).value='';
    }
    handleClearFirst(event)
    {
        this.template.querySelector("lightning-input[data-empno='101']").value='';
    }
    handleClearAll(event)
    {
        // template will bring all input inside it we need to convert to array and empty the value
        Array.from(this.template.querySelectorAll("lightning-input")).forEach(e => {
            e.value='';
        });
    }
}