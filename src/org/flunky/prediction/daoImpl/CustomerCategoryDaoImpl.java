package org.flunky.prediction.daoImpl;

import org.flunky.prediction.dao.CustomerCategoryDao;
import org.flunky.prediction.model.CustomerCategory;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by AdrianIonita on 10/10/2017.
 */
@Repository
public class CustomerCategoryDaoImpl implements CustomerCategoryDao {
    @Autowired
    private SessionFactory sessionFactory;


    public SessionFactory getSessionFactory() {
        return sessionFactory;
    }

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    @Override
    public CustomerCategory findById(Integer id) {
        return (CustomerCategory) sessionFactory.getCurrentSession().get(CustomerCategory.class, id);
    }

    @Override
    public List<CustomerCategory> getAll(){
        return sessionFactory.getCurrentSession().createQuery("from CustomerCategory order by id desc").list();
    }
}
