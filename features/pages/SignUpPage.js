"use strict";

import Page from './Page';

class SignUpPage extends Page {

    get usernameTextBox() { return $('#username');}
    get passwordTextBox() { return $('#password');}
    get passwordConfirmTextBox() { return $('#passwordConfirm');}
    get signUpBotton() { return $('#signUpSubmit');}
    get usernameError(){return $('#usernameError');}
    get passwordError (){return $('#passwordError');}
    get confirmPasswordError(){return $('#confirmPasswordError');}

    intoTheUsernameTextbox(data) {
       this.usernameTextBox.setValue(data);
    }

    intoThePasswordTextbox(data) {
       this.passwordTextBox.setValue(data);
    }

    intoTheConfirmationTextbox(data) {
       this.passwordConfirmTextBox.setValue(data);
    }

    clicksSignUpButton(data) {
       this.signUpBotton.click();
    }

    usernameErrorMessage(){
        const message = this.usernameError.getText();
        expect(message).to.equal("Please use between 6 and 32 characters.");
    }

    passwordErrorMessage (){
        const message = this.passwordError.getText();
        expect(message).to.equal("Try one with at least 8 characters.");
    }

    confirmPasswordErrorMessage () {
        const message = this.confirmPasswordError.getText();
        expect(message).to.equal("These passwords don't match.");
    }

    usernameTakenMessage() {
        const message = this.usernameError.getText();
        expect(message).to.equal("Someone already has that username.");
    }
}
export default new SignUpPage();