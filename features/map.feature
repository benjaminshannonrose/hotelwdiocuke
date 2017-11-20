Feature: viewing gogole map of booked hotel

  Background:
    Given user 'lands on' the 'index page'

  Scenario: user views the google map associated a booking
    When user 'clicks login link' on the 'index page'
    And user enters 'mapusername' 'into the username textbox' on the 'login page'
    And user enters '123456789' 'into the password textbox' on the 'login page'
    And user 'clicks login button' on the 'login page'
    And user 'clicks view bookings link' on the 'index page'
    And user 'clicks view booking button' on the 'bookings page'
    Then user should 'see a google map of the hotel with details in a modal' on the 'bookings page'
    And user should 'be able to close the map' on the 'bookings page'