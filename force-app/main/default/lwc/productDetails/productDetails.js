import { LightningElement,track } from 'lwc';

export default class ProductDetails extends LightningElement {
    isStock=true;
    @track product = {
        name:'ABC',
        price:2000,
        stock:10
    }
    temp ='';
    handleChange(event)
    {  
        this.temp = event.target.value;
        this.product.stock = parseInt(this.temp);
        this.isStock = this.product.stock !== 0;
    }
}