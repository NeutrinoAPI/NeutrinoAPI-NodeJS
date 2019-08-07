/**
 * neutrinoapi
 *
 * This file was automatically generated for NeutrinoAPI by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of GeocodeReverseResponse
 */
class GeocodeReverseResponse extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.country = this.constructor.getValue(obj.country);
        this.found = this.constructor.getValue(obj.found);
        this.address = this.constructor.getValue(obj.address);
        this.city = this.constructor.getValue(obj.city);
        this.countryCode = this.constructor.getValue(obj.countryCode);
        this.postalCode = this.constructor.getValue(obj.postalCode);
        this.state = this.constructor.getValue(obj.state);
        this.addressComponents = this.constructor.getValue(obj.addressComponents);
        this.countryCode3 = this.constructor.getValue(obj.countryCode3);
        this.currencyCode = this.constructor.getValue(obj.currencyCode);
        this.locationType = this.constructor.getValue(obj.locationType);
        this.locationTags = this.constructor.getValue(obj.locationTags);
        this.latitude = this.constructor.getValue(obj.latitude);
        this.longitude = this.constructor.getValue(obj.longitude);
        this.timezone = this.constructor.getValue(obj.timezone);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'country', realName: 'country' },
            { name: 'found', realName: 'found' },
            { name: 'address', realName: 'address' },
            { name: 'city', realName: 'city' },
            { name: 'countryCode', realName: 'countryCode' },
            { name: 'postalCode', realName: 'postalCode' },
            { name: 'state', realName: 'state' },
            { name: 'addressComponents', realName: 'addressComponents' },
            { name: 'countryCode3', realName: 'countryCode3' },
            { name: 'currencyCode', realName: 'currencyCode' },
            { name: 'locationType', realName: 'locationType' },
            { name: 'locationTags', realName: 'locationTags', array: true },
            { name: 'latitude', realName: 'latitude' },
            { name: 'longitude', realName: 'longitude' },
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

module.exports = GeocodeReverseResponse;
