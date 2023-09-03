import { LightningElement } from 'lwc';
// html files also be imported here
//import parenttemplate from './parentComponent.html';
import accounttemplate from './templateaccount.html';
import contacttemplate from './templatecontact.html';
export default class ParentComponent extends LightningElement {
   // this method used to load different html in the screen
   // some times you have the scenerio to load more than one html in screen
   render()
   {
     //return parenttemplate;
     //return accounttemplate;
     // it will override the original html using render method
     // by writing our own definition in in build function in LightningElement
     return contacttemplate;
   }
}