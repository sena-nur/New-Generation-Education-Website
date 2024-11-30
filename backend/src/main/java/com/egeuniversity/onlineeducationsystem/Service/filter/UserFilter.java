package com.egeuniversity.onlineeducationsystem.Service.filter;

import com.egeuniversity.onlineeducationsystem.data.User;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Component;

@Component
@NoArgsConstructor
public class UserFilter {

    public static Specification<User> getByUserRole(String type) {
        return Specification.where(null);
    }
}