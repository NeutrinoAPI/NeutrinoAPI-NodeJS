/**
 * neutrinoapi
 *
 * This file was automatically generated for NeutrinoAPI by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of IPBlocklistResponse
 */
class IPBlocklistResponse extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.ip = this.constructor.getValue(obj.ip);
        this.isBot = this.constructor.getValue(obj.isBot);
        this.isExploitBot = this.constructor.getValue(obj.isExploitBot);
        this.isMalware = this.constructor.getValue(obj.isMalware);
        this.isSpider = this.constructor.getValue(obj.isSpider);
        this.isDshield = this.constructor.getValue(obj.isDshield);
        this.listCount = this.constructor.getValue(obj.listCount);
        this.isProxy = this.constructor.getValue(obj.isProxy);
        this.isHijacked = this.constructor.getValue(obj.isHijacked);
        this.isTor = this.constructor.getValue(obj.isTor);
        this.isSpyware = this.constructor.getValue(obj.isSpyware);
        this.isSpamBot = this.constructor.getValue(obj.isSpamBot);
        this.isListed = this.constructor.getValue(obj.isListed);
        this.isVpn = this.constructor.getValue(obj.isVpn);
        this.lastSeen = this.constructor.getValue(obj.lastSeen);
        this.blocklists = this.constructor.getValue(obj.blocklists);
        this.sensors = this.constructor.getValue(obj.sensors);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'ip', realName: 'ip' },
            { name: 'isBot', realName: 'isBot' },
            { name: 'isExploitBot', realName: 'isExploitBot' },
            { name: 'isMalware', realName: 'isMalware' },
            { name: 'isSpider', realName: 'isSpider' },
            { name: 'isDshield', realName: 'isDshield' },
            { name: 'listCount', realName: 'listCount' },
            { name: 'isProxy', realName: 'isProxy' },
            { name: 'isHijacked', realName: 'isHijacked' },
            { name: 'isTor', realName: 'isTor' },
            { name: 'isSpyware', realName: 'isSpyware' },
            { name: 'isSpamBot', realName: 'isSpamBot' },
            { name: 'isListed', realName: 'isListed' },
            { name: 'isVpn', realName: 'isVpn' },
            { name: 'lastSeen', realName: 'lastSeen' },
            { name: 'blocklists', realName: 'blocklists', array: true },
            { name: 'sensors', realName: 'sensors', array: true },
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

module.exports = IPBlocklistResponse;
