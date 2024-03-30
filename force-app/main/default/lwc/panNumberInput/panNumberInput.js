// phoneNumberInput.js
import { LightningElement } from 'lwc';


export default class detailsInput extends LightningElement {
    phoneNumber = '';
    panNumber = '';
    showPhoneError = false;
    showPanError = false;
    address = '';
    showAddressError = false;

    handleSubmit(event) {
        event.preventDefault();
        const inputFields = event.target.querySelectorAll('lightning-input');
        if (inputFields) {
            inputFields.forEach(input => {
                input.reportValidity();
            });
        }
        if (!this.showPhoneError && !this.showPanError && !this.showAddressError) {
            alert('Input submitted successfully!');
        }

    handlePhoneInputChange(event) {
        this.phoneNumber = event.target.value;
        this.validatePhoneNumber();
    }

    handlePanInputChange(event) {
        this.panNumber = event.target.value;
        this.validatePanNumber();
    }

     handleAddressInputChange(event) {
        this.address = event.target.value;
        this.validateAddressLanguage();
    }
 
    validateAddressLanguage() {
        const englishRegex = /^[a-zA-Z0-9.,\s]+$/;
        if (this.address && !this.address.match(englishRegex)) {
            this.showAddressError = true;
        } else {
            this.showAddressError = false;
        }
    }

    validatePhoneNumber() {
        const phoneRegex = /^[0-9]{10}$/;
        if (this.phoneNumber && !this.phoneNumber.match(phoneRegex)) {
            this.showPhoneError = true;
        } else {
            this.showPhoneError = false;
        }
    }

    validatePanNumber() {
        const panRegex = /[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
        if (this.panNumber && !this.panNumber.match(panRegex)) {
            this.showPanError = true;
        } else {
            this.showPanError = false;
        }
    }
}