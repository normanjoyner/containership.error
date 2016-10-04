'use strict';

const _ = require('lodash');
const error_types = require('./lib/error_types');

class CSError {
    constructor(type, message, options) {
        this.body = {};

        if(typeof type === 'number') {
            this.code = type;
        } else if (typeof type === 'string') {
            const error = error_types[type];
            if(error){
                this.code = error.code;
                this.body.message = error.message;
            } else {
                this.body.message = type;
            }
        } else if (typeof type === 'object' && type.message) {
            this.code = type.code || 400;
            this.body.message = type.message;
        }

        if(message) {
            if(typeof message === 'string') {
                this.body.message = message;
            } else if (typeof message === 'object' && message.message) {
                this.body.message = message.message;
            }
        }

        if(options) {
            this.body = _.defaults(this.body, options);
        }
    }
}

module.exports = CSError;