/**
  * @module neutrinoapi
  *
  * The general-purpose API
  */

'use strict';

const Configuration = require('./configuration');
const Environments = require('./Environments');
const Imaging = require('./Controllers/Imaging');
const Telephony = require('./Controllers/Telephony');
const DataTools = require('./Controllers/DataTools');
const SecurityAndNetworking = require('./Controllers/SecurityAndNetworking');
const Geolocation = require('./Controllers/Geolocation');
const ECommerce = require('./Controllers/ECommerce');
const WWW = require('./Controllers/WWW');
const HLRLookupResponse = require('./Models/HLRLookupResponse');
const URLInfoResponse = require('./Models/URLInfoResponse');
const IPProbeResponse = require('./Models/IPProbeResponse');
const BrowserBotResponse = require('./Models/BrowserBotResponse');
const BINLookupResponse = require('./Models/BINLookupResponse');
const GeocodeReverseResponse = require('./Models/GeocodeReverseResponse');
const Location = require('./Models/Location');
const PhoneValidateResponse = require('./Models/PhoneValidateResponse');
const IPInfoResponse = require('./Models/IPInfoResponse');
const HostReputationResponse = require('./Models/HostReputationResponse');
const IPBlocklistResponse = require('./Models/IPBlocklistResponse');
const Blacklist = require('./Models/Blacklist');
const ConvertResponse = require('./Models/ConvertResponse');
const EmailVerifyResponse = require('./Models/EmailVerifyResponse');
const EmailValidateResponse = require('./Models/EmailValidateResponse');
const UserAgentInfoResponse = require('./Models/UserAgentInfoResponse');
const GeocodeAddressResponse = require('./Models/GeocodeAddressResponse');
const PhoneVerifyResponse = require('./Models/PhoneVerifyResponse');
const SMSVerifyResponse = require('./Models/SMSVerifyResponse');
const BadWordFilterResponse = require('./Models/BadWordFilterResponse');
const VerifySecurityCodeResponse = require('./Models/VerifySecurityCodeResponse');
const SMSMessageResponse = require('./Models/SMSMessageResponse');
const PhonePlaybackResponse = require('./Models/PhonePlaybackResponse');
const APIErrorException = require('./Exceptions/APIErrorException');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of neutrinoapi
    Configuration,
    Environments,
    // controllers of neutrinoapi
    Imaging,
    Telephony,
    DataTools,
    SecurityAndNetworking,
    Geolocation,
    ECommerce,
    WWW,
    // models of neutrinoapi
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
    // exceptions of neutrinoapi
    APIErrorException,
    APIException,
};

module.exports = initializer;
