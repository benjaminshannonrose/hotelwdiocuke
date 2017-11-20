Feature: user log out

  Background:
    Given user 'lands on' the 'index page'
    When user 'clicks login link' on the 'index page'

  Scenario: user logs in and then logs out
    And user enters 'indexlogout' 'into the username textbox' on the 'login page'
    And user enters '123456789' 'into the password textbox' on the 'login page'
    And user 'clicks login button' on the 'login page'
    And user 'clicks log out link' on the 'index page'
    Then user 'lands on' the 'login page'