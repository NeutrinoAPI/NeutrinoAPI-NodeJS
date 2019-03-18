/**
 * neutrinoapi
 *
 * This file was automatically generated for NeutrinoAPI by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of HLRLookupResponse
 */
class HLRLookupResponse extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.numberValid = this.constructor.getValue(obj.numberValid);
        this.internationalCallingCode = this.constructor.getValue(obj.internationalCallingCode);
        this.mnc = this.constructor.getValue(obj.mnc);
        this.numberType = this.constructor.getValue(obj.numberType);
        this.hlrValid = this.constructor.getValue(obj.hlrValid);
        this.hlrStatus = this.constructor.getValue(obj.hlrStatus);
        this.portedNetwork = this.constructor.getValue(obj.portedNetwork);
        this.imsi = this.constructor.getValue(obj.imsi);
        this.mcc = this.constructor.getValue(obj.mcc);
        this.internationalNumber = this.constructor.getValue(obj.internationalNumber);
        this.localNumber = this.constructor.getValue(obj.localNumber);
        this.countryCode = this.constructor.getValue(obj.countryCode);
        this.isPorted = this.constructor.getValue(obj.isPorted);
        this.msin = this.constructor.getValue(obj.msin);
        this.location = this.constructor.getValue(obj.location);
        this.originNetwork = this.constructor.getValue(obj.originNetwork);
        this.isMobile = this.constructor.getValue(obj.isMobile);
        this.isRoaming = this.constructor.getValue(obj.isRoaming);
        this.country = this.constructor.getValue(obj.country);
        this.countryCode3 = this.constructor.getValue(obj.countryCode3);
        this.currencyCode = this.constructor.getValue(obj.currencyCode);
        this.roamingCountryCode = this.constructor.getValue(obj.roamingCountryCode);
        this.msc = this.constructor.getValue(obj.msc);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'numberValid', realName: 'numberValid' },
            { name: 'internationalCallingCode', realName: 'internationalCallingCode' },
            { name: 'mnc', realName: 'mnc' },
            { name: 'numberType', realName: 'numberType' },
            { name: 'hlrValid', realName: 'hlrValid' },
            { name: 'hlrStatus', realName: 'hlrStatus' },
            { name: 'portedNetwork', realName: 'portedNetwork' },
            { name: 'imsi', realName: 'imsi' },
            { name: 'mcc', realName: 'mcc' },
            { name: 'internationalNumber', realName: 'internationalNumber' },
            { name: 'localNumber', realName: 'localNumber' },
            { name: 'countryCode', realName: 'countryCode' },
            { name: 'isPorted', realName: 'isPorted' },
            { name: 'msin', realName: 'msin' },
            { name: 'location', realName: 'location' },
            { name: 'originNetwork', realName: 'originNetwork' },
            { name: 'isMobile', realName: 'isMobile' },
            { name: 'isRoaming', realName: 'isRoaming' },
            { name: 'country', realName: 'country' },
            { name: 'countryCode3', realName: 'countryCode3' },
            { name: 'currencyCode', realName: 'currencyCode' },
            { name: 'roamingCountryCode', realName: 'roamingCountryCode' },
            { name: 'msc', realName: 'msc' },
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

module.exports = HLRLookupResponse;
