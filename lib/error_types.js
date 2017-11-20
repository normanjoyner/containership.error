module.exports = {
    'BAD_REQUEST': {
        code: 400,
        message: 'Bad Request'
    },
    'UNAUTHORIZED': {
        code: 401,
        message: 'Unauthorized'
    },
    'PAYMENT_REQUIRED': {
        code: 402,
        message: 'Payment Required'
    },
    'FORBIDDEN': {
        code: 403,
        message: 'Forbidden'
    },
    'NOT_FOUND': {
        code: 404,
        message: 'Not Found'
    },
    'INTERNAL_SERVER_ERROR': {
        code: 500,
        message: 'Internal Server Error'
    },
    'PROXY_ERROR': {
        code: 500,
        message: 'Error proxying request to cluster'
    },
    'NOT_IMPLEMENTED': {
        code: 501,
        message: 'Not Implemented'
    },
    'BAD_GATEWAY': {
        code: 502,
        message: 'Bad Gateway'
    },
    'SERVICE_UNAVAILABLE': {
        code: 503,
        message: 'Service Unavailable'
    },
    'GATEWAY_TIMEOUT': {
        code: 504,
        message: 'Gateway Timeout'
    },
    'HTTP_VERSION_NOT_SUPPORTED': {
        code: 505,
        message: 'HTTP Version Not Supported'
    }
}
