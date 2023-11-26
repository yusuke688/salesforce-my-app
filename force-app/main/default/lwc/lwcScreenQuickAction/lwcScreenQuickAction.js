import { LightningElement, api } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import { CloseActionScreenEvent } from "lightning/actions";

/**
 * This approach does not allow control over the dialog width.(11-26-2023)
 * Therefore, specify the width forcibly using CSS placed in static resources.
 * However, after using this dialog, other dialogs are also affected.
 */
import modal from '@salesforce/resourceUrl/ModalWidthCss';
import { loadStyle } from 'lightning/platformResourceLoader';

export default class LwcScreenQuickAction extends LightningElement {
 
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