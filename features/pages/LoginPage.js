"use strict";

import Page from './Page';

class LoginPage extends Page {

    get title() { return browser.getTitle();}
    get username() {return $('#username');}
    get password() {return $('#password');}
    get loginButton() {return $('#logInSubmit');}
    get loginError() {return $('#logInError');}
    get backToSearch() {return $('#backToSearch');}

    landsOn(){
        expect(this.title).to.equal("Login");
    }

    intoTheUsernameTextbox(data) {
        this.username.setValue(data);
    }

    intoThePasswordTextbox(data) {
        this.password.setValue(data);
    }

    clicksLoginButton() {
        this.loginButton.click();
    }

    errorMessage(){
        const message = this.loginError.getText();
        expect(message).to.equal("Invalid login credentials.");
    }

    clickBackToSearch(){
        this.backToSearch.click();
    }
}
export default new LoginPage();