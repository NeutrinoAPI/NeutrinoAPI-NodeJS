/**
  * @module neutrinoapi
  *
  * The general-purpose API
  */

'use strict';

const Configuration = require('./configuration');
const Imaging = require('./Controllers/Imaging');
const Telephony = require('./Controllers/Telephony');
const DataTools = require('./Controllers/DataTools');
const SecurityAndNetworking = require('./Controllers/SecurityAndNetworking');
const Geolocation = require('./Controllers/Geolocation');
const ECommerce = require('./Controllers/ECommerce');
const BINLookupResponse = require('./Models/BINLookupResponse');
const VerifySecurityCodeResponse = require('./Models/VerifySecurityCodeResponse');
const PhoneVerifyResponse = require('./Models/PhoneVerifyResponse');
const HostReputationResponse = require('./Models/HostReputationResponse');
const SMSVerifyResponse = require('./Models/SMSVerifyResponse');
const Blacklist = require('./Models/Blacklist');
const GeocodeReverseResponse = require('./Models/GeocodeReverseResponse');
const PhonePlaybackResponse = require('./Models/PhonePlaybackResponse');
const BadWordFilterResponse = require('./Models/BadWordFilterResponse');
const GeocodeAddressResponse = require('./Models/GeocodeAddressResponse');
const ConvertResponse = require('./Models/ConvertResponse');
const Location = require('./Models/Location');
const HLRLookupResponse = require('./Models/HLRLookupResponse');
const HTMLExtractResponse = require('./Models/HTMLExtractResponse');
const URLInfoResponse = require('./Models/URLInfoResponse');
const EmailValidateResponse = require('./Models/EmailValidateResponse');
const PhoneValidateResponse = require('./Models/PhoneValidateResponse');
const IPInfoResponse = require('./Models/IPInfoResponse');
const IPBlocklistResponse = require('./Models/IPBlocklistResponse');
const EmailVerifyResponse = require('./Models/EmailVerifyResponse');
const IPProbeResponse = require('./Models/IPProbeResponse');
const UserAgentInfoResponse = require('./Models/UserAgentInfoResponse');
const APIErrorException = require('./Exceptions/APIErrorException');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of neutrinoapi
    Configuration,
    // controllers of neutrinoapi
    Imaging,
    Telephony,
    DataTools,
    SecurityAndNetworking,
    Geolocation,
    ECommerce,
    // models of neutrinoapi
    BINLookupResponse,
    VerifySecurityCodeResponse,
    PhoneVerifyResponse,
    HostReputationResponse,
    SMSVerifyResponse,
    Blacklist,
    GeocodeReverseResponse,
    PhonePlaybackResponse,
    BadWordFilterResponse,
    GeocodeAddressResponse,
    ConvertResponse,
    Location,
    HLRLookupResponse,
    HTMLExtractResponse,
    URLInfoResponse,
    EmailValidateResponse,
    PhoneValidateResponse,
    IPInfoResponse,
    IPBlocklistResponse,
    EmailVerifyResponse,
    IPProbeResponse,
    UserAgentInfoResponse,
    // exceptions of neutrinoapi
    APIErrorException,
    APIException,
};

module.exports = initializer;
