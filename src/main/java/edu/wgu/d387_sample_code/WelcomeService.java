package edu.wgu.d387_sample_code;

import org.springframework.stereotype.Service;
import java.util.Locale;
import java.util.ResourceBundle;
import java.util.concurrent.*;


@Service
public class WelcomeService {

    public String getWelcomeMessages() throws ExecutionException, InterruptedException {
        ExecutorService executor = Executors.newFixedThreadPool(2);

        Callable<String> enTask = () -> {
            ResourceBundle rb = ResourceBundle.getBundle("messages", Locale.CANADA);
            return Thread.currentThread().getName() + " - " + rb.getString("welcome");
        };

        Callable<String> frTask = () -> {
            ResourceBundle rb = ResourceBundle.getBundle("messages", Locale.CANADA_FRENCH);
            return Thread.currentThread().getName() + " - " + rb.getString("welcome");
        };

        Future<String> enFuture = executor.submit(enTask);
        Future<String> frFuture = executor.submit(frTask);

        String result = "EN: " + enFuture.get() + "\n" + "FR: " + frFuture.get();

        executor.shutdown();
        return result;
    }
}
