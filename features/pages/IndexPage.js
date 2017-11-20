"use strict";

import Page from './Page';
import {acceptAlert} from "../support/helper/alertHelper";

class IndexPage extends Page {

    get title(){ return browser.getTitle();}
    get signUpLink() {return $('#signUp');}
    get logInLink() {return $('#logIn');}
    get welcome(){return $('#welcome');}
    get logOutLink() {return $('#logOut');}
    get searchButton() {return $('#findHotel');}
    get hotelSearchBar() {return $('#hotelSearchBar');}
    get hotelName() {return browser.elements('.hotelName');}
    get bookHotelButtonOne() { return $('#topTenHotels > div:nth-child(2) > button');}
    get bookHotelButtonTwo() { return $('#topTenHotels > div:nth-child(7) > button');}
    get viewBookingsLink() { return $('#viewBookings');}

    landsOn() {
        /*browser.url('/');*/
        expect(this.title).to.equal("Index");
    }

    clicksSignUpLink() {
        this.signUpLink.click();
    }

    clicksLoginLink() {
        this.logInLink.waitForVisible();
        this.logInLink.click();
    }

    aPersonalizedGreeting(){
        const message = this.welcome.getText();
        expect(message).to.equal("Welcome realname!");
    }

    clicksLogOutLink(){
        this.logOutLink.click();
    }

    clicksSearchButton() {
        this.searchButton.click();
    }

    intoTheHotelSearchBar(data) {
        this.hotelSearchBar.setValue(data);
    }

    listOfTenHotels() {
        this.hotelName.waitForVisible();
        const array = $$('.hotelName');
        expect(array.length).to.equal(10);
    }

    clicksBookHotelButton() {
        this.bookHotelButtonOne.waitForVisible();
        this.bookHotelButtonOne.click();
        acceptAlert();
    }

    clicksBookHotelButtonTwice() {
        this.bookHotelButtonOne.waitForVisible();
        this.bookHotelButtonOne.click();
        browser.pause(1200);
        this.bookHotelButtonTwo.waitForVisible();
        this.bookHotelButtonTwo.click();
        browser.pause(1200);
    }

    clicksViewBookingsLink() {
        this.viewBookingsLink.click();
    }
}
export default new IndexPage();