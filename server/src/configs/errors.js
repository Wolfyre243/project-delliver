// Custom errors to provide status codes too
class CustomError extends Error {
    constructor(statusCode, errorMessage) {
        super(errorMessage);
        this.status = typeof statusCode === 'number' ? statusCode : parseInt(statusCode);
    }
}

export const EMPTY_RESULT_ERROR = class EMPTY_RESULT_ERROR extends CustomError {};

export const UNIQUE_VIOLATION_ERROR = class UNIQUE_VIOLATION_ERROR extends CustomError {};

export const RAISE_EXCEPTION = class RAISE_EXCEPTION extends CustomError {};

export const INVALID_INPUT = class INVALID_INPUT extends CustomError {};

// See more: https://www.postgresql.org/docs/current/errcodes-appendix.html
export const SQL_ERROR_CODE = {
    // DUPLICATE_TABLE: '42P07',
    // UNDEFINED_TABLE: '42P01',
    INVALID_INPUT: '22P02',
    UNIQUE_VIOLATION: '23505',
    RAISE_EXCEPTION: 'P0001',
};