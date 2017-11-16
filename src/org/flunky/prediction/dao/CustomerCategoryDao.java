package org.flunky.prediction.dao;


import org.flunky.prediction.model.CustomerCategory;

import java.util.List;

/**
 * Created by AdrianIonita on 10/10/2017.
 */
public interface CustomerCategoryDao {

    public CustomerCategory findById(Integer id);

    public List<CustomerCategory> getAll();
}
