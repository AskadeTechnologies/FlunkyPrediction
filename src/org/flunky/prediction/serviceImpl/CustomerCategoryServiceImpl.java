package org.flunky.prediction.serviceImpl;

import org.flunky.prediction.dao.CustomerCategoryDao;
import org.flunky.prediction.model.CustomerCategory;
import org.flunky.prediction.service.CustomerCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by AdrianIonita on 10/10/2017.
 */
@Service
@Transactional
public class CustomerCategoryServiceImpl implements CustomerCategoryService {
    @Autowired
    private CustomerCategoryDao customerCategoryDao;

    @Override
    public CustomerCategory findById(Integer id) {
        return customerCategoryDao.findById(id);
    }

    @Override
    public List<CustomerCategory> getAll() {
        return customerCategoryDao.getAll();
    }
}
