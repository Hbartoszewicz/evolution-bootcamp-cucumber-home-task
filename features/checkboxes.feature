@wip

Feature: checkboxes page 

Background: 
    Given I am on the "checkboxes" page

Scenario Outline: User can check/uncheck checkboxes
    When I click on the checkbox1 and checkbox2
    Then I should see checked checkbox1 and unchecked checkbox2


