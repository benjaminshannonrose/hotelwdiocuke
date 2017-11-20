Feature: booking hotels

  Background:
    Given user 'lands on' the 'index page'

  Scenario: user clicks book hotel button while not signed in
    When user enters '43016' 'into the hotel search bar' on the 'index page'
    And user 'clicks search button' on the 'index page'
    And user 'clicks book hotel button' on the 'index page'
    Then user 'lands on' the 'login page'

  Scenario: user signs in, books two hotels, and checks their bookings page
    When user 'clicks login link' on the 'index page'
    And user enters 'bookinguser' 'into the username textbox' on the 'login page'
    And user enters '123456789' 'into the password textbox' on the 'login page'
    And user 'clicks login button' on the 'login page'
    And user enters '43016' 'into the hotel search bar' on the 'index page'
    And user 'clicks search button' on the 'index page'
    And user 'clicks book hotel button twice' on the 'index page'
    And user 'clicks view bookings link' on the 'index page'
    Then user should land on 'bookings page' with 'two bookings showing'
