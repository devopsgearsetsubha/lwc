import { LightningElement } from 'lwc';

export default class DataBinding extends LightningElement 
{
    customStyle='myStyle_admin';// based on this value css will be changed
    // you cannot apply particular let or function keyword inside class
    name='John';
    isLoggedin=false;
    person={
        name:'Mathew',
        Age:24,
        Position:'Developer',
        Address :{
            city:'Delhi',
            District:'New Delhi',
            Zip:'123456'
        }
    }
    // you cannot go for expression evaluation .you cannot go for index based evaluation in html.At that point of time we are using getter method
    fruits=['Apple','Orange'];// we cannot access array using index in html
    // for that we are using getter method to get the data in html
    // this getter method will send only one value
    get fruit()
    {
        return this.fruits[0];// if you are inside java script script.If we want to access class level variables we need to use this.variablename
    }
    display()
    {
        console.log(this.fruit);// to see the value in browser console window
    }
    price=1;
    // discount going to happen 
    // getter for expression
    get discount()
    {
        return this.price*0.25;
    }
    handleChange(event)
    {
        console.log(event.target.name);
        console.log(event.target.value);
        this.name=event.target.value;
    }
    handleClick(event)
    {
        this.customStyle='myStyle';
    }
}