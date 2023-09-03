import { LightningElement} from 'lwc';

export default class Task extends LightningElement {

    todos = [];
    inputTask='';
    handleChange(event)
    {
        this.inputTask = event.target.value;
    }
    handleClick(event)
    {    
        let lenCal = this.todos.length + 1;
        lenCal = lenCal.toString();
        let obj = {
            id:lenCal,
            task:this.inputTask
        };
        this.todos = [...this.todos,obj];
        this.inputTask='';
        //document.querySelector('input[name="task"]').value = '';
    }
    handleClickDel(event)
    {
        const taskId = event.target.dataset.taskid;
        console.log(event.target.dataset.taskid);
        const updatedTodos = this.todos.filter(todo => todo.id !== taskId);
        this.todos = [...updatedTodos];
    }
}