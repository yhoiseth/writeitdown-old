Feature: Login
  In order to access my content
  As a user
  I need to be able to login

  Scenario: User already exists
    Given I already have a user account
    And I am not logged in

    When I visit the homepage
    And I enter my username and password

    Then I should be logged in
