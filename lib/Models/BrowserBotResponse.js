/**
 * neutrinoapi
 *
 * This file was automatically generated for NeutrinoAPI by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of BrowserBotResponse
 */
class BrowserBotResponse extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.url = this.constructor.getValue(obj.url);
        this.content = this.constructor.getValue(obj.content);
        this.mimeType = this.constructor.getValue(obj.mimeType);
        this.title = this.constructor.getValue(obj.title);
        this.isError = this.constructor.getValue(obj.isError);
        this.isTimeout = this.constructor.getValue(obj.isTimeout);
        this.errorMessage = this.constructor.getValue(obj.errorMessage);
        this.httpStatusCode = this.constructor.getValue(obj.httpStatusCode);
        this.httpStatusMessage = this.constructor.getValue(obj.httpStatusMessage);
        this.isHttpOk = this.constructor.getValue(obj.isHttpOk);
        this.isHttpRedirect = this.constructor.getValue(obj.isHttpRedirect);
        this.httpRedirectUrl = this.constructor.getValue(obj.httpRedirectUrl);
        this.serverIp = this.constructor.getValue(obj.serverIp);
        this.loadTime = this.constructor.getValue(obj.loadTime);
        this.responseHeaders = this.constructor.getValue(obj.responseHeaders);
        this.isSecure = this.constructor.getValue(obj.isSecure);
        this.securityDetails = this.constructor.getValue(obj.securityDetails);
        this.elements = this.constructor.getValue(obj.elements);
        this.execResults = this.constructor.getValue(obj.execResults);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'url', realName: 'url' },
            { name: 'content', realName: 'content' },
            { name: 'mimeType', realName: 'mimeType' },
            { name: 'title', realName: 'title' },
            { name: 'isError', realName: 'isError' },
            { name: 'isTimeout', realName: 'isTimeout' },
            { name: 'errorMessage', realName: 'errorMessage' },
            { name: 'httpStatusCode', realName: 'httpStatusCode' },
            { name: 'httpStatusMessage', realName: 'httpStatusMessage' },
            { name: 'isHttpOk', realName: 'isHttpOk' },
            { name: 'isHttpRedirect', realName: 'isHttpRedirect' },
            { name: 'httpRedirectUrl', realName: 'httpRedirectUrl' },
            { name: 'serverIp', realName: 'serverIp' },
            { name: 'loadTime', realName: 'loadTime' },
            { name: 'responseHeaders', realName: 'responseHeaders' },
            { name: 'isSecure', realName: 'isSecure' },
            { name: 'securityDetails', realName: 'securityDetails' },
            { name: 'elements', realName: 'elements', array: true },
            { name: 'execResults', realName: 'execResults', array: true },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {};
    }
}

module.exports = BrowserBotResponse;
