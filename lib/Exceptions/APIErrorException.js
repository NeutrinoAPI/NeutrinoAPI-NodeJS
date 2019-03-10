/**
 * neutrinoapi
 *
 * This file was automatically generated for NeutrinoAPI by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const APIException = require('./APIException');

/**
 * Creates an instance of APIErrorException
 */
class APIErrorException extends APIException {
    /**
     * @constructor
     */
    constructor() {
        super();
        /**
         * API error code. If set and > 0 then an API error has occurred your request could not be
         * completed
         */
        this.apiError = null;

        /**
         * API error message
         */
        this.apiErrorMsg = null;
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'apiError', realName: 'apiError' },
            { name: 'apiErrorMsg', realName: 'apiErrorMsg' },
        ]);
    }
}

module.exports = APIErrorException;
