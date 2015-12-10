/**
 * NeutrinoAPILib
 *
 * This file was automatically generated for NeutrinoAPI.com by APIMATIC BETA v2.0 on 12/10/2015
 */

var request = require('../Http/Client/RequestClient'),
    configuration = require('../configuration'),
    APIHelper = require('../APIHelper');

var GeolocationController = {

    /**
     * Get location information about an IP address and do reverse DNS (PTR) lookups. See: https://www.neutrinoapi.com/api/ip-info/
     * @param {string} ip    Required parameter: The IP address
     * @param {bool|null} reverseLookup    Optional parameter: Do reverse DNS (PTR) lookup. This option can add extra delay to the request so only use it if you need it
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {IPInfoResponse}
     */
    createIPInfo : function(ip, reverseLookup, callback){
        //Assign default values
        reverseLookup = reverseLookup || false;

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/ip-info";
        
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
            "ip" : ip,
            "output-case" : "camel",
            "reverse-lookup" : (null != reverseLookup)? reverseLookup: false
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
     * Geocode an address or partial address. See: https://www.neutrinoapi.com/api/geocode-address/
     * @param {string} address    Required parameter: The address or partial address to try and locate
     * @param {string|null} countryCode    Optional parameter: The ISO 2-letter country code to be biased towards (default is no country bias)
     * @param {string|null} languageCode    Optional parameter: The language to display results in
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {GeocodeAddressResponse}
     */
    createGeocodeAddress : function(address, countryCode, languageCode, callback){
        //Assign default values
        languageCode = languageCode || "en";

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/geocode-address";
        
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
            "address" : address,
            "output-case" : "camel",
            "country-code" : countryCode,
            "language-code" : (null != languageCode)? languageCode: "en"
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
     * Reverse geocoding is the process of taking a coordinate (latitude and longitude) and mapping this to a real world address or location. See: https://www.neutrinoapi.com/api/geocode-reverse/
     * @param {double} latitude    Required parameter: The location latitude
     * @param {double} longitude    Required parameter: The location longitude
     * @param {string|null} languageCode    Optional parameter: The language to display results in
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {GeocodeReverseResponse}
     */
    createGeocodeReverse : function(latitude, longitude, languageCode, callback){
        //Assign default values
        languageCode = languageCode || "en";

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/geocode-reverse";
        
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
            "latitude" : latitude,
            "longitude" : longitude,
            "output-case" : "camel",
            "language-code" : (null != languageCode)? languageCode: "en"
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

module.exports = GeolocationController;