/**
 * neutrinoapi
 *
 * This file was automatically generated for NeutrinoAPI by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of PhoneValidateResponse
 */
class PhoneValidateResponse extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.valid = this.constructor.getValue(obj.valid);
        this.internationalCallingCode = this.constructor.getValue(obj.internationalCallingCode);
        this.countryCode = this.constructor.getValue(obj.countryCode);
        this.location = this.constructor.getValue(obj.location);
        this.isMobile = this.constructor.getValue(obj.isMobile);
        this.type = this.constructor.getValue(obj.type);
        this.internationalNumber = this.constructor.getValue(obj.internationalNumber);
        this.localNumber = this.constructor.getValue(obj.localNumber);
        this.country = this.constructor.getValue(obj.country);
        this.countryCode3 = this.constructor.getValue(obj.countryCode3);
        this.currencyCode = this.constructor.getValue(obj.currencyCode);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'valid', realName: 'valid' },
            { name: 'internationalCallingCode', realName: 'internationalCallingCode' },
            { name: 'countryCode', realName: 'countryCode' },
            { name: 'location', realName: 'location' },
            { name: 'isMobile', realName: 'isMobile' },
            { name: 'type', realName: 'type' },
            { name: 'internationalNumber', realName: 'internationalNumber' },
            { name: 'localNumber', realName: 'localNumber' },
            { name: 'country', realName: 'country' },
            { name: 'countryCode3', realName: 'countryCode3' },
            { name: 'currencyCode', realName: 'currencyCode' },
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

module.exports = PhoneValidateResponse;
