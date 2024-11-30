package com.egeuniversity.onlineeducationsystem.utility;

import com.egeuniversity.onlineeducationsystem.data.User;
import com.egeuniversity.onlineeducationsystem.repository.UserDal;
import com.egeuniversity.onlineeducationsystem.security.services.UserDetailsImpl;
import lombok.AllArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Component
@AllArgsConstructor
public class UserUtil {

    private final UserDal userDal;


    public User getCurrentUser() {
        String email = "";

        try {
            UserDetailsImpl principal = (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication()
                    .getPrincipal();
            if (principal instanceof UserDetails) {
                email = ((UserDetails) principal).getUsername();
            }
            return userDal.findByEmail(email).orElseThrow(RuntimeException::new);
        } catch (Exception e) {
            throw new RuntimeException("Giriş Yapan Kullanıcı Bulunamadı: " + "User: " + email);
        }
    }

    public String getUserPermissions() {
        String email = "";

        try {
            UserDetailsImpl principal = (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication()
                    .getPrincipal();
            if (((String) (((SimpleGrantedAuthority) ((ArrayList) principal.getAuthorities()).get(
                    0)).getAuthority())).equals("ROLE_ADMIN")) {
                return "Admin";
            } else {
                return "User";
            }
        } catch (Exception e) {
            throw new RuntimeException("Giriş Yapan Kullanıcı Bulunamadı: " + "User: " + email);
        }
    }

}


