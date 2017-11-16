package org.flunky.prediction.daoImpl;

import org.flunky.prediction.dao.CategoryAnalyticsDao;
import org.flunky.prediction.model.BasketSizeTrend;
import org.flunky.prediction.model.CategoryAnalytics;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Repository
public class CategoryAnalyticsDaoImpl implements CategoryAnalyticsDao{

    @Autowired
    private SessionFactory sessionFactory;

    public SessionFactory getSessionFactory() {
        return sessionFactory;
    }

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public CategoryAnalytics getCurrentCategoryAnalytics(String categoryCode, Date givenDate){
        List<CategoryAnalytics> categoryAnalyticsList = new ArrayList<CategoryAnalytics>();
        categoryAnalyticsList = getSessionFactory().getCurrentSession()
                .createQuery("from CategoryAnalytics where categoryCode=? and dayDate = ?")
                .setParameter(0, categoryCode).setParameter(1, givenDate).list();
        if (categoryAnalyticsList.size() > 0) {
            return categoryAnalyticsList.get(0);
        } else {
            return null;
        }
    }

    public List<BasketSizeTrend> getBasketSizeTrend(String categoryCode){
        return getSessionFactory().getCurrentSession()
                .createQuery("from BasketSizeTrend where categoryCode=?")
                .setParameter(0, categoryCode).list();
    }
}
