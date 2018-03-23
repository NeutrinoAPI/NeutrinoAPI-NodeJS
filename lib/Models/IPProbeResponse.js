/**
 * neutrinoapi
 *
 * This file was automatically generated for NeutrinoAPI by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of IPProbeResponse
 */
class IPProbeResponse extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.valid = this.constructor.getValue(obj.valid);
        this.country = this.constructor.getValue(obj.country);
        this.providerType = this.constructor.getValue(obj.providerType);
        this.countryCode = this.constructor.getValue(obj.countryCode);
        this.hostname = this.constructor.getValue(obj.hostname);
        this.providerDomain = this.constructor.getValue(obj.providerDomain);
        this.city = this.constructor.getValue(obj.city);
        this.providerWebsite = this.constructor.getValue(obj.providerWebsite);
        this.ip = this.constructor.getValue(obj.ip);
        this.region = this.constructor.getValue(obj.region);
        this.providerDescription = this.constructor.getValue(obj.providerDescription);
        this.continentCode = this.constructor.getValue(obj.continentCode);
        this.isHosting = this.constructor.getValue(obj.isHosting);
        this.isIsp = this.constructor.getValue(obj.isIsp);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'valid', realName: 'valid' },
            { name: 'country', realName: 'country' },
            { name: 'providerType', realName: 'providerType' },
            { name: 'countryCode', realName: 'countryCode' },
            { name: 'hostname', realName: 'hostname' },
            { name: 'providerDomain', realName: 'providerDomain' },
            { name: 'city', realName: 'city' },
            { name: 'providerWebsite', realName: 'providerWebsite' },
            { name: 'ip', realName: 'ip' },
            { name: 'region', realName: 'region' },
            { name: 'providerDescription', realName: 'providerDescription' },
            { name: 'continentCode', realName: 'continentCode' },
            { name: 'isHosting', realName: 'isHosting' },
            { name: 'isIsp', realName: 'isIsp' },
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

module.exports = IPProbeResponse;
