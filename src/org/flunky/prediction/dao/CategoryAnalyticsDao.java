package org.flunky.prediction.dao;

import org.flunky.prediction.model.BasketSizeTrend;
import org.flunky.prediction.model.CategoryAnalytics;

import java.util.Date;
import java.util.List;

public interface CategoryAnalyticsDao {

    public CategoryAnalytics getCurrentCategoryAnalytics(String categoryCode, Date givenDate);

    public List<BasketSizeTrend> getBasketSizeTrend(String categoryCode);
}
