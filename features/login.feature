Feature: user login

  Background:
    Given user 'lands on' the 'index page'
    When user 'clicks login link' on the 'index page'

  Scenario: user tries to login with invalid credentials
    And user enters 'badloginname' 'into the username textbox' on the 'login page'
    And user enters 'badloginpassword' 'into the password textbox' on the 'login page'
    And user 'clicks login button' on the 'login page'
    Then there should be an 'error message' on the 'login page'

  Scenario: user logs in with valid credentials and then logs out
    And user enters 'realname' 'into the username textbox' on the 'login page'
    And user enters '123456789' 'into the password textbox' on the 'login page'
    And user 'clicks login button' on the 'login page'
    Then user should land on 'index page' with 'a personalized greeting'
