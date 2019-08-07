/**
 * neutrinoapi
 *
 * This file was automatically generated for NeutrinoAPI by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const _modelFactory = require('../ModelFactory');
const _objectMapper = require('../ObjectMapper');

const _objectMapperInstance = new _objectMapper();

class BaseController {
    /**
     * Get ObjectMapper instance
     * @return {ObjectMapper} Shared instance
     */
    static getObjectMapper() {
        return _objectMapperInstance;
    }

    /**
     * Global error handling
     * @param   {HttpContext}   _context   HttpContext containing request and response objects
     * @callback    Callback function which returns error, response, context
     */
    static validateResponse(_context) {
        const errorObj = {
            errorMessage: '',
            errorCode: '',
            errorResponse: _context.response.body,
        };
        const returnObj = {
            error: errorObj,
            response: null,
            context: _context,
        };

        let response;
        try {
            response = JSON.parse(_context.response.body);
        } catch (ex) {
            response = JSON.parse(JSON.stringify(_context.response.body));
        }


        if (_context.response.statusCode === 400) {
            returnObj.error.errorMessage = 'Your API request has been rejected. Check error code for details';
            returnObj.error.errorCode = 400;
            let mappedObject;
            if (response === null || response === undefined) {
                mappedObject = _modelFactory.getInstance('APIErrorException');
            } else {
                mappedObject = this.getObjectMapper().mapObject(response, 'APIErrorException');
            }
            mappedObject.reason = 'Your API request has been rejected. Check error code for details';
            mappedObject.context = _context;
            returnObj.error.errorResponse = mappedObject;
        } else if (_context.response.statusCode === 403) {
            returnObj.error.errorMessage = 'You have failed to authenticate';
            returnObj.error.errorCode = 403;
            let mappedObject;
            if (response === null || response === undefined) {
                mappedObject = _modelFactory.getInstance('APIErrorException');
            } else {
                mappedObject = this.getObjectMapper().mapObject(response, 'APIErrorException');
            }
            mappedObject.reason = 'You have failed to authenticate';
            mappedObject.context = _context;
            returnObj.error.errorResponse = mappedObject;
        } else if (_context.response.statusCode === 500) {
            returnObj.error.errorMessage = 'We messed up, sorry! Your request has caused a fatal exception';
            returnObj.error.errorCode = 500;
            let mappedObject;
            if (response === null || response === undefined) {
                mappedObject = _modelFactory.getInstance('APIErrorException');
            } else {
                mappedObject = this.getObjectMapper().mapObject(response, 'APIErrorException');
            }
            mappedObject.reason = 'We messed up, sorry! Your request has caused a fatal exception';
            mappedObject.context = _context;
            returnObj.error.errorResponse = mappedObject;
        } else {
            returnObj.error.errorMessage = 'We messed up, sorry! Your request has caused an error';
            returnObj.error.errorCode = 0;
            let mappedObject;
            if (response === null || response === undefined) {
                mappedObject = _modelFactory.getInstance('APIErrorException');
            } else {
                mappedObject = this.getObjectMapper().mapObject(response, 'APIErrorException');
            }
            mappedObject.reason = 'We messed up, sorry! Your request has caused an error';
            mappedObject.context = _context;
            returnObj.error.errorResponse = mappedObject;
        }

        return returnObj;
    }
}

module.exports = BaseController;
