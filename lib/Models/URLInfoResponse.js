/**
 * neutrinoapi
 *
 * This file was automatically generated for NeutrinoAPI by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of URLInfoResponse
 */
class URLInfoResponse extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.httpStatusMessage = this.constructor.getValue(obj.httpStatusMessage);
        this.serverRegion = this.constructor.getValue(obj.serverRegion);
        this.query = this.constructor.getValue(obj.query);
        this.serverName = this.constructor.getValue(obj.serverName);
        this.urlPort = this.constructor.getValue(obj.urlPort);
        this.serverCountry = this.constructor.getValue(obj.serverCountry);
        this.real = this.constructor.getValue(obj.real);
        this.serverCity = this.constructor.getValue(obj.serverCity);
        this.urlPath = this.constructor.getValue(obj.urlPath);
        this.url = this.constructor.getValue(obj.url);
        this.valid = this.constructor.getValue(obj.valid);
        this.serverHostname = this.constructor.getValue(obj.serverHostname);
        this.loadTime = this.constructor.getValue(obj.loadTime);
        this.httpOk = this.constructor.getValue(obj.httpOk);
        this.contentSize = this.constructor.getValue(obj.contentSize);
        this.httpStatus = this.constructor.getValue(obj.httpStatus);
        this.serverCountryCode = this.constructor.getValue(obj.serverCountryCode);
        this.contentEncoding = this.constructor.getValue(obj.contentEncoding);
        this.serverIp = this.constructor.getValue(obj.serverIp);
        this.urlProtocol = this.constructor.getValue(obj.urlProtocol);
        this.contentType = this.constructor.getValue(obj.contentType);
        this.httpRedirect = this.constructor.getValue(obj.httpRedirect);
        this.content = this.constructor.getValue(obj.content);
        this.isTimeout = this.constructor.getValue(obj.isTimeout);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'httpStatusMessage', realName: 'httpStatusMessage' },
            { name: 'serverRegion', realName: 'serverRegion' },
            { name: 'query', realName: 'query' },
            { name: 'serverName', realName: 'serverName' },
            { name: 'urlPort', realName: 'urlPort' },
            { name: 'serverCountry', realName: 'serverCountry' },
            { name: 'real', realName: 'real' },
            { name: 'serverCity', realName: 'serverCity' },
            { name: 'urlPath', realName: 'urlPath' },
            { name: 'url', realName: 'url' },
            { name: 'valid', realName: 'valid' },
            { name: 'serverHostname', realName: 'serverHostname' },
            { name: 'loadTime', realName: 'loadTime' },
            { name: 'httpOk', realName: 'httpOk' },
            { name: 'contentSize', realName: 'contentSize' },
            { name: 'httpStatus', realName: 'httpStatus' },
            { name: 'serverCountryCode', realName: 'serverCountryCode' },
            { name: 'contentEncoding', realName: 'contentEncoding' },
            { name: 'serverIp', realName: 'serverIp' },
            { name: 'urlProtocol', realName: 'urlProtocol' },
            { name: 'contentType', realName: 'contentType' },
            { name: 'httpRedirect', realName: 'httpRedirect' },
            { name: 'content', realName: 'content' },
            { name: 'isTimeout', realName: 'isTimeout' },
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

module.exports = URLInfoResponse;
