package com.egeuniversity.onlineeducationsystem.Service;

import com.egeuniversity.onlineeducationsystem.Exception.ErrorCodes;
import com.egeuniversity.onlineeducationsystem.Exception.GenericException;
import com.egeuniversity.onlineeducationsystem.data.Role;
import com.egeuniversity.onlineeducationsystem.data.ERole;
import com.egeuniversity.onlineeducationsystem.data.User;
import com.egeuniversity.onlineeducationsystem.payload.requests.LoginRequest;
import com.egeuniversity.onlineeducationsystem.payload.requests.SignupRequest;
import com.egeuniversity.onlineeducationsystem.payload.responses.JwtResponse;
import com.egeuniversity.onlineeducationsystem.payload.responses.MessageResponse;
import com.egeuniversity.onlineeducationsystem.repository.RoleRepository;
import com.egeuniversity.onlineeducationsystem.repository.UserDal;
import com.egeuniversity.onlineeducationsystem.security.jwt.JwtUtils;
import com.egeuniversity.onlineeducationsystem.security.services.UserDetailsImpl;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class AuthService {

    AuthenticationManager authenticationManager;

    UserDal userRepository;

    RoleRepository roleRepository;

    PasswordEncoder encoder;

    JwtUtils jwtUtils;

    public ResponseEntity<?> authenticateUser(LoginRequest loginRequest) {
        User currentUser = userRepository.findByEmail(loginRequest.getEmail()).orElse(null);
        if (currentUser == null) {
            return ResponseEntity.badRequest().body(new MessageResponse(
                    "The email address or password that you've entered doesn't match any account. Sign up for an " +
                            "account."));
        }

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.toList());

        return ResponseEntity.ok(new JwtResponse(jwt,
                userDetails.getId(),
                currentUser.getName(),
                userDetails.getEmail(),
                roles,
                "Login success"));
    }

    public ResponseEntity<?> registerUser(SignupRequest signUpRequest) {
        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Email is already in use!"));
        }

        // Create new user's account
        User user = new User(
                signUpRequest.getName(),
                signUpRequest.getEmail(),
                encoder.encode(signUpRequest.getPassword()));

        String strRole = signUpRequest.getRole().iterator().next();
        Role role = null;

        if (strRole == null)
            role = roleRepository.findByName(ERole.ROLE_USER).orElse(null);
        else {
            role = switch (strRole) {
                case "admin" -> roleRepository.findByName(ERole.ROLE_ADMIN).orElse(null);
                default -> roleRepository.findByName(ERole.ROLE_USER).orElse(null);
            };
        }

        if (role == null) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: " + strRole + " is not found."));
        }
        Set<Role> roles = Set.of(role);
        user.setRoles(roles);
        userRepository.save(user);

        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }

    public JwtResponse generateNewToken(LoginRequest loginRequest) {
        try {
            User currentUser = userRepository.findByEmail(loginRequest.getEmail()).orElse(null);
            if (currentUser == null) {
                throw new GenericException(ErrorCodes.E14_MESSAGE, ErrorCodes.E14_CODE,
                        HttpStatus.INTERNAL_SERVER_ERROR);
            }

            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));

            UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
            SecurityContextHolder.getContext().setAuthentication(authentication);
            String token = jwtUtils.generateJwtToken(authentication);
            return new JwtResponse(token,
                    userDetails.getId(),
                    currentUser.getName(),
                    userDetails.getEmail(),
                    userDetails.getAuthorities().stream(
                            ).map(GrantedAuthority::getAuthority
                    ).toList(),
                    "Token Generated");
        } catch (Exception e) {
            throw e;
        }

    }

}
