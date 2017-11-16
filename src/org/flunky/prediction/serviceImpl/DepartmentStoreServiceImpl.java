package org.flunky.prediction.serviceImpl;


import org.flunky.prediction.dao.DepartmentStoreDao;

import org.flunky.prediction.model.DepartmentStore;
import org.flunky.prediction.service.DepartmentStoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.util.List;
@Service
@Transactional
public class DepartmentStoreServiceImpl implements DepartmentStoreService {
    @Autowired
    private DepartmentStoreDao departmentStoreDao;

    @Override
    public DepartmentStore findById(Integer id) {
        return departmentStoreDao.findById(id);
    }

    @Override
    public List<DepartmentStore> getAll() {
        return departmentStoreDao.getAll();
    }
}
