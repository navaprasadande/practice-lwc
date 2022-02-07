import { LightningElement, track, api } from 'lwc';

export default class Modal extends LightningElement {
    @api showModal;
    @api header;

    @track sizeClass = 'slds-modal slds-fade-in-open slds-modal_medium';
    @api set size(value) {
        console.log(value);
        if(value === 'large' || value === 'small') {
            this.sizeClass = 'slds-modal slds-fade-in-open slds-modal_'+value;
        }
        console.log(this.sizeClass);
    }

    get size() {
        return this.sizeClass;
    }

    handleHeaderSlotChange(event) {
        console.log(event);
        console.log(event.detail);
    }

    closeModal() {
        this.dispatchEvent(
            new CustomEvent('close')
        );
    }
}