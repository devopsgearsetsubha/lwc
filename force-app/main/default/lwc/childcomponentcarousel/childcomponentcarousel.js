import { LightningElement,api} from 'lwc';

export default class Childcomponentcarousel extends LightningElement {
    @api slidesData;// make this variable glabel one
    @api get slidesDataVirat()
    {
        return this.slidesData[0];
    }
    @api get slidesDataSharma()
    {
        return this.slidesData[1];
    }
    @api get slidesDataAshwin()
    {
        return this.slidesData[2];
    }
}