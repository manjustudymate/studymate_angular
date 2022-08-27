package Selenium;
import org.openqa.selenium.WebDriver;  
import org.openqa.selenium.chrome.ChromeDriver;  
class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!"); 
        System.setProperty("webdriver.chrome.driver", "E:\\Selenium\\chromedriver_win32_100\\chromedriver.exe");
        WebDriver driver=new ChromeDriver();  
        driver.navigate().to("http://www.javatpoint.com/");
        System.out.println("Hai");
        
    }
}