@wip
Feature: The Key Presses page

Background: 
    Given I am on the "key_presses" page

Scenario: I can press a <Key> key and see what I have inputted.
    When I press <Key>
    Then I should see You entered: <Result>

Examples:
    | Key           | Result|
    | A             | A |
    | 6             | 6 |
    | \             | BACK_SLASH |