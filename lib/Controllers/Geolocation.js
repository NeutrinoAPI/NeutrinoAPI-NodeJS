/**
 * neutrinoapi
 *
 * This file was automatically generated for NeutrinoAPI by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const _request = require('../Http/Client/RequestClient');
const _configuration = require('../configuration');
const _apiHelper = require('../APIHelper');
const _baseController = require('./BaseController');

class Geolocation {
    /**
     * Convert a geographic coordinate (latitude and longitude) into a real world address or
     * location.
     *
     * @param {double} latitude The location latitude
     * @param {double} longitude The location longitude
     * @param {string} languageCode (optional) The language to display results in, available
     * languages are: de, en, es, fr, it, pt, ru
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static geocodeReverse(latitude, longitude, languageCode, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _queryBuilder = `${_baseUri}${'/geocode-reverse'}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "user-id": _configuration.userId,
            "api-key": _configuration.apiKey,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
        };

        // prepare form data
        const _form = {
            outputCase: 'camel',
            latitude,
            longitude,
            languageCode: (languageCode !== null) ? languageCode : 'en',
        };

        // remove null values
        _apiHelper.cleanObject(_form);

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            form: _form,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    let parsed = JSON.parse(_response.body);
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'GeocodeReverseResponse');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }

    /**
     * Get location information about an IP address and do reverse DNS (PTR) lookups.
     *
     * @param {string} ip The IP address
     * @param {bool} reverseLookup (optional) Do a reverse DNS (PTR) lookup. This option can add
     * extra delay to the request so only use it if you need it
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static iPInfo(ip, reverseLookup, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _queryBuilder = `${_baseUri}${'/ip-info'}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "user-id": _configuration.userId,
            "api-key": _configuration.apiKey,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
        };

        // prepare form data
        const _form = {
            outputCase: 'camel',
            ip,
            reverseLookup: (reverseLookup !== null) ? reverseLookup : false,
        };

        // remove null values
        _apiHelper.cleanObject(_form);

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            form: _form,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    let parsed = JSON.parse(_response.body);
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'IPInfoResponse');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }

    /**
     * Geocode an address, partial address or the name of a location
     *
     * @param {string} address The address or partial address to try and locate
     * @param {string} countryCode (optional) The ISO 2-letter country code to be biased towards
     * (default is no country bias)
     * @param {string} languageCode (optional) The language to display results in, available
     * languages are: de, en, es, fr, it, pt, ru
     * @param {bool} fuzzySearch (optional) If no matches are found for the given address, start
     * performing a recursive fuzzy search until a geolocation is found.
     * We use a combination of approximate string matching and data
     * cleansing to find possible location matches
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static geocodeAddress(address, countryCode, languageCode, fuzzySearch, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _queryBuilder = `${_baseUri}${'/geocode-address'}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "user-id": _configuration.userId,
            "api-key": _configuration.apiKey,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
        };

        // prepare form data
        const _form = {
            outputCase: 'camel',
            address,
            countryCode,
            languageCode: (languageCode !== null) ? languageCode : 'en',
            fuzzySearch: (fuzzySearch !== null) ? fuzzySearch : false,
        };

        // remove null values
        _apiHelper.cleanObject(_form);

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            form: _form,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    let parsed = JSON.parse(_response.body);
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'GeocodeAddressResponse');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }

}

module.exports = Geolocation;
