package edu.wgu.d387_sample_code.rest;

import edu.wgu.d387_sample_code.convertor.TimeZoneConverter;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalTime;

@RestController
public class PresentationController {

    @GetMapping("/api/presentation")
    public String presentationTime() {
        // Any time is acceptable
        LocalTime presentationET = LocalTime.of(19, 0);

        return "Online Live Presentation Time - "
                + TimeZoneConverter.convert(presentationET);
    }
}
