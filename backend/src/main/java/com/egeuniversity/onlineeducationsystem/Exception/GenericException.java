package com.egeuniversity.onlineeducationsystem.Exception;

import org.springframework.http.HttpStatus;

public class GenericException extends RuntimeException{
    private final String message;
    private final String code;
    private final HttpStatus httpStatus;

    /**
     * Constructs a new GenericException with the specified message, code, HttpStatus, and details.
     *
     * @param message    the detail message.
     * @param code       the error code.
     * @param httpStatus the HttpStatus associated with the exception.
     * @author Ersin Karaaslan
     */
    public GenericException(String message, String code, HttpStatus httpStatus) {
        super(message);
        this.message = message;
        this.code = code;
        this.httpStatus = httpStatus;
    }

    @Override
    public String getMessage() {
        return message;
    }

    public String getCode() {
        return code;
    }

    public HttpStatus getHttpStatus() {
        return httpStatus;
    }

}
