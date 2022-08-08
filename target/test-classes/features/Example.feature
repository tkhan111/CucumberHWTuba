@OtherLoginFeature @Regression
Feature: TechFios Other Login validation

  Background: 
    Given User is on the Techfios login page

  @ExampleScenario1
  Scenario Outline: User should be able to login with correct credential
    When User enters username as "<username>"
    When User enters password as "<password>"
    And User clicks on the "<login>"
    Then User should land on dashboard page
    And User clicks on "<bankCash>"
    And User clicks on "<newAccount>"
    And User enter accountTitle "<accountTitle>" in accounts page
    And User enter description "<description>" in accounts page
    And User enter initialBalance "<initialBalance>" in accounts page
    And User enter accountNumber "<accountNumber>" in accounts page
    And User enter contactPerson "<contactPerson>" in accounts page
    And User enter contactPhone "<contactPhone>" in accounts page
    And User enter url "<url>" in accounts page
    And User clicks on  "<newAccount>" in accounts page
    Then User should be able to validate account created successfully

    Examples: 
      | username          | password | accountTitle | description | initialBalance | accountNumber | contactPerson | contactPhone | url          |
      | demo@techfios.com | abc123   | techAccount  | my savings  |         200000 |       4567534 | myself        | 345-345-3453 | techfios.com |
