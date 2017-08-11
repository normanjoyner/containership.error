module.exports = {
    'BAD_REQUEST': {
        code: 400,
        message: 'Bad request.'
    },
    'UNAUTHORIZED': {
        code: 401,
        message: 'Unauthorized.'
    },
    'PAYMENT_REQUIRED': {
        code: 402,
        message: 'Payment required.'
    },
    'FORBIDDEN': {
        code: 403,
        message: 'Forbidden.'
    },
    'NOT_FOUND': {
        code: 404,
        message: 'Not found.'
    },
    'INTERNAL_SERVER_ERROR': {
        code: 500,
        message: 'Internal server error.'
    },
    'PROXY_ERROR': {
        code: 500,
        message: 'Error proxying request to cluster.'
    }
}
