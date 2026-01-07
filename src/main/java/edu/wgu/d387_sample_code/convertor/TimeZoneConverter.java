package edu.wgu.d387_sample_code.convertor;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;

public class TimeZoneConverter {

    private static final DateTimeFormatter FORMATTER =
            DateTimeFormatter.ofPattern("HH:mm");

    public static String convert(LocalTime etTime) {
        ZonedDateTime et = etTime
                .atDate(LocalDate.now())
                .atZone(ZoneId.of("America/New_York"));

        ZonedDateTime mt = et.withZoneSameInstant(ZoneId.of("America/Denver"));
        ZonedDateTime utc = et.withZoneSameInstant(ZoneId.of("UTC"));

        return "ET: " + et.format(FORMATTER)
                + " | MT: " + mt.format(FORMATTER)
                + " | UTC: " + utc.format(FORMATTER);
    }
}
