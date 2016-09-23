Feature: View tweets


  Scenario: I want to see my searched tweets
    Given I am viewing the page at "/"
    Then I can see the h1 "Avalanche"
    When I enter "cheese" into the "Enter keyword" input
    And I click on the input with value "Get Tweets"
    Then I am redirected to the "/tweets/all" page
