package com.egeuniversity.onlineeducationsystem.Service;

import com.egeuniversity.onlineeducationsystem.Service.filter.UserFilter;
import com.egeuniversity.onlineeducationsystem.data.User;
import com.egeuniversity.onlineeducationsystem.payload.responses.UserResponse;
import com.egeuniversity.onlineeducationsystem.repository.UserDal;
import com.egeuniversity.onlineeducationsystem.utility.UserUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserDal userRepository;
    private final UserUtil userUtil;

    public List<UserResponse> getUsers(String type) {
        List<User> users = userRepository.findAll(
                UserFilter.getByUserRole(type)
        );
        return users.stream().map(UserResponse::new).toList();
    }
}
