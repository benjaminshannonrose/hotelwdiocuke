"use strict";

import Page from './Page';
import { acceptAlert} from "../support/helper/alertHelper";

class BookingsPage extends Page {

    get hotelName() { return $$('.hotelName');}
    get hotelView() { return $('body > div.container-fluid > div > div:nth-child(1) > button.col-xs-1.btn.btn-primary.btn-sm.view');}
    get streetAddress() { return browser.elements('.street-address');}
    get mapCloser() { return $('#modalBody > div > div > div:nth-child(1) > div:nth-child(4) > div:nth-child(4) > div > img');}
    get deleteButton() { return $('body > div.container-fluid > div > div:nth-child(1) > button.col-xs-1.btn.btn-primary.btn-sm.delete');}


    twoBookingsShowing() {
        const array = $$('.hotelName');
        expect(array.length).to.equal(3);
    }

    clicksViewBookingButton() {
        this.hotelView.click();
    }

    seeAGoogleMapOfTheHotelWithDetailsInAModal() {
        this.streetAddress.waitForVisible();
    }

    beAbleToCloseTheMap() {
        this.mapCloser.click();
    }

    seeOneLessBookingAfterClickingDeleteBookingButton() {
        const before = $$('.hotelName').length;
        this.deleteButton.click();
        acceptAlert();
        const after = $$('.hotelName').length;
        expect(after).to.equal(before-1);
    }

}

export default new BookingsPage();