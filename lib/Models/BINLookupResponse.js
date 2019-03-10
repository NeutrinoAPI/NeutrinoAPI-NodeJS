/**
 * neutrinoapi
 *
 * This file was automatically generated for NeutrinoAPI by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of BINLookupResponse
 */
class BINLookupResponse extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.country = this.constructor.getValue(obj.country);
        this.ipCity = this.constructor.getValue(obj.ipCity);
        this.ipMatchesBin = this.constructor.getValue(obj.ipMatchesBin);
        this.cardType = this.constructor.getValue(obj.cardType);
        this.cardCategory = this.constructor.getValue(obj.cardCategory);
        this.ipCountryCode = this.constructor.getValue(obj.ipCountryCode);
        this.ipCountry = this.constructor.getValue(obj.ipCountry);
        this.issuer = this.constructor.getValue(obj.issuer);
        this.ipBlocklisted = this.constructor.getValue(obj.ipBlocklisted);
        this.valid = this.constructor.getValue(obj.valid);
        this.ipBlocklists = this.constructor.getValue(obj.ipBlocklists);
        this.issuerWebsite = this.constructor.getValue(obj.issuerWebsite);
        this.countryCode = this.constructor.getValue(obj.countryCode);
        this.ipRegion = this.constructor.getValue(obj.ipRegion);
        this.cardBrand = this.constructor.getValue(obj.cardBrand);
        this.issuerPhone = this.constructor.getValue(obj.issuerPhone);
        this.countryCode3 = this.constructor.getValue(obj.countryCode3);
        this.currencyCode = this.constructor.getValue(obj.currencyCode);
        this.ipCountryCode3 = this.constructor.getValue(obj.ipCountryCode3);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'country', realName: 'country' },
            { name: 'ipCity', realName: 'ipCity' },
            { name: 'ipMatchesBin', realName: 'ipMatchesBin' },
            { name: 'cardType', realName: 'cardType' },
            { name: 'cardCategory', realName: 'cardCategory' },
            { name: 'ipCountryCode', realName: 'ipCountryCode' },
            { name: 'ipCountry', realName: 'ipCountry' },
            { name: 'issuer', realName: 'issuer' },
            { name: 'ipBlocklisted', realName: 'ipBlocklisted' },
            { name: 'valid', realName: 'valid' },
            { name: 'ipBlocklists', realName: 'ipBlocklists', array: true },
            { name: 'issuerWebsite', realName: 'issuerWebsite' },
            { name: 'countryCode', realName: 'countryCode' },
            { name: 'ipRegion', realName: 'ipRegion' },
            { name: 'cardBrand', realName: 'cardBrand' },
            { name: 'issuerPhone', realName: 'issuerPhone' },
            { name: 'countryCode3', realName: 'countryCode3' },
            { name: 'currencyCode', realName: 'currencyCode' },
            { name: 'ipCountryCode3', realName: 'ipCountryCode3' },
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

module.exports = BINLookupResponse;
