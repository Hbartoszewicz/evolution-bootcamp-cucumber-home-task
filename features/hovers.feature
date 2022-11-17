@wip

Feature: hovers page 

Background: 
    Given I am on the "hovers" page

    Scenario: I can hover over the image <image_number> for additional information
    When I hover over the image <image_number>
    Then I should see image <image_number> name: <name>

Examples:
    | image_number  | name  |
    | 1             | user1 |
    | 2             | user2 |
    | 3             | user3 |

