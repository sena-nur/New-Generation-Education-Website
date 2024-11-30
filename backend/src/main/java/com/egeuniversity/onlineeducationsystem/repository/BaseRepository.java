package com.egeuniversity.onlineeducationsystem.repository;

import com.egeuniversity.onlineeducationsystem.data.BaseEntity;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface BaseRepository<T extends BaseEntity, ID> extends ModelRepository<T, ID> {}
