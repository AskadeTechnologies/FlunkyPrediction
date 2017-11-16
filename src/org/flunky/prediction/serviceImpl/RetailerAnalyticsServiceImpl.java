package org.flunky.prediction.serviceImpl;

import org.flunky.prediction.dao.RetailerAnalyticsDao;
import org.flunky.prediction.model.RetailerAnalytics;
import org.flunky.prediction.service.RetailerAnalyticsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;

@Service
@Transactional
public class RetailerAnalyticsServiceImpl implements RetailerAnalyticsService{
    @Autowired
    private RetailerAnalyticsDao retailerAnalyticsDao;
    public RetailerAnalytics getCurrentRetailerAnalytics(String retailerCode, Date givenDate){
        return retailerAnalyticsDao.getCurrentRetailerAnalytics(retailerCode,givenDate);
    }
}
