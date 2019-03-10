/**
 * neutrinoapi
 *
 * This file was automatically generated for NeutrinoAPI by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of Blacklist
 */
class Blacklist extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.isListed = this.constructor.getValue(obj.isListed);
        this.listHost = this.constructor.getValue(obj.listHost);
        this.listRating = this.constructor.getValue(obj.listRating);
        this.listName = this.constructor.getValue(obj.listName);
        this.txtRecord = this.constructor.getValue(obj.txtRecord);
        this.returnCode = this.constructor.getValue(obj.returnCode);
        this.responseTime = this.constructor.getValue(obj.responseTime);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'isListed', realName: 'isListed' },
            { name: 'listHost', realName: 'listHost' },
            { name: 'listRating', realName: 'listRating' },
            { name: 'listName', realName: 'listName' },
            { name: 'txtRecord', realName: 'txtRecord' },
            { name: 'returnCode', realName: 'returnCode' },
            { name: 'responseTime', realName: 'responseTime' },
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

module.exports = Blacklist;
