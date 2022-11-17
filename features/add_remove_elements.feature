@wip

Feature: Add/Remove Elements page 

Background: 
    Given I am on the "add_remove_elements/" page

Scenario Outline: I can add <number> of elements
    When I click on the Add element button <number> times
    Then I should see a <number> Remove buttons

    Examples:
        | number     | Remove buttons|
        | 1          | 1             |
        | 3          | 3             |
        | 6          | 6             |

Scenario Outline: I can add element and remove it
    When I click on the Add element button
    Then I should see a Remove button, and remove it


