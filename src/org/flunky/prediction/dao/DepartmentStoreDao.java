package org.flunky.prediction.dao;

import org.flunky.prediction.model.DepartmentStore;

import java.util.List;

public interface DepartmentStoreDao {

    public DepartmentStore findById(Integer id);

    public List<DepartmentStore> getAll();
}
