import { LightningElement,track } from 'lwc';

export default class EmployeeObjectArray extends LightningElement {
    employees = [
        {
           name:'John',
           salary:20000,
           position:'Developer'
        },
        {
           name:'Mathew',
           salary:30000,
           position:'Lead'
        },
        {
           name:'Ram',
           salary:20000,
           position:'Architect'
        }
    ];
    salaryEntered='';
    @track empWithSalAbove = [];
    handleChange(event)
    {
        this.salaryEntered = event.target.value;   
    }
    handleClick(event)
    {
        this.empWithSalAbove = []; // Clear the array before filtering
        this.employees
            .filter(emp => emp.salary > parseInt(this.salaryEntered))
            .forEach(emp => {
                this.empWithSalAbove.push(emp.name);
            });
    }
}