package org.flunky.prediction.service;

import org.flunky.prediction.model.DepartmentStore;

import java.util.List;

public interface DepartmentStoreService {
    public DepartmentStore findById(Integer id);

    public List<DepartmentStore> getAll();
}
