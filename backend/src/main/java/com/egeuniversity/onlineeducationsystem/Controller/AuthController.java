package com.egeuniversity.onlineeducationsystem.Controller;

import com.egeuniversity.onlineeducationsystem.Exception.ErrorCodes;
import com.egeuniversity.onlineeducationsystem.Exception.GenericException;
import com.egeuniversity.onlineeducationsystem.Service.AuthService;
import com.egeuniversity.onlineeducationsystem.payload.requests.LoginRequest;
import com.egeuniversity.onlineeducationsystem.payload.requests.SignupRequest;
import com.egeuniversity.onlineeducationsystem.payload.responses.JwtResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        try {
            return authService.authenticateUser(loginRequest);
        } catch (GenericException ge) {
            throw ge;
        } catch (Exception e) {
            throw new GenericException(ErrorCodes.E21_MESSAGE, ErrorCodes.E21_CODE, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
        try {
            return authService.registerUser(signUpRequest);
        } catch (GenericException ge) {
            throw ge;
        } catch (Exception e) {
            throw new GenericException(ErrorCodes.E22_MESSAGE, ErrorCodes.E22_CODE, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @PostMapping("/token")
    public ResponseEntity<JwtResponse> generateNewToken(@Valid @RequestBody LoginRequest loginRequest) {
        try {
            return ResponseEntity.ok(authService.generateNewToken(loginRequest));
        } catch (GenericException ge) {
            throw ge;
        } catch (Exception e) {
            throw new GenericException(ErrorCodes.E23_MESSAGE, ErrorCodes.E23_CODE, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}