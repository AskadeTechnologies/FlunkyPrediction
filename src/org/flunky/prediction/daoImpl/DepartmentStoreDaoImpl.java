package org.flunky.prediction.daoImpl;


import org.flunky.prediction.dao.DepartmentStoreDao;
import org.flunky.prediction.model.DepartmentStore;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class DepartmentStoreDaoImpl implements DepartmentStoreDao {
    @Autowired
    private SessionFactory sessionFactory;


    public SessionFactory getSessionFactory() {
        return sessionFactory;
    }

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    @Override
    public DepartmentStore findById(Integer id) {
        return (DepartmentStore) sessionFactory.getCurrentSession().get(DepartmentStore.class, id);
    }

    @Override
    public List<DepartmentStore> getAll(){
        return sessionFactory.getCurrentSession().createQuery("from DepartmentStore order by id desc").list();
    }
}
