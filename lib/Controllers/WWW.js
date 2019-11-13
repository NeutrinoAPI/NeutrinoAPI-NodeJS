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

class WWW {
    /**
     * Parse, analyze and retrieve content from the supplied URL. See: https://www.neutrinoapi.
     * com/api/url-info/
     *
     * @param {string} url The URL to probe
     * @param {bool} fetchContent (optional) If this URL responds with html, text, json or xml then
     * return the response. This option is useful if you want to perform
     * further processing on the URL content (e.g. with the HTML Extract
     * or HTML Clean APIs)
     * @param {bool} ignoreCertificateErrors (optional) Ignore any TLS/SSL certificate errors and
     * load the URL anyway
     * @param {int} timeout (optional) Timeout in seconds. Give up if still trying to load the URL
     * after this number of seconds
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static uRLInfo(url, fetchContent, ignoreCertificateErrors, timeout, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        const _pathUrl = '/url-info';
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
            url,
            fetchContent: (fetchContent !== null) ? fetchContent : false,
            ignoreCertificateErrors: (ignoreCertificateErrors !== null) ? ignoreCertificateErrors : false,
            timeout: (timeout !== null) ? timeout : 20,
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
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'URLInfoResponse');
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
     * Clean and sanitize untrusted HTML. See: https://www.neutrinoapi.com/api/html-clean/
     *
     * @param {string} content The HTML content. This can be either a URL to load HTML from or an
     * actual HTML content string
     * @param {string} outputType The level of sanitization, possible values are: <b>plain-text</b>:
     * reduce the content to plain text only (no HTML tags at all)
     * <b>simple-text</b>: allow only very basic text formatting tags
     * like b, em, i, strong, u <b>basic-html</b>: allow advanced text
     * formatting and hyper links <b>basic-html-with-images</b>: same as
     * basic html but also allows image tags <b>advanced-html</b>: same
     * as basic html with images but also allows many more common HTML
     * tags like table, ul, dl, pre
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static hTMLClean(content, outputType, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        const _pathUrl = '/html-clean';
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
            'user-agent': 'APIMATIC 2.0',
        };

        // prepare form data
        const _form = {
            content,
            outputType,
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
                    _callback(null, _response.body, _context);
                    _fulfill(_response.body);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * Browser bot can extract content, interact with keyboard and mouse events, and execute
     * JavaScript on a website. See: https://www.neutrinoapi.com/api/browser-bot/
     *
     * @param {string} url The URL to load
     * @param {int} timeout (optional) Timeout in seconds. Give up if still trying to load the page
     * after this number of seconds
     * @param {int} delay (optional) Delay in seconds to wait before capturing any page data,
     * executing selectors or JavaScript
     * @param {string} selector (optional) Extract content from the page DOM using this selector.
     * Commonly known as a CSS selector, you can find a good reference <a
     * href="https://www.w3schools.com/cssref/css_selectors.asp">here</a>
     * @param {array} exec (optional) Execute JavaScript on the page. Each array element should
     * contain a valid JavaScript statement in string form. If a statement
     * returns any kind of value it will be returned in the 'exec-results'
     * response. For your convenience you can also use the following special
     * shortcut functions: <div> sleep(seconds); Just wait/sleep for the
     * specified number of seconds. click('selector'); Click on the first
     * element matching the given selector. focus('selector'); Focus on the
     * first element matching the given selector. keys('characters'); Send the
     * specified keyboard characters. Use click() or focus() first to send keys
     * to a specific element. enter(); Send the Enter key. tab(); Send the Tab
     * key. </div> Example: <div> [ "click('#button-id')", "sleep(1)", "click('.
     * field-class')", "keys('1234')", "enter()" ] </div>
     * @param {string} userAgent (optional) Override the browsers default user-agent string with
     * this one
     * @param {bool} ignoreCertificateErrors (optional) Ignore any TLS/SSL certificate errors and
     * load the page anyway
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static browserBot(url,
        timeout,
        delay,
        selector,
        exec,
        userAgent,
        ignoreCertificateErrors,
        callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        const _pathUrl = '/browser-bot';
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
            url,
            timeout: (timeout !== null) ? timeout : 30,
            delay: (delay !== null) ? delay : 3,
            selector,
            exec,
            userAgent,
            ignoreCertificateErrors: (ignoreCertificateErrors !== null) ? ignoreCertificateErrors : false,
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
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'BrowserBotResponse');
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
module.exports = WWW;
