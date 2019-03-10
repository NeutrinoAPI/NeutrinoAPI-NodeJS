/**
 * neutrinoapi
 *
 * This file was automatically generated for NeutrinoAPI by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BINLookupResponse = require('../lib/Models/BINLookupResponse');
const VerifySecurityCodeResponse = require('../lib/Models/VerifySecurityCodeResponse');
const PhoneVerifyResponse = require('../lib/Models/PhoneVerifyResponse');
const HostReputationResponse = require('../lib/Models/HostReputationResponse');
const SMSVerifyResponse = require('../lib/Models/SMSVerifyResponse');
const SMSMessageResponse = require('../lib/Models/SMSMessageResponse');
const Blacklist = require('../lib/Models/Blacklist');
const GeocodeReverseResponse = require('../lib/Models/GeocodeReverseResponse');
const PhonePlaybackResponse = require('../lib/Models/PhonePlaybackResponse');
const BadWordFilterResponse = require('../lib/Models/BadWordFilterResponse');
const GeocodeAddressResponse = require('../lib/Models/GeocodeAddressResponse');
const ConvertResponse = require('../lib/Models/ConvertResponse');
const Location = require('../lib/Models/Location');
const HLRLookupResponse = require('../lib/Models/HLRLookupResponse');
const URLInfoResponse = require('../lib/Models/URLInfoResponse');
const EmailValidateResponse = require('../lib/Models/EmailValidateResponse');
const PhoneValidateResponse = require('../lib/Models/PhoneValidateResponse');
const IPInfoResponse = require('../lib/Models/IPInfoResponse');
const IPBlocklistResponse = require('../lib/Models/IPBlocklistResponse');
const EmailVerifyResponse = require('../lib/Models/EmailVerifyResponse');
const IPProbeResponse = require('../lib/Models/IPProbeResponse');
const BrowserBotResponse = require('../lib/Models/BrowserBotResponse');
const UserAgentInfoResponse = require('../lib/Models/UserAgentInfoResponse');
const APIErrorException = require('../lib/Exceptions/APIErrorException');

const classMap = {
    BINLookupResponse,
    VerifySecurityCodeResponse,
    PhoneVerifyResponse,
    HostReputationResponse,
    SMSVerifyResponse,
    SMSMessageResponse,
    Blacklist,
    GeocodeReverseResponse,
    PhonePlaybackResponse,
    BadWordFilterResponse,
    GeocodeAddressResponse,
    ConvertResponse,
    Location,
    HLRLookupResponse,
    URLInfoResponse,
    EmailValidateResponse,
    PhoneValidateResponse,
    IPInfoResponse,
    IPBlocklistResponse,
    EmailVerifyResponse,
    IPProbeResponse,
    BrowserBotResponse,
    UserAgentInfoResponse,
    APIErrorException,
};

/**
 * Factory class to create instances of models and exception classes
 */
class ModelFactory {
    /**
     * Creates instance of a model class
     * @param  modelName  {string}  Name of class to instantiate
     * @returns  {object} Instance of the model class
     */
    static getInstance(modelName) {
        return new classMap[modelName]();
    }
}

module.exports = ModelFactory;
