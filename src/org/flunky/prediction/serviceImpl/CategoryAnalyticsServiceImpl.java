package org.flunky.prediction.serviceImpl;

import org.flunky.prediction.dao.CategoryAnalyticsDao;
import org.flunky.prediction.model.BasketSizeTrend;
import org.flunky.prediction.model.CategoryAnalytics;
import org.flunky.prediction.service.CategoryAnalyticsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

@Service
@Transactional
public class CategoryAnalyticsServiceImpl implements CategoryAnalyticsService {
    @Autowired
    private CategoryAnalyticsDao categoryAnalyticsDao;

    public CategoryAnalytics getCurrentCategoryAnalytics(String categoryCode, Date givenDate){
        return categoryAnalyticsDao.getCurrentCategoryAnalytics(categoryCode,givenDate);
    }
    public List<BasketSizeTrend> getBasketSizeTrend(String categoryCode){
        return categoryAnalyticsDao.getBasketSizeTrend(categoryCode);
    }
}
