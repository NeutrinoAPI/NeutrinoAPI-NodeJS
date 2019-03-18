/**
  * @module neutrinoapi
  *
  * The general-purpose API
  */

'use strict';

const Configuration = require('./configuration');
const WWW = require('./Controllers/WWW');
const Imaging = require('./Controllers/Imaging');
const Telephony = require('./Controllers/Telephony');
const ECommerce = require('./Controllers/ECommerce');
const Geolocation = require('./Controllers/Geolocation');
const SecurityAndNetworking = require('./Controllers/SecurityAndNetworking');
const DataTools = require('./Controllers/DataTools');
const BadWordFilterResponse = require('./Models/BadWordFilterResponse');
const SMSVerifyResponse = require('./Models/SMSVerifyResponse');
const BrowserBotResponse = require('./Models/BrowserBotResponse');
const EmailValidateResponse = require('./Models/EmailValidateResponse');
const ConvertResponse = require('./Models/ConvertResponse');
const GeocodeAddressResponse = require('./Models/GeocodeAddressResponse');
const PhoneVerifyResponse = require('./Models/PhoneVerifyResponse');
const UserAgentInfoResponse = require('./Models/UserAgentInfoResponse');
const EmailVerifyResponse = require('./Models/EmailVerifyResponse');
const IPBlocklistResponse = require('./Models/IPBlocklistResponse');
const IPInfoResponse = require('./Models/IPInfoResponse');
const Blacklist = require('./Models/Blacklist');
const PhoneValidateResponse = require('./Models/PhoneValidateResponse');
const Location = require('./Models/Location');
const GeocodeReverseResponse = require('./Models/GeocodeReverseResponse');
const HostReputationResponse = require('./Models/HostReputationResponse');
const BINLookupResponse = require('./Models/BINLookupResponse');
const IPProbeResponse = require('./Models/IPProbeResponse');
const URLInfoResponse = require('./Models/URLInfoResponse');
const HLRLookupResponse = require('./Models/HLRLookupResponse');
const PhonePlaybackResponse = require('./Models/PhonePlaybackResponse');
const SMSMessageResponse = require('./Models/SMSMessageResponse');
const VerifySecurityCodeResponse = require('./Models/VerifySecurityCodeResponse');
const APIErrorException = require('./Exceptions/APIErrorException');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of neutrinoapi
    Configuration,
    // controllers of neutrinoapi
    WWW,
    Imaging,
    Telephony,
    ECommerce,
    Geolocation,
    SecurityAndNetworking,
    DataTools,
    // models of neutrinoapi
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
    // exceptions of neutrinoapi
    APIErrorException,
    APIException,
};

module.exports = initializer;
