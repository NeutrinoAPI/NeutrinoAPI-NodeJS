/**
 * neutrinoapi
 *
 * This file was automatically generated for NeutrinoAPI by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of IPInfoResponse
 */
class IPInfoResponse extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.valid = this.constructor.getValue(obj.valid);
        this.country = this.constructor.getValue(obj.country);
        this.hostname = this.constructor.getValue(obj.hostname);
        this.city = this.constructor.getValue(obj.city);
        this.countryCode = this.constructor.getValue(obj.countryCode);
        this.latitude = this.constructor.getValue(obj.latitude);
        this.region = this.constructor.getValue(obj.region);
        this.longitude = this.constructor.getValue(obj.longitude);
        this.continentCode = this.constructor.getValue(obj.continentCode);
        this.ip = this.constructor.getValue(obj.ip);
        this.countryCode3 = this.constructor.getValue(obj.countryCode3);
        this.currencyCode = this.constructor.getValue(obj.currencyCode);
        this.hostDomain = this.constructor.getValue(obj.hostDomain);
        this.timezone = this.constructor.getValue(obj.timezone);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'valid', realName: 'valid' },
            { name: 'country', realName: 'country' },
            { name: 'hostname', realName: 'hostname' },
            { name: 'city', realName: 'city' },
            { name: 'countryCode', realName: 'countryCode' },
            { name: 'latitude', realName: 'latitude' },
            { name: 'region', realName: 'region' },
            { name: 'longitude', realName: 'longitude' },
            { name: 'continentCode', realName: 'continentCode' },
            { name: 'ip', realName: 'ip' },
            { name: 'countryCode3', realName: 'countryCode3' },
            { name: 'currencyCode', realName: 'currencyCode' },
            { name: 'hostDomain', realName: 'hostDomain' },
            { name: 'timezone', realName: 'timezone' },
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

module.exports = IPInfoResponse;
