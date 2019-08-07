/**
 * neutrinoapi
 *
 * This file was automatically generated for NeutrinoAPI by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of ConvertResponse
 */
class ConvertResponse extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.valid = this.constructor.getValue(obj.valid);
        this.result = this.constructor.getValue(obj.result);
        this.fromValue = this.constructor.getValue(obj.fromValue);
        this.toType = this.constructor.getValue(obj.toType);
        this.fromType = this.constructor.getValue(obj.fromType);
        this.resultFloat = this.constructor.getValue(obj.resultFloat);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'valid', realName: 'valid' },
            { name: 'result', realName: 'result' },
            { name: 'fromValue', realName: 'fromValue' },
            { name: 'toType', realName: 'toType' },
            { name: 'fromType', realName: 'fromType' },
            { name: 'resultFloat', realName: 'resultFloat' },
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

module.exports = ConvertResponse;
