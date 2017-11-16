package org.flunky.prediction.service;

import org.flunky.prediction.model.CustomerCategory;

import java.util.List;

/**
 * Created by AdrianIonita on 10/10/2017.
 */
public interface CustomerCategoryService {
    public CustomerCategory findById(Integer id);

    public List<CustomerCategory> getAll();
}
