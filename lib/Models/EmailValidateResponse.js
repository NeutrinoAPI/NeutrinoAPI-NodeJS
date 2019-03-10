/**
 * neutrinoapi
 *
 * This file was automatically generated for NeutrinoAPI by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of EmailValidateResponse
 */
class EmailValidateResponse extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.valid = this.constructor.getValue(obj.valid);
        this.syntaxError = this.constructor.getValue(obj.syntaxError);
        this.domain = this.constructor.getValue(obj.domain);
        this.domainError = this.constructor.getValue(obj.domainError);
        this.isFreemail = this.constructor.getValue(obj.isFreemail);
        this.email = this.constructor.getValue(obj.email);
        this.isDisposable = this.constructor.getValue(obj.isDisposable);
        this.typosFixed = this.constructor.getValue(obj.typosFixed);
        this.isPersonal = this.constructor.getValue(obj.isPersonal);
        this.provider = this.constructor.getValue(obj.provider);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'valid', realName: 'valid' },
            { name: 'syntaxError', realName: 'syntaxError' },
            { name: 'domain', realName: 'domain' },
            { name: 'domainError', realName: 'domainError' },
            { name: 'isFreemail', realName: 'isFreemail' },
            { name: 'email', realName: 'email' },
            { name: 'isDisposable', realName: 'isDisposable' },
            { name: 'typosFixed', realName: 'typosFixed' },
            { name: 'isPersonal', realName: 'isPersonal' },
            { name: 'provider', realName: 'provider' },
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

module.exports = EmailValidateResponse;
