import { LightningElement } from 'lwc';

export default class EmployeeFromThirdPartyAPI extends LightningElement {
    originalEmployees = [];
    employees = [];
    empname = '';
    async handleClickLoad(event) {
        try {
            let url = 'https://jsonplaceholder.typicode.com/users';
            let response = await fetch(url, { method: 'GET' });
            let data = await response.json();
            this.originalEmployees = data;
            this.resetSearchResults();
        }
        catch (e) {
            console.log(e);
        }
    }
    handleChange(event) {
        this.empname = event.target.value;
    }
    handleClickSearch(event) {
        const searchValue = this.empname.toLowerCase();
        const updatedEmployees = this.originalEmployees.filter(emp =>
            emp.name.toLowerCase().includes(searchValue)
        );
        this.employees = updatedEmployees;
    }

    resetSearchResults() {
        this.empname = '';
        this.employees = [...this.originalEmployees];
    }
}