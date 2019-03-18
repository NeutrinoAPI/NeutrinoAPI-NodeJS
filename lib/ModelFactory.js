/**
 * neutrinoapi
 *
 * This file was automatically generated for NeutrinoAPI by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BadWordFilterResponse = require('../lib/Models/BadWordFilterResponse');
const SMSVerifyResponse = require('../lib/Models/SMSVerifyResponse');
const BrowserBotResponse = require('../lib/Models/BrowserBotResponse');
const EmailValidateResponse = require('../lib/Models/EmailValidateResponse');
const ConvertResponse = require('../lib/Models/ConvertResponse');
const GeocodeAddressResponse = require('../lib/Models/GeocodeAddressResponse');
const PhoneVerifyResponse = require('../lib/Models/PhoneVerifyResponse');
const UserAgentInfoResponse = require('../lib/Models/UserAgentInfoResponse');
const EmailVerifyResponse = require('../lib/Models/EmailVerifyResponse');
const IPBlocklistResponse = require('../lib/Models/IPBlocklistResponse');
const IPInfoResponse = require('../lib/Models/IPInfoResponse');
const Blacklist = require('../lib/Models/Blacklist');
const PhoneValidateResponse = require('../lib/Models/PhoneValidateResponse');
const Location = require('../lib/Models/Location');
const GeocodeReverseResponse = require('../lib/Models/GeocodeReverseResponse');
const HostReputationResponse = require('../lib/Models/HostReputationResponse');
const BINLookupResponse = require('../lib/Models/BINLookupResponse');
const IPProbeResponse = require('../lib/Models/IPProbeResponse');
const URLInfoResponse = require('../lib/Models/URLInfoResponse');
const HLRLookupResponse = require('../lib/Models/HLRLookupResponse');
const PhonePlaybackResponse = require('../lib/Models/PhonePlaybackResponse');
const SMSMessageResponse = require('../lib/Models/SMSMessageResponse');
const VerifySecurityCodeResponse = require('../lib/Models/VerifySecurityCodeResponse');
const APIErrorException = require('../lib/Exceptions/APIErrorException');

const classMap = {
    BadWordFilterResponse,
    SMSVerifyResponse,
    BrowserBotResponse,
    EmailValidateResponse,
    ConvertResponse,
    GeocodeAddressResponse,
    PhoneVerifyResponse,
    UserAgentInfoResponse,
    EmailVerifyResponse,
    IPBlocklistResponse,
    IPInfoResponse,
    Blacklist,
    PhoneValidateResponse,
    Location,
    GeocodeReverseResponse,
    HostReputationResponse,
    BINLookupResponse,
    IPProbeResponse,
    URLInfoResponse,
    HLRLookupResponse,
    PhonePlaybackResponse,
    SMSMessageResponse,
    VerifySecurityCodeResponse,
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
