import { LightningElement } from 'lwc';

export default class FetchApi extends LightningElement {
    // I have to store the data in real time array object
    posts=[];
    // third party api promise call using async and await
    handleClick(event)
    {
        let url='https://jsonplaceholder.typicode.com/posts';
        fetch(url,{method:'GET'})
        .then((response)=>{
            console.log(response);// to verify if the response is in json format or not.If not return response.json
            return response.json();
        })
        .then((data)=>{// here another call capturing the response.data and storing it in an array
            console.log(data);
            this.posts=data;     
        })
        .catch((error)=>{
            console.log(error);
        })     
    }
}