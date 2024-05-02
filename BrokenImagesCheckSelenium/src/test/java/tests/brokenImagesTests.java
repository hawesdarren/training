package tests;

import actions.BrokenImages;
import org.junit.jupiter.api.*;
import org.openqa.selenium.WebDriver;

import resources.Setup;

import java.io.IOException;
import java.net.MalformedURLException;
import java.security.KeyManagementException;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;

public class brokenImagesTests {

    public WebDriver driver;

    @BeforeAll
    public static void beforeAll() throws IOException {
        Setup.clearScreenShotDir();
    }
    @BeforeEach
    public void setUp() throws MalformedURLException {
        driver = Setup.startBrowser(driver);
    }

    @AfterEach
    public  void tearDown(TestInfo testInfo) throws IOException {
        if (driver!=null){
            //Take screenshot if test is failing
            Setup.takeScreenShot(driver, testInfo.getDisplayName());
            driver.quit();
        }
    }

    @Test
    @DisplayName("Check For Broken Images")
    public void checkForBrokenImages() throws IOException, NoSuchAlgorithmException, KeyStoreException, KeyManagementException {
        BrokenImages.loadPage(driver);
        BrokenImages.checkForBrokenImages(driver);
    }
}
