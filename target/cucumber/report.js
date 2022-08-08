$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Example.feature");
formatter.feature({
  "line": 2,
  "name": "TechFios Other Login validation",
  "description": "",
  "id": "techfios-other-login-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@OtherLoginFeature"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "User should be able to login with correct credential",
  "description": "",
  "id": "techfios-other-login-validation;user-should-be-able-to-login-with-correct-credential",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@ExampleScenario1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User enters username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enters password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks on the \"\u003clogin\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User clicks on \"\u003cbankCash\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User clicks on \"\u003cnewAccount\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enter accountTitle \"\u003caccountTitle\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enter description \"\u003cdescription\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enter initialBalance \"\u003cinitialBalance\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enter accountNumber \"\u003caccountNumber\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enter contactPerson \"\u003ccontactPerson\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User enter contactPhone \"\u003ccontactPhone\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User enter url \"\u003curl\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User clicks on  \"\u003cnewAccount\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "techfios-other-login-validation;user-should-be-able-to-login-with-correct-credential;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accountTitle",
        "description",
        "initialBalance",
        "accountNumber",
        "contactPerson",
        "contactPhone",
        "url"
      ],
      "line": 26,
      "id": "techfios-other-login-validation;user-should-be-able-to-login-with-correct-credential;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "techAccount",
        "my savings",
        "200000",
        "4567534",
        "myself",
        "345-345-3453",
        "techfios.com"
      ],
      "line": 27,
      "id": "techfios-other-login-validation;user-should-be-able-to-login-with-correct-credential;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3628850300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the Techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_the_Techfios_login_page()"
});
formatter.result({
  "duration": 750957600,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "User should be able to login with correct credential",
  "description": "",
  "id": "techfios-other-login-validation;user-should-be-able-to-login-with-correct-credential;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OtherLoginFeature"
    },
    {
      "line": 1,
      "name": "@Regression"
    },
    {
      "line": 7,
      "name": "@ExampleScenario1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User enters username as \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enters password as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks on the \"\u003clogin\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User clicks on \"\u003cbankCash\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User clicks on \"\u003cnewAccount\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enter accountTitle \"techAccount\" in accounts page",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enter description \"my savings\" in accounts page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enter initialBalance \"200000\" in accounts page",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enter accountNumber \"4567534\" in accounts page",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enter contactPerson \"myself\" in accounts page",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User enter contactPhone \"345-345-3453\" in accounts page",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User enter url \"techfios.com\" in accounts page",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User clicks on  \"\u003cnewAccount\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_as(String)"
});
formatter.result({
  "duration": 3253918200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinition.user_enters_password_as(String)"
});
formatter.result({
  "duration": 3107098200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003clogin\u003e",
      "offset": 20
    }
  ],
  "location": "LoginStepDefinition.user_clicks_on_the(String)"
});
formatter.result({
  "duration": 3917649900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_land_on_dashboard_page()"
});
formatter.result({
  "duration": 2022884800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cbankCash\u003e",
      "offset": 16
    }
  ],
  "location": "LoginStepDefinition.user_clicks_on(String)"
});
formatter.result({
  "duration": 500704400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cnewAccount\u003e",
      "offset": 16
    }
  ],
  "location": "LoginStepDefinition.user_clicks_on(String)"
});
formatter.result({
  "duration": 448319700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "techAccount",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinition.user_enter_accountTitle_in_accounts_page(String)"
});
formatter.result({
  "duration": 147712100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "my savings",
      "offset": 24
    }
  ],
  "location": "LoginStepDefinition.user_enter_description_in_accounts_page(String)"
});
formatter.result({
  "duration": 167635400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200000",
      "offset": 27
    }
  ],
  "location": "LoginStepDefinition.user_enter_initialBalance_in_accounts_page(String)"
});
formatter.result({
  "duration": 128624000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4567534",
      "offset": 26
    }
  ],
  "location": "LoginStepDefinition.user_enter_accountNumber_in_accounts_page(String)"
});
formatter.result({
  "duration": 114966700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "myself",
      "offset": 26
    }
  ],
  "location": "LoginStepDefinition.user_enter_contactPerson_in_accounts_page(String)"
});
formatter.result({
  "duration": 163047100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "345-345-3453",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinition.user_enter_contactPhone_in_accounts_page(String)"
});
formatter.result({
  "duration": 136764100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "techfios.com",
      "offset": 16
    }
  ],
  "location": "LoginStepDefinition.user_enter_url_in_accounts_page(String)"
});
formatter.result({
  "duration": 143087500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cnewAccount\u003e",
      "offset": 17
    }
  ],
  "location": "LoginStepDefinition.user_clicks_on_in_accounts_page(String)"
});
formatter.result({
  "duration": 912756300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "duration": 2870802900,
  "status": "passed"
});
formatter.after({
  "duration": 839558200,
  "status": "passed"
});
});