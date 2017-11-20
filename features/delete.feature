Feature: deleting hotel from bookings list

  Background:
    Given user 'lands on' the 'index page'

  Scenario: user deletes a booking
    When user 'clicks login link' on the 'index page'
    And user enters 'deleteuser' 'into the username textbox' on the 'login page'
    And user enters '123456789' 'into the password textbox' on the 'login page'
    And user 'clicks login button' on the 'login page'
    And user 'clicks view bookings link' on the 'index page'
    Then user should 'see one less booking after clicking delete booking button' on the 'bookings page'