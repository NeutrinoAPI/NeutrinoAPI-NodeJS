/**
 * neutrinoapi
 *
 * This file was automatically generated for NeutrinoAPI by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const HLRLookupResponse = require('../lib/Models/HLRLookupResponse');
const URLInfoResponse = require('../lib/Models/URLInfoResponse');
const IPProbeResponse = require('../lib/Models/IPProbeResponse');
const BrowserBotResponse = require('../lib/Models/BrowserBotResponse');
const BINLookupResponse = require('../lib/Models/BINLookupResponse');
const GeocodeReverseResponse = require('../lib/Models/GeocodeReverseResponse');
const Location = require('../lib/Models/Location');
const PhoneValidateResponse = require('../lib/Models/PhoneValidateResponse');
const IPInfoResponse = require('../lib/Models/IPInfoResponse');
const HostReputationResponse = require('../lib/Models/HostReputationResponse');
const IPBlocklistResponse = require('../lib/Models/IPBlocklistResponse');
const Blacklist = require('../lib/Models/Blacklist');
const ConvertResponse = require('../lib/Models/ConvertResponse');
const EmailVerifyResponse = require('../lib/Models/EmailVerifyResponse');
const EmailValidateResponse = require('../lib/Models/EmailValidateResponse');
const UserAgentInfoResponse = require('../lib/Models/UserAgentInfoResponse');
const GeocodeAddressResponse = require('../lib/Models/GeocodeAddressResponse');
const PhoneVerifyResponse = require('../lib/Models/PhoneVerifyResponse');
const SMSVerifyResponse = require('../lib/Models/SMSVerifyResponse');
const BadWordFilterResponse = require('../lib/Models/BadWordFilterResponse');
const VerifySecurityCodeResponse = require('../lib/Models/VerifySecurityCodeResponse');
const SMSMessageResponse = require('../lib/Models/SMSMessageResponse');
const PhonePlaybackResponse = require('../lib/Models/PhonePlaybackResponse');
const APIErrorException = require('../lib/Exceptions/APIErrorException');

const classMap = {
    HLRLookupResponse,
    URLInfoResponse,
    IPProbeResponse,
    BrowserBotResponse,
    BINLookupResponse,
    GeocodeReverseResponse,
    Location,
    PhoneValidateResponse,
    IPInfoResponse,
    HostReputationResponse,
    IPBlocklistResponse,
    Blacklist,
    ConvertResponse,
    EmailVerifyResponse,
    EmailValidateResponse,
    UserAgentInfoResponse,
    GeocodeAddressResponse,
    PhoneVerifyResponse,
    SMSVerifyResponse,
    BadWordFilterResponse,
    VerifySecurityCodeResponse,
    SMSMessageResponse,
    PhonePlaybackResponse,
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
