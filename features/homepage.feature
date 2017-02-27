Feature: Homepage
  In order to know what the app is about
  As a visitor
  I need to be able to view the homepage

  Scenario: Happy path
    When I visit the homepage
    Then I see the app name
