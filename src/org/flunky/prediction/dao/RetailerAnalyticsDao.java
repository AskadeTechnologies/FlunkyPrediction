package org.flunky.prediction.dao;

import org.flunky.prediction.model.RetailerAnalytics;

import java.util.Date;

public interface RetailerAnalyticsDao {
    public RetailerAnalytics getCurrentRetailerAnalytics(String retailerCode, Date givenDate);
}
