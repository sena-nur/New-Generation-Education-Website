package com.egeuniversity.onlineeducationsystem.repository;

import com.egeuniversity.onlineeducationsystem.data.ERole;
import com.egeuniversity.onlineeducationsystem.data.Role;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends ModelRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}
