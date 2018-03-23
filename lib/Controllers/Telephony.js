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

class Telephony {
    /**
     * Connect to the global mobile cellular network and retrieve the status of a mobile device
     *
     * @param {string} number A phone number
     * @param {string} countryCode (optional) ISO 2-letter country code, assume numbers are based
     * in this country. If not set numbers are assumed to be in
     * international format (with or without the leading + sign)
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static hLRLookup(number, countryCode, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _queryBuilder = `${_baseUri}${'/hlr-lookup'}`;

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
            number,
            countryCode,
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
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'HLRLookupResponse');
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
     * Make an automated call to any valid phone number and playback an audio message
     *
     * @param {string} number The phone number to call. Must be valid international format
     * @param {string} audioUrl A URL to a valid audio file. Accepted audio formats are: MP3, WAV,
     * OGG
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static phonePlayback(number, audioUrl, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _queryBuilder = `${_baseUri}${'/phone-playback'}`;

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
            number,
            audioUrl,
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
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'PhonePlaybackResponse');
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
     * Check if a security code from one of the verify APIs is valid
     *
     * @param {int} securityCode The security code to verify
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static verifySecurityCode(securityCode, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _queryBuilder = `${_baseUri}${'/verify-security-code'}`;

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
            securityCode,
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
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'VerifySecurityCodeResponse');
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
     * Send a unique security code to any mobile device via SMS
     *
     * @param {string} number The phone number to send a verification code to
     * @param {int} codeLength (optional) The number of digits to use in the security code (must be
     * between 4 and 12)
     * @param {int} securityCode (optional) ass in your own security code. This is useful if you
     * have implemented TOTP or similar 2FA methods. If not set then we
     * will generate a secure random code (only numerical security codes
     * are currently supported)
     * @param {string} countryCode (optional) ISO 2-letter country code, assume numbers are based
     * in this country. If not set numbers are assumed to be in
     * international format (with or without the leading + sign)
     * @param {string} languageCode (optional) The language to send the verification code in,
     * available languages are: de - German, en - English, es -
     * Spanish, fr - Fench, it - Italian, pt - Portuguese, ru -
     * Russian
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static sMSVerify(number, codeLength, securityCode, countryCode, languageCode, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _queryBuilder = `${_baseUri}${'/sms-verify'}`;

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
            number,
            codeLength: (codeLength !== null) ? codeLength : 5,
            securityCode,
            countryCode,
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
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'SMSVerifyResponse');
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
     * Make an automated call to any valid phone number and playback a unique security code
     *
     * @param {string} number The phone number to send the verification code to
     * @param {int} codeLength (optional) The number of digits to use in the security code (between
     * 4 and 12)
     * @param {int} securityCode (optional) Pass in your own security code. This is useful if you
     * have implemented TOTP or similar 2FA methods. If not set then we
     * will generate a secure random code (only numerical security codes
     * are currently supported)
     * @param {int} playbackDelay (optional) The delay in milliseconds between the playback of each
     * security code
     * @param {string} countryCode (optional) ISO 2-letter country code, assume numbers are based
     * in this country. If not set numbers are assumed to be in
     * international format (with or without the leading + sign)
     * @param {string} languageCode (optional) The language to playback the verification code in,
     * available languages are: de - German, en - English, es -
     * Spanish, fr - Fench, it - Italian, pt - Portuguese, ru -
     * Russian
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static phoneVerify(number,
        codeLength,
        securityCode,
        playbackDelay,
        countryCode,
        languageCode,
        callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _queryBuilder = `${_baseUri}${'/phone-verify'}`;

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
            number,
            codeLength: (codeLength !== null) ? codeLength : 6,
            securityCode,
            playbackDelay: (playbackDelay !== null) ? playbackDelay : 800,
            countryCode,
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
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'PhoneVerifyResponse');
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

module.exports = Telephony;
