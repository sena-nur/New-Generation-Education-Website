package com.egeuniversity.onlineeducationsystem.Exception;

import com.fasterxml.jackson.databind.exc.UnrecognizedPropertyException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

import java.util.Arrays;

@ControllerAdvice
public class GlobalExceptionHandler {
    private static final Logger LOGGER = LoggerFactory.getLogger(GlobalExceptionHandler.class);

    /**
     * Handles GenericException by creating an ErrorResponse and returning it as a ResponseEntity.
     *
     * @param ex the caught GenericException.
     * @return a ResponseEntity containing an ErrorResponse and the appropriate HTTP status.
     * @author Ersin Karaaslan
     */
    @ExceptionHandler(GenericException.class)
    public ResponseEntity<ErrorResponse> handleGenericException(GenericException ex) {
        ErrorResponse errorResponse = new ErrorResponse(
                ex.getCode(),
                ex.getMessage()
        );
        return new ResponseEntity<>(errorResponse, ex.getHttpStatus());
    }

    /**
     * Represents an error response containing an error code, message, and details.
     *
     * @author Ersin Karaaslan
     */
    public static class ErrorResponse {
        private final String  code;
        private final String message;

        public ErrorResponse(String code, String message) {
            this.code = code;
            this.message = message;
        }

        public String getCode() {
            return code;
        }

        public String getMessage() {
            return message;
        }

    }

    /**
     * Handles UnrecognizedPropertyException, and returns an HTTP 400 Bad Request response with an error message.
     *
     * @param ex The UnrecognizedPropertyException to handle.
     * @return An HTTP 400 Bad Request response with an error message.
     */
    @ExceptionHandler(UnrecognizedPropertyException.class)
    public ResponseEntity<ErrorResponse> handleUnrecognizedPropertyException(UnrecognizedPropertyException ex) {
        String message = ErrorCodes.E1_MESSAGE + ex.getPropertyName();
        ErrorResponse errorResponse = new ErrorResponse(ErrorCodes.E1_CODE,message);
        LOGGER.error("Error Unknown fields found: {}", ex.getMessage());
        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    }

    /**
     * Handles HttpMessageNotReadableException that occurs when the request body is not readable,
     * for instance, if the JSON is malformed.
     *
     * @param ex The HttpMessageNotReadableException exception thrown.
     * @return ResponseEntity - contains an ErrorResponse with error code and error message.
     */
    @ExceptionHandler(HttpMessageNotReadableException.class)
    public ResponseEntity<ErrorResponse> handleHttpMessageNotReadableException(HttpMessageNotReadableException ex) {
        ErrorResponse errorResponse = new ErrorResponse(ErrorCodes.E2_CODE, ErrorCodes.E2_MESSAGE);
        LOGGER.error("Error Invalid parameters sent: {}", ex.getMessage());
        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    }

    /**
     * Handles NullPointerException that occurs when the application tries to use an object reference
     * that has the null value. These include calling an instance method of the object referred by a
     * null reference.
     *
     * @param ex The NullPointerException exception thrown.
     * @return ResponseEntity - contains an ErrorResponse with error code and error message.
     */
    @ExceptionHandler(NullPointerException.class)
    public ResponseEntity<ErrorResponse> handleNullPointerException(NullPointerException ex) {
        ErrorResponse errorResponse = new ErrorResponse(ErrorCodes.E3_CODE, ErrorCodes.E3_MESSAGE);
        LOGGER.error("Error: Null contact type or contact value: {}", ex.getMessage());
        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(DataIntegrityViolationException.class)
    public ResponseEntity<ErrorResponse> handleDataIntegrityViolationException(DataIntegrityViolationException ex) {
        ErrorResponse errorResponse = new ErrorResponse(ErrorCodes.E4_CODE,ErrorCodes.E4_MESSAGE);
        LOGGER.error("Data Integrity Violation: {}", ex.getMessage());
        return new ResponseEntity<>(errorResponse, HttpStatus.CONFLICT);
    }

    @ExceptionHandler(MethodArgumentTypeMismatchException.class)
    public ResponseEntity<ErrorResponse> handleTypeMismatch(MethodArgumentTypeMismatchException ex) {
        Class<?> requiredType = ex.getRequiredType();
        if (requiredType != null && requiredType.isEnum()) {
            StringBuilder templateMessage= new StringBuilder();
            Arrays.stream(requiredType.getEnumConstants()).forEach(enumConstant -> templateMessage.append(" or ").append(enumConstant.toString()));
            String errorMessage = String.format(ErrorCodes.E5_MESSAGE,  ex.getName(), ex.getValue(), ex.getName(), templateMessage);
            ErrorResponse errorResponse = new ErrorResponse(ErrorCodes.E5_CODE, errorMessage);
            LOGGER.error("Invalid format provided: {}", ex.getValue());
            return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
        }


        ErrorResponse errorResponse = new ErrorResponse(ErrorCodes.E5_CODE, ErrorCodes.E5_MESSAGE);
        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(value = {MethodArgumentNotValidException.class})
    public ResponseEntity<ErrorResponse> handleValidationException(MethodArgumentNotValidException ex) {
        FieldError fieldError = ex.getBindingResult().getFieldError();
        String errorMessage = fieldError != null ? fieldError.getDefaultMessage() : "Invalid parameter.";
        ErrorResponse errorResponse = new ErrorResponse(ErrorCodes.E2_CODE, errorMessage);
        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    }
}
