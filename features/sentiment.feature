Feature: Sort tweets

  @watch
  Scenario: I want to see my searched tweets
    Given I am viewing the page at "/tweets/all"
    And I can see the input with the value "Happy"
    When I click on the input with value "Happy"
    Then I am redirected to the "/tweets/all/happy" page
    And I can see the h1 "Happy Tweets"
