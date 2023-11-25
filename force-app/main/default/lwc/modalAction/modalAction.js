import { LightningElement, api } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import { CloseActionScreenEvent } from "lightning/actions";

// width
import modal from '@salesforce/resourceUrl/modal';
import { loadStyle } from 'lightning/platformResourceLoader';

export default class ModalAction extends LightningElement {
  @api recordId;
  @api objectApiName;
  
  connectedCallback() {

    Promise.all([
         loadStyle(this, modal)
     ])
        
 }

  handleSuccess(e) {
    // Close the modal window and display a success toast
    this.dispatchEvent(new CloseActionScreenEvent());
    this.dispatchEvent(
      new ShowToastEvent({
        title: "Success",
        message: "Record updated!",
        variant: "success",
      }),
    );
  }
}