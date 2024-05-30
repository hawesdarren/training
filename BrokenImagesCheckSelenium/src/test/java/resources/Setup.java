package resources;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.RemoteWebDriver;

import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.time.Duration;

public class Setup {

    public static WebDriver startBrowser(WebDriver driver) throws MalformedURLException {
        driver = startChrome(driver);
        return driver;
    }

    private static WebDriver startChrome(WebDriver driver) throws MalformedURLException {
        //This creates a chrome driver for standalone selenium grid
        ChromeOptions options = new ChromeOptions();
        //options.addArguments("--no-sandbox");
        //options.addArguments("--disable-dev-shm-usage"); //This is causing Chrome browser to fail start up in some containers
        options.setAcceptInsecureCerts(true);
        //options.addArguments("--headless");
        //URL remoteDriverUrl = new URL("http://localhost:4444");
        URL remoteDriverUrl = new URL("http://selenium-chrome:4444");
        driver = new RemoteWebDriver(remoteDriverUrl, options);
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(60));
        //driver.manage().window().maximize();
        return  driver;
    }

    public static void takeScreenShot(WebDriver driver, String fileName) throws IOException {

        File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
        String file_name = "screenshot_"+ fileName;
        FileUtils.copyFile(scrFile, new File(System.getProperty(("user.dir")) +"/screenshots/" + file_name + ".png"));
    }

    public static void clearScreenShotDir() throws IOException {
        String dir = System.getProperty("user.dir") + "/screenshots/";
        if(new File(dir).exists()){
            FileUtils.cleanDirectory(new File(dir));
        }

    }

}
