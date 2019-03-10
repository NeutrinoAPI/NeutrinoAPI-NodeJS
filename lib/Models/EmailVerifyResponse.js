/**
 * neutrinoapi
 *
 * This file was automatically generated for NeutrinoAPI by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of EmailVerifyResponse
 */
class EmailVerifyResponse extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.valid = this.constructor.getValue(obj.valid);
        this.verified = this.constructor.getValue(obj.verified);
        this.email = this.constructor.getValue(obj.email);
        this.typosFixed = this.constructor.getValue(obj.typosFixed);
        this.syntaxError = this.constructor.getValue(obj.syntaxError);
        this.domainError = this.constructor.getValue(obj.domainError);
        this.domain = this.constructor.getValue(obj.domain);
        this.provider = this.constructor.getValue(obj.provider);
        this.isFreemail = this.constructor.getValue(obj.isFreemail);
        this.isDisposable = this.constructor.getValue(obj.isDisposable);
        this.isPersonal = this.constructor.getValue(obj.isPersonal);
        this.smtpStatus = this.constructor.getValue(obj.smtpStatus);
        this.smtpResponse = this.constructor.getValue(obj.smtpResponse);
        this.isCatchAll = this.constructor.getValue(obj.isCatchAll);
        this.isDeferred = this.constructor.getValue(obj.isDeferred);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'valid', realName: 'valid' },
            { name: 'verified', realName: 'verified' },
            { name: 'email', realName: 'email' },
            { name: 'typosFixed', realName: 'typosFixed' },
            { name: 'syntaxError', realName: 'syntaxError' },
            { name: 'domainError', realName: 'domainError' },
            { name: 'domain', realName: 'domain' },
            { name: 'provider', realName: 'provider' },
            { name: 'isFreemail', realName: 'isFreemail' },
            { name: 'isDisposable', realName: 'isDisposable' },
            { name: 'isPersonal', realName: 'isPersonal' },
            { name: 'smtpStatus', realName: 'smtpStatus' },
            { name: 'smtpResponse', realName: 'smtpResponse' },
            { name: 'isCatchAll', realName: 'isCatchAll' },
            { name: 'isDeferred', realName: 'isDeferred' },
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

module.exports = EmailVerifyResponse;
