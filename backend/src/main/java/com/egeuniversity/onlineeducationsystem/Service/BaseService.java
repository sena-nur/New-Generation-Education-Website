package com.egeuniversity.onlineeducationsystem.Service;

import com.egeuniversity.onlineeducationsystem.data.BaseEntity;
import com.egeuniversity.onlineeducationsystem.repository.BaseRepository;

import java.io.Serializable;

public class BaseService<T extends BaseEntity, ID extends Serializable> extends ModelService<T, ID> {

    private BaseRepository<T, ID> repository;

    public BaseService(String resourceName, BaseRepository<T, ID> repository) {

        super(resourceName, repository);
        this.repository = repository;
    }
}
