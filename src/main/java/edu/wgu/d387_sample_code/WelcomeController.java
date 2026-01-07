package edu.wgu.d387_sample_code;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WelcomeController {
    private final WelcomeService welcomeService;

    public WelcomeController(WelcomeService welcomeService) {
        this.welcomeService = welcomeService;
    }

    @GetMapping("/api/welcome")
    public String welcome() throws Exception {
        return welcomeService.getWelcomeMessages();
    }
}
