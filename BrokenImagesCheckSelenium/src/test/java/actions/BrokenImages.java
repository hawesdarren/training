package actions;

import org.apache.http.client.methods.HttpGet;
import org.apache.http.conn.ssl.NoopHostnameVerifier;
import org.apache.http.conn.ssl.TrustAllStrategy;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.ssl.SSLContextBuilder;
import org.assertj.core.api.SoftAssertions;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;


import java.io.IOException;
import java.net.URL;
import java.security.KeyManagementException;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.util.List;

import static org.assertj.core.api.Assertions.*;

public class BrokenImages extends pom.brokenImages.BrokenImages {

    static SoftAssertions softly = new SoftAssertions();

    public static void loadPage(WebDriver driver){
        driver.get("https://the-internet.herokuapp.com/broken_images");
        //Check page loaded
        assertThat(driver.findElement(header).getText()).contains("Broken Images");
    }

    public static void checkForBrokenImages(WebDriver driver) throws IOException, NoSuchAlgorithmException, KeyStoreException, KeyManagementException {

        //Get a List of all elements that have a img
        List<WebElement> imgElements = driver.findElements(allImages);
        //Loop through all the elements
        for(WebElement element : imgElements){
            //Perform a get and check for 200 status
            checkResponseCode(element.getAttribute(("src")));
        }
        softly.assertAll();
    }

    private static void checkResponseCode(String url) throws IOException, NoSuchAlgorithmException, KeyStoreException, KeyManagementException {

        CloseableHttpClient httpClient = HttpClientBuilder.create()

                .setSSLContext(new SSLContextBuilder().loadTrustMaterial(null, TrustAllStrategy.INSTANCE).build())
                .setSSLHostnameVerifier(NoopHostnameVerifier.INSTANCE)
                .build();

        httpClient.execute(new HttpGet(url),
                response -> {
                   softly.assertThat(response.getStatusLine().getStatusCode())
                           .withFailMessage("Failed to download image for url: " + url)
                           .isEqualTo(200);

                   return response;
                });

    }
}
