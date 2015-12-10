/**
 * NeutrinoAPILib
 *
 * This file was automatically generated for NeutrinoAPI.com by APIMATIC BETA v2.0 on 12/10/2015
 */

var request = require('../Http/Client/RequestClient'),
    configuration = require('../configuration'),
    APIHelper = require('../APIHelper');

var TelephonyController = {

    /**
     * Make an automated call to any valid phone number and playback an audio message. See: https://www.neutrinoapi.com/api/phone-playback/
     * @param {string} audioUrl    Required parameter: A URL to a valid audio file. Accepted audio formats are: MP3, WAV, OGG
     * @param {string} number    Required parameter: The phone number to call. Must be valid international format
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {PhonePlaybackResponse}
     */
    createPhonePlayback : function(audioUrl, number, callback){

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/phone-playback";
        
        //Process query parameters
        queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
            "user-id" : configuration.userId,
            "api-key" : configuration.apiKey
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json"
        };

        //prepare form data
        var form = {
            "audio-url" : audioUrl,
            "number" : number,
            "output-case" : "camel"
        };

        //Remove null values
        APIHelper.cleanObject(form);

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "POST",
            headers: headers,
            form : form,
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
            }
        }
        request(options, cb);
        
    },


    /**
     * Check if a security code from one of the verify APIs is valid. See: https://www.neutrinoapi.com/api/verify-security-code/
     * @param {int} securityCode    Required parameter: The security code to verify
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {VerifySecurityCodeResponse}
     */
    createVerifySecurityCode : function(securityCode, callback){

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/verify-security-code";
        
        //Process query parameters
        queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
            "user-id" : configuration.userId,
            "api-key" : configuration.apiKey
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json"
        };

        //prepare form data
        var form = {
            "output-case" : "camel",
            "security-code" : securityCode
        };

        //Remove null values
        APIHelper.cleanObject(form);

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "POST",
            headers: headers,
            form : form,
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
            }
        }
        request(options, cb);
        
    },


    /**
     * Mobile network HLR lookup service. See: https://www.neutrinoapi.com/api/hlr-lookup/
     * @param {string} number    Required parameter: A phone number
     * @param {string|null} countryCode    Optional parameter: ISO 2-letter country code, assume numbers are based in this country. If not set numbers are assumed to be in international format (with or without the leading + sign)
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {HLRLookupResponse}
     */
    createHLRLookup : function(number, countryCode, callback){

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/hlr-lookup";
        
        //Process query parameters
        queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
            "user-id" : configuration.userId,
            "api-key" : configuration.apiKey
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json"
        };

        //prepare form data
        var form = {
            "number" : number,
            "output-case" : "camel",
            "country-code" : countryCode
        };

        //Remove null values
        APIHelper.cleanObject(form);

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "POST",
            headers: headers,
            form : form,
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
            }
        }
        request(options, cb);
        
    },


    /**
     * Make an automated call to any valid phone number and playback a unique security code. See: https://www.neutrinoapi.com/api/phone-verify/
     * @param {string} number    Required parameter: The phone number to send the verification code to
     * @param {int|null} codeLength    Optional parameter: The number of digits to use in the security code (between 4 and 12)
     * @param {string|null} countryCode    Optional parameter: ISO 2-letter country code, assume numbers are based in this country. If not set numbers are assumed to be in international format (with or without the leading + sign)
     * @param {string|null} languageCode    Optional parameter: The language to playback the verification code in, available languages are: de - German, en - English, es - Spanish, fr - Fench, it - Italian, pt - Portuguese, ru - Russian
     * @param {int|null} playbackDelay    Optional parameter: The delay in milliseconds between the playback of each security code
     * @param {int|null} securityCode    Optional parameter: Pass in your own security code. This is useful if you have implemented TOTP or similar 2FA methods. If not set then we will generate a secure random code (only numerical security codes are currently supported)
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {PhoneVerifyResponse}
     */
    createPhoneVerify : function(number, codeLength, countryCode, languageCode, playbackDelay, securityCode, callback){
        //Assign default values
        codeLength = codeLength || 6;
        languageCode = languageCode || "en";
        playbackDelay = playbackDelay || 800;

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/phone-verify";
        
        //Process query parameters
        queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
            "user-id" : configuration.userId,
            "api-key" : configuration.apiKey
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json"
        };

        //prepare form data
        var form = {
            "number" : number,
            "output-case" : "camel",
            "code-length" : (null != codeLength)? codeLength: 6,
            "country-code" : countryCode,
            "language-code" : (null != languageCode)? languageCode: "en",
            "playback-delay" : (null != playbackDelay)? playbackDelay: 800,
            "security-code" : securityCode
        };

        //Remove null values
        APIHelper.cleanObject(form);

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "POST",
            headers: headers,
            form : form,
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
            }
        }
        request(options, cb);
        
    },


    /**
     * Send a unique security code to any mobile device via SMS. See: https://www.neutrinoapi.com/api/sms-verify/
     * @param {string} number    Required parameter: The phone number to send a verification code to
     * @param {int|null} codeLength    Optional parameter: The number of digits to use in the security code (must be between 4 and 12)
     * @param {string|null} countryCode    Optional parameter: ISO 2-letter country code, assume numbers are based in this country. If not set numbers are assumed to be in international format (with or without the leading + sign)
     * @param {string|null} languageCode    Optional parameter: The language to send the verification code in, available languages are: de - German, en - English, es - Spanish, fr - Fench, it - Italian, pt - Portuguese, ru - Russian
     * @param {int|null} securityCode    Optional parameter: ass in your own security code. This is useful if you have implemented TOTP or similar 2FA methods. If not set then we will generate a secure random code (only numerical security codes are currently supported)
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {SMSVerifyResponse}
     */
    createSMSVerify : function(number, codeLength, countryCode, languageCode, securityCode, callback){
        //Assign default values
        codeLength = codeLength || 5;
        languageCode = languageCode || "en";

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/sms-verify";
        
        //Process query parameters
        queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
            "user-id" : configuration.userId,
            "api-key" : configuration.apiKey
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json"
        };

        //prepare form data
        var form = {
            "number" : number,
            "output-case" : "camel",
            "code-length" : (null != codeLength)? codeLength: 5,
            "country-code" : countryCode,
            "language-code" : (null != languageCode)? languageCode: "en",
            "security-code" : securityCode
        };

        //Remove null values
        APIHelper.cleanObject(form);

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "POST",
            headers: headers,
            form : form,
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
            }
        }
        request(options, cb);
        
    }

};

module.exports = TelephonyController;