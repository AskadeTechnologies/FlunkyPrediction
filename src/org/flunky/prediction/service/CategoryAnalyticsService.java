package org.flunky.prediction.service;

import org.flunky.prediction.model.BasketSizeTrend;
import org.flunky.prediction.model.CategoryAnalytics;

import java.util.Date;
import java.util.List;

public interface CategoryAnalyticsService {
    public CategoryAnalytics getCurrentCategoryAnalytics(String categoryCode, Date givenDate);
    public List<BasketSizeTrend> getBasketSizeTrend(String categoryCode);
}
