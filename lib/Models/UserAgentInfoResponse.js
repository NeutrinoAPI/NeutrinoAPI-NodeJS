/**
 * neutrinoapi
 *
 * This file was automatically generated for NeutrinoAPI by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of UserAgentInfoResponse
 */
class UserAgentInfoResponse extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.mobileScreenWidth = this.constructor.getValue(obj.mobileScreenWidth);
        this.mobileBrand = this.constructor.getValue(obj.mobileBrand);
        this.mobileModel = this.constructor.getValue(obj.mobileModel);
        this.producer = this.constructor.getValue(obj.producer);
        this.browserName = this.constructor.getValue(obj.browserName);
        this.mobileScreenHeight = this.constructor.getValue(obj.mobileScreenHeight);
        this.isMobile = this.constructor.getValue(obj.isMobile);
        this.type = this.constructor.getValue(obj.type);
        this.version = this.constructor.getValue(obj.version);
        this.operatingSystem = this.constructor.getValue(obj.operatingSystem);
        this.mobileBrowser = this.constructor.getValue(obj.mobileBrowser);
        this.isAndroid = this.constructor.getValue(obj.isAndroid);
        this.isIos = this.constructor.getValue(obj.isIos);
        this.operatingSystemFamily = this.constructor.getValue(obj.operatingSystemFamily);
        this.operatingSystemVersion = this.constructor.getValue(obj.operatingSystemVersion);
        this.engine = this.constructor.getValue(obj.engine);
        this.engineVersion = this.constructor.getValue(obj.engineVersion);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'mobileScreenWidth', realName: 'mobileScreenWidth' },
            { name: 'mobileBrand', realName: 'mobileBrand' },
            { name: 'mobileModel', realName: 'mobileModel' },
            { name: 'producer', realName: 'producer' },
            { name: 'browserName', realName: 'browserName' },
            { name: 'mobileScreenHeight', realName: 'mobileScreenHeight' },
            { name: 'isMobile', realName: 'isMobile' },
            { name: 'type', realName: 'type' },
            { name: 'version', realName: 'version' },
            { name: 'operatingSystem', realName: 'operatingSystem' },
            { name: 'mobileBrowser', realName: 'mobileBrowser' },
            { name: 'isAndroid', realName: 'isAndroid' },
            { name: 'isIos', realName: 'isIos' },
            { name: 'operatingSystemFamily', realName: 'operatingSystemFamily' },
            { name: 'operatingSystemVersion', realName: 'operatingSystemVersion' },
            { name: 'engine', realName: 'engine' },
            { name: 'engineVersion', realName: 'engineVersion' },
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

module.exports = UserAgentInfoResponse;
