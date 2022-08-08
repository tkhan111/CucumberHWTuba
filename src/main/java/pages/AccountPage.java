package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class AccountPage {

	WebDriver driver;

	public AccountPage(WebDriver driver) {
		this.driver = driver;
	}

	@FindBy(how = How.XPATH, using = "//input[@id='account']")
	WebElement AccountTitle;
	@FindBy(how = How.XPATH, using = "//input[@id='description']")
	WebElement AccountDescription;
	@FindBy(how = How.XPATH, using = "//input[@id='balance']")
	WebElement AccountBalance;

	@FindBy(how = How.XPATH, using = "//*[@id=\"account_number\"]")
	WebElement AccountNumber;
	@FindBy(how = How.XPATH, using = "//*[@id=\"contact_person\"]")
	WebElement ContactPerson;
	@FindBy(how = How.XPATH, using = "//*[@id=\"contact_phone\"]")
	WebElement ContactPhone;
	@FindBy(how = How.XPATH, using = "//*[@id=\"ib_url\"]")
	WebElement Url;

	@FindBy(how = How.XPATH, using = "//button[@type ='submit' and @class='btn btn-primary']")
	WebElement Submit;

	@FindBy(how = How.XPATH, using = "//a[contains(text(), 'List Accounts')]")
	WebElement ListCustomers;
	
	
	

	public void enterAccountTitle(String accountTitle) {
		AccountTitle.sendKeys(accountTitle);
	}

	public void enterDescription(String description) {
		AccountDescription.sendKeys(description);
	}

	public void enterAccountBalance(String initialBalance) {
		AccountBalance.sendKeys(initialBalance);
	}

	public void enterAccountNumber(String accountNumber) {
		AccountNumber.sendKeys(accountNumber);
	}

	public void enterContactPerson(String contactPerson) {
		ContactPerson.sendKeys(contactPerson);
	}

	public void enterContactPhone(String contactPhone) {
		ContactPhone.sendKeys(contactPhone);
	}

	public void enterUrl(String url) {
		Url.sendKeys(url);
	}

	public void clickNewAccountSubmit() {
		Submit.click();
	}

	public void listNewAccountCreated() {
	//	BankAndCash.click();
		ListCustomers.click();
	}

	
	
	
	
	
	
	
	
	
}
