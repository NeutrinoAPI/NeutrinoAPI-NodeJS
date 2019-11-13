/**
 * neutrinoapi
 *
 * This file was automatically generated for NeutrinoAPI by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const _request = require('../Http/Client/RequestClient');
const _configuration = require('../configuration');
const _apiHelper = require('../APIHelper');
const _baseController = require('./BaseController');

class Telephony {
    /**
     * Check if a security code from one of the verify APIs is valid. See: https://www.
     * neutrinoapi.com/api/verify-security-code/
     *
     * @param {string} securityCode The security code to verify
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static verifySecurityCode(securityCode, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        const _pathUrl = '/verify-security-code';
        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            'user-id': _configuration.userId,
            'api-key': _configuration.apiKey,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'user-agent': 'APIMATIC 2.0',
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
     * Connect to the global mobile cellular network and retrieve the status of a mobile device.
     * See: https://www.neutrinoapi.com/api/hlr-lookup/
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
        const _baseUri = _configuration.getBaseUri();

        const _pathUrl = '/hlr-lookup';
        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            'user-id': _configuration.userId,
            'api-key': _configuration.apiKey,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'user-agent': 'APIMATIC 2.0',
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
     * Make an automated call to any valid phone number and playback an audio message. See: https:
     * //www.neutrinoapi.com/api/phone-playback/
     *
     * @param {string} number The phone number to call. Must be in valid international format
     * @param {string} audioUrl A URL to a valid audio file. Accepted audio formats are: <ul>
     * <li>MP3</li> <li>WAV</li> <li>OGG</li> </ul>You can use the
     * following MP3 URL for testing: https://www.neutrinoapi.com/test-
     * files/test1.mp3
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static phonePlayback(number, audioUrl, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        const _pathUrl = '/phone-playback';
        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            'user-id': _configuration.userId,
            'api-key': _configuration.apiKey,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'user-agent': 'APIMATIC 2.0',
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
     * Send a unique security code to any mobile device via SMS. See: https://www.neutrinoapi.
     * com/api/sms-verify/
     *
     * @param {string} number The phone number to send a verification code to
     * @param {int} codeLength (optional) The number of digits to use in the security code (must be
     * between 4 and 12)
     * @param {int} securityCode (optional) Pass in your own security code. This is useful if you
     * have implemented TOTP or similar 2FA methods. If not set then we
     * will generate a secure random code
     * @param {string} countryCode (optional) ISO 2-letter country code, assume numbers are based
     * in this country. If not set numbers are assumed to be in
     * international format (with or without the leading + sign)
     * @param {string} languageCode (optional) The language to send the verification code in,
     * available languages are: <ul> <li>de - German</li> <li>en -
     * English</li> <li>es - Spanish</li> <li>fr - French</li> <li>it -
     * Italian</li> <li>pt - Portuguese</li> <li>ru - Russian</li>
     * </ul>
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static sMSVerify(number, codeLength, securityCode, countryCode, languageCode, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        const _pathUrl = '/sms-verify';
        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            'user-id': _configuration.userId,
            'api-key': _configuration.apiKey,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'user-agent': 'APIMATIC 2.0',
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
     * Send a free-form message to any mobile device via SMS. See: https://www.neutrinoapi.
     * com/api/sms-message/
     *
     * @param {string} number The phone number to send a message to
     * @param {string} message The SMS message to send. Messages are truncated to a maximum of 150
     * characters for ASCII content OR 70 characters for UTF content
     * @param {string} countryCode (optional) ISO 2-letter country code, assume numbers are based
     * in this country. If not set numbers are assumed to be in
     * international format (with or without the leading + sign)
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static sMSMessage(number, message, countryCode, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        const _pathUrl = '/sms-message';
        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            'user-id': _configuration.userId,
            'api-key': _configuration.apiKey,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'user-agent': 'APIMATIC 2.0',
        };

        // prepare form data
        const _form = {
            outputCase: 'camel',
            number,
            message,
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
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'SMSMessageResponse');
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
     * Make an automated call to any valid phone number and playback a unique security code. See:
     * https://www.neutrinoapi.com/api/phone-verify/
     *
     * @param {string} number The phone number to send the verification code to
     * @param {int} codeLength (optional) The number of digits to use in the security code (between
     * 4 and 12)
     * @param {int} securityCode (optional) Pass in your own security code. This is useful if you
     * have implemented TOTP or similar 2FA methods. If not set then we
     * will generate a secure random code
     * @param {int} playbackDelay (optional) The delay in milliseconds between the playback of each
     * security code
     * @param {string} countryCode (optional) ISO 2-letter country code, assume numbers are based
     * in this country. If not set numbers are assumed to be in
     * international format (with or without the leading + sign)
     * @param {string} languageCode (optional) The language to playback the verification code in,
     * available languages are: <ul> <li>de - German</li> <li>en -
     * English</li> <li>es - Spanish</li> <li>fr - French</li> <li>it -
     * Italian</li> <li>pt - Portuguese</li> <li>ru - Russian</li>
     * </ul>
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
        const _baseUri = _configuration.getBaseUri();

        const _pathUrl = '/phone-verify';
        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            'user-id': _configuration.userId,
            'api-key': _configuration.apiKey,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'user-agent': 'APIMATIC 2.0',
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
