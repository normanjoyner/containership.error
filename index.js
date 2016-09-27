'use strict';

const _ = require('lodash');
const error_types = require('./lib/error_types');

class CSError {
    constructor(type, message, options) {
        this.body = {};

        if(typeof type === 'number'){
            this.code = type;
        }

        const error = error_types[type];

        if(error){
            this.code = error.code;
            this.body.message = error.message;
        }

        if(message) {
            this.body.message = message;
        }

        if(options) {
            this.body = _.defaults(this.body, options);
        }
    }
}

module.exports = CSError;