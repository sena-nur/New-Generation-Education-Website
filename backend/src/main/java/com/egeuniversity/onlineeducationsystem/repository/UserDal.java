package com.egeuniversity.onlineeducationsystem.repository;

import com.egeuniversity.onlineeducationsystem.data.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserDal extends JpaRepository<User, Long>, JpaSpecificationExecutor<User> {
    Optional<User> findByName(String username);

    Optional<User> findByEmail(String email);

    Boolean existsByName(String username);

    Boolean existsByEmail(String email);
}
