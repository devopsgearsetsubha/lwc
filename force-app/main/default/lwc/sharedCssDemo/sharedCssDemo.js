import { LightningElement } from 'lwc';

export default class SharedCssDemo extends LightningElement {
    // calling promise function using async and await
    check_UserName(str)
    {
        return new Promise((resolve,reject)=>
        {
            setTimeout(()=>
            {
                if(str==='AJ')
                    resolve('Verified User Name');
                else
                    reject('Invalid User Name');
            },10000)
                
        })
    }
    /*handleClick()
    {
        // to call the function inside class we have to use this.functionname must
        this.check_UserName('asd')
        .then((result)=>{
            console.log(result);
        })
        .catch((error)=>{
            console.log(error);
        })
    }*/
    
    // the same promise executed using async and await
    // 1) need to add async keyword before function
    async handleClick()
    {
        // preformance wise both are same
        // to reduce lines of code then and catch we will use async and await 
        // if your promise function return reject respose you need to make sure to catch
        try{
            const response = await this.check_UserName("AJ skill");
            console.log(response);
        }
        catch(e)
        {
            console.log(e);
        }
    }
}