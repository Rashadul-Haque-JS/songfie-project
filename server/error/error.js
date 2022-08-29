class songfieError extends Error { }

class InvalidCredentials extends songfieError {
    constructor() {
        super();
        this.message = `Invalid credentials`;
        this.errorCode = 403;
    }
}

class Unauthorized extends songfieError {
    constructor() {
        super();
        this.message = `Unauthorized`;
        this.errorCode = 401;
    }
}

class Forbidden extends songfieError {
    constructor() {
        super();
        this.message = `Forbidden`;
        this.errorCode = 403;
    }
}

class TokenExpired extends songfieError {
    constructor() {
        super();
        this.message = `Token expired, please log in again`;
        this.errorCode = 401;
    }
}

class TaskNotFound extends songfieError {
    constructor() {
        super();
        this.message = `Task with data provided not found`;
        this.errorCode = 404;
    }
}

module.exports = {
    songfieError,
    InvalidCredentials,
    Unauthorized,
    TokenExpired,
    TaskNotFound,
    Forbidden,
};
