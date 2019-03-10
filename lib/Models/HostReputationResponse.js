/**
 * neutrinoapi
 *
 * This file was automatically generated for NeutrinoAPI by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of HostReputationResponse
 */
class HostReputationResponse extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.isListed = this.constructor.getValue(obj.isListed);
        this.lists = this.constructor.getValue(obj.lists);
        this.listCount = this.constructor.getValue(obj.listCount);
        this.host = this.constructor.getValue(obj.host);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'isListed', realName: 'isListed' },
            { name: 'lists', realName: 'lists', array: true, type: 'Blacklist' },
            { name: 'listCount', realName: 'listCount' },
            { name: 'host', realName: 'host' },
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

module.exports = HostReputationResponse;
