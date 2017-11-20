Feature: searching for hotels

  Background:
    Given user 'lands on' the 'index page'

  Scenario: user enters zip code to search for hotels
    When user enters '43016' 'into the hotel search bar' on the 'index page'
    And user 'clicks search button' on the 'index page'
    Then there should be a 'list of ten hotels' on the 'index page'

  Scenario: user enters city and state to search for hotels
    When user enters 'Atlanta GA' 'into the hotel search bar' on the 'index page'
    And user 'clicks search button' on the 'index page'
    Then there should be a 'list of ten hotels' on the 'index page'