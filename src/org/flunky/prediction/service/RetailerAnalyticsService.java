package org.flunky.prediction.service;

import org.flunky.prediction.model.RetailerAnalytics;

import java.util.Date;

public interface RetailerAnalyticsService {
    public RetailerAnalytics getCurrentRetailerAnalytics(String retailerCode, Date givenDate);
}
