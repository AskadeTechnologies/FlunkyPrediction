package org.flunky.prediction.daoImpl;

import org.flunky.prediction.dao.RetailerAnalyticsDao;
import org.flunky.prediction.model.RetailerAnalytics;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Repository
public class RetailerAnalyticsDaoImpl implements RetailerAnalyticsDao {
    @Autowired
    private SessionFactory sessionFactory;

    public SessionFactory getSessionFactory() {
        return sessionFactory;
    }

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public RetailerAnalytics getCurrentRetailerAnalytics(String retailerCode, Date givenDate){
        List<RetailerAnalytics> retailerAnalyticsList = new ArrayList<RetailerAnalytics>();
        retailerAnalyticsList = getSessionFactory().getCurrentSession()
                .createQuery("from RetailerAnalytics where departmentStore=? and dayDate = ?")
                .setParameter(0, retailerCode).setParameter(1, givenDate).list();
        if (retailerAnalyticsList.size() > 0) {
            return retailerAnalyticsList.get(0);
        } else {
            return null;
        }
    }
}
