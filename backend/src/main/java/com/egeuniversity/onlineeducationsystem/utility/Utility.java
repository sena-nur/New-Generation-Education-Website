package com.egeuniversity.onlineeducationsystem.utility;

import com.egeuniversity.onlineeducationsystem.Exception.ErrorCodes;
import com.egeuniversity.onlineeducationsystem.Exception.GenericException;
import com.egeuniversity.onlineeducationsystem.security.services.UserDetailsImpl;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;

import java.time.Instant;
import java.time.LocalDateTime;

public abstract class Utility {

    public void validatePageAndSize(int page, int size) throws Exception {
        if (page <= 0) {
            throw new GenericException(String.format(ErrorCodes.E26_MESSAGE,"page","Page"),ErrorCodes.E26_CODE,
                    HttpStatus.BAD_REQUEST);
        } else if (size <= 0) {
            throw new GenericException(String.format(ErrorCodes.E26_MESSAGE,"size","Size"),ErrorCodes.E26_CODE,
                    HttpStatus.BAD_REQUEST);
        }
    }

    public static LocalDateTime getNow() {
        return LocalDateTime.from(Instant.now());
    }

    public static Long getUserIdFromToken() {
        return ((UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getId();
    }

   public static String getRoleFromToken() {
       return ((UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getAuthorities().stream().map(GrantedAuthority::getAuthority).toList()
               .get(0);
   }

    public static String getUserNameFromToken() {
        return ((UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUsername();
    }

    public static String getUserEmailFromToken() {
        return ((UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getEmail();
    }

}
