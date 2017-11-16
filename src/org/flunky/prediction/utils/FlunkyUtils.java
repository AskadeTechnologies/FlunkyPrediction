package org.flunky.prediction.utils;

import java.util.Date;

public class FlunkyUtils {

    public final static String ANONYMOUS = "anonymous";
    public final static String BUCHAREST_TIME_ZONE = "Europe/Bucharest";

    /**
     * @return
     */
    public static Date getCurrentDate() {
        Date currentDate = new Date(System.currentTimeMillis());
        return currentDate;
    }
}

