package steps;

import org.openqa.selenium.By;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pages.AccountPage;
import pages.LoginPage;
import pages.TestBasePage;

//1. we are extending so we don't have to call the driver every time
public class LoginStepDefinition extends TestBasePage {

	LoginPage loginPage;
	AccountPage accountPage;
	String accountTitle1;
	String emptyString = "";

	@Before
	public void methodName() {
		initDriver();
		loginPage = PageFactory.initElements(driver, LoginPage.class);
		accountPage = PageFactory.initElements(driver, AccountPage.class);
	}

	@Given("^User is on the Techfios login page$")
	public void user_is_on_the_Techfios_login_page() {
		// initDriver();
		driver.get("https://techfios.com/billing/?ng=login/");
	}

	@When("^User enters username as \"([^\"]*)\"$")
	public void user_enters_username_as(String username) {
		loginPage.enterUserName(username);
	}

	@When("^User enters password as \"([^\"]*)\"$")
	public void user_enters_password_as(String password) {
		loginPage.enterPassword(password);
	}

	@When("^User clicks on the \"([^\"]*)\"$")
	public void user_clicks_on_the(String login) {
		loginPage.clickSignInButton();
	}

	@Then("^User should land on dashboard page$")
	public void user_should_land_on_dashboard_page() throws InterruptedException {
		Thread.sleep(2000);
		Assert.assertEquals("Dashboard- iBilling", loginPage.getPageTitle());
	}

	@Then("^User clicks on \"([^\"]*)\"$")
	public void user_clicks_on(String arg1) {
		loginPage.clickBankAndCash();
		loginPage.clickBankAndCashNewAccount();
	}

	@Then("^User enter accountTitle \"([^\"]*)\" in accounts page$")
	public void user_enter_accountTitle_in_accounts_page(String accountTitle) {

		accountTitle1 = accountTitle + randNum();
		System.out.println("user entered the account number: " + accountTitle1);
		accountPage.enterAccountTitle(accountTitle1);
	}

	@Then("^User enter description \"([^\"]*)\" in accounts page$")
	public void user_enter_description_in_accounts_page(String description) {
		accountPage.enterDescription(description);
	}

	@Then("^User enter initialBalance \"([^\"]*)\" in accounts page$")
	public void user_enter_initialBalance_in_accounts_page(String initialBalance) {
		accountPage.enterAccountBalance(initialBalance);
	}

	@Then("^User enter accountNumber \"([^\"]*)\" in accounts page$")
	public void user_enter_accountNumber_in_accounts_page(String accountNumber) {
		accountPage.enterAccountNumber(accountNumber);
	}

	@Then("^User enter contactPerson \"([^\"]*)\" in accounts page$")
	public void user_enter_contactPerson_in_accounts_page(String contactPerson) {
		accountPage.enterContactPerson(contactPerson);
	}

	@Then("^User enter contactPhone \"([^\"]*)\" in accounts page$")
	public void user_enter_contactPhone_in_accounts_page(String contactPerson) {
		accountPage.enterContactPhone(contactPerson);
	}

	@Then("^User enter url \"([^\"]*)\" in accounts page$")
	public void user_enter_url_in_accounts_page(String url) {
		accountPage.enterUrl(url);
	}

	@Then("^User clicks on  \"([^\"]*)\" in accounts page$")
	public void user_clicks_on_in_accounts_page(String arg1) {
		accountPage.clickNewAccountSubmit();
	}

	
	@Then("^User should be able to validate account created successfully$")
	public void user_should_be_able_to_validate_account_created_successfully() throws InterruptedException {

		loginPage.clickBankAndCash();
		accountPage.listNewAccountCreated();

		Thread.sleep(2000);
		int rowCount = driver.findElements(By.xpath("//table/tbody/tr")).size();
		int colCount = driver.findElements(By.xpath("//table/tbody/tr/th")).size();
		System.out.println("Number of rows : " + rowCount);
		System.out.println("Number of columns : " + colCount);

		for (int i = rowCount; i > 1; i--) {
			for (int j = 1; j <= colCount; j++) {
				String actValue = driver.findElement(By.xpath("//table/tbody/tr[" + (i) + "]/td[" + (j) + "]"))
						.getText();
				// System.out.println(actValue);
				if (actValue.equalsIgnoreCase(accountTitle1)) {
					System.out
							.println("Validating the Account Title : " + accountTitle1 + " account has been created! ");
					// System.out.println("i:" + i);
					// System.out.println("J:" + j);
					break;

				}

			}
			break;
		}

	}

	@After
	public void tearDown() {
		// close is closing 1 windows and quit will close all the windows
		driver.close();
		driver.quit();
	}

}
