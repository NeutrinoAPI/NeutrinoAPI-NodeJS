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

class Imaging {
    /**
     * Resize an image and output as either JPEG or PNG. See: https://www.neutrinoapi.
     * com/api/image-resize/
     *
     * @param {string} imageUrl The URL to the source image
     * @param {int} width The width to resize to (in px) while preserving aspect ratio
     * @param {int} height The height to resize to (in px) while preserving aspect ratio
     * @param {string} format (optional) The output image format, can be either png or jpg
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static imageResize(imageUrl, width, height, format, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        const _pathUrl = '/image-resize';
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
            imageUrl,
            width,
            height,
            format: (format !== null) ? format : 'png',
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
     * Generate a QR code as a PNG image. See: https://www.neutrinoapi.com/api/qr-code/
     *
     * @param {string} content The content to encode into the QR code (e.g. a URL or a phone
     * number)
     * @param {int} width (optional) The width of the QR code (in px)
     * @param {int} height (optional) The height of the QR code (in px)
     * @param {string} fgColor (optional) The QR code foreground color
     * @param {string} bgColor (optional) The QR code background color
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static qRCode(content, width, height, fgColor, bgColor, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        const _pathUrl = '/qr-code';
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
            width: (width !== null) ? width : 256,
            height: (height !== null) ? height : 256,
            fgColor: (fgColor !== null) ? fgColor : '#000000',
            bgColor: (bgColor !== null) ? bgColor : '#ffffff',
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
     * Watermark one image with another image. See: https://www.neutrinoapi.com/api/image-
     * watermark/
     *
     * @param {string} imageUrl The URL to the source image
     * @param {string} watermarkUrl The URL to the watermark image
     * @param {int} opacity (optional) The opacity of the watermark (0 to 100)
     * @param {string} format (optional) The output image format, can be either png or jpg
     * @param {string} position (optional) The position of the watermark image, possible values are:
     * center, top-left, top-center, top-right, bottom-left, bottom-
     * center, bottom-right
     * @param {int} width (optional) If set resize the resulting image to this width (in px) while
     * preserving aspect ratio
     * @param {int} height (optional) If set resize the resulting image to this height (in px)
     * while preserving aspect ratio
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static imageWatermark(imageUrl,
        watermarkUrl,
        opacity,
        format,
        position,
        width,
        height,
        callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        const _pathUrl = '/image-watermark';
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
            imageUrl,
            watermarkUrl,
            opacity: (opacity !== null) ? opacity : 50,
            format: (format !== null) ? format : 'png',
            position: (position !== null) ? position : 'center',
            width,
            height,
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
     * Render HTML content to PDF, JPG or PNG. See: https://www.neutrinoapi.com/api/html5-
     * render/
     *
     * @param {string} content The HTML content. This can be either a URL to load HTML from or an
     * actual HTML content string
     * @param {string} format (optional) Which format to output, available options are: PDF, PNG,
     * JPG
     * @param {string} pageSize (optional) Set the document page size, can be one of: A0 - A9, B0 -
     * B10, Comm10E, DLE or Letter
     * @param {string} title (optional) The document title
     * @param {int} margin (optional) The document margin (in mm)
     * @param {int} marginLeft (optional) The document left margin (in mm)
     * @param {int} marginRight (optional) The document right margin (in mm)
     * @param {int} marginTop (optional) The document top margin (in mm)
     * @param {int} marginBottom (optional) The document bottom margin (in mm)
     * @param {bool} landscape (optional) Set the document to lanscape orientation
     * @param {int} zoom (optional) Set the zoom factor when rendering the page (2.0 for double
     * size, 0.5 for half size)
     * @param {bool} grayscale (optional) Render the final document in grayscale
     * @param {bool} mediaPrint (optional) Use @media print CSS styles to render the document
     * @param {bool} mediaQueries (optional) Activate all @media queries before rendering. This can
     * be useful if you wan't to render the mobile version of a
     * responsive website
     * @param {bool} forms (optional) Generate real (fillable) PDF forms from HTML forms
     * @param {string} css (optional) Inject custom CSS into the HTML. e.g. 'body { background-
     * color: red;}'
     * @param {int} imageWidth (optional) If rendering to an image format (PNG or JPG) use this
     * image width (in pixels)
     * @param {int} imageHeight (optional) If rendering to an image format (PNG or JPG) use this
     * image height (in pixels). The default is automatic which
     * dynamically sets the image height based on the content
     * @param {int} renderDelay (optional) Number of milliseconds to wait before rendering the page
     * (can be useful for pages with animations etc)
     * @param {string} headerTextLeft (optional) Text to print to the left-hand side header of each
     * page. e.g. 'My header - Page {page_number} of {total_pages}'
     * @param {string} headerTextCenter (optional) Text to print to the center header of each page
     * @param {string} headerTextRight (optional) Text to print to the right-hand side header of
     * each page
     * @param {int} headerSize (optional) The height of your header (in mm)
     * @param {string} headerFont (optional) Set the header font. Fonts available: Times, Courier,
     * Helvetica, Arial
     * @param {int} headerFontSize (optional) Set the header font size (in pt)
     * @param {bool} headerLine (optional) Draw a full page width horizontal line under your
     * header
     * @param {string} footerTextLeft (optional) Text to print to the left-hand side footer of each
     * page. e.g. 'My footer - Page {page_number} of {total_pages}'
     * @param {string} footerTextCenter (optional) Text to print to the center header of each page
     * @param {string} footerTextRight (optional) Text to print to the right-hand side header of
     * each page
     * @param {int} footerSize (optional) The height of your footer (in mm)
     * @param {string} footerFont (optional) Set the footer font. Fonts available: Times, Courier,
     * Helvetica, Arial
     * @param {int} footerFontSize (optional) Set the footer font size (in pt)
     * @param {bool} footerLine (optional) Draw a full page width horizontal line above your
     * footer
     * @param {int} pageWidth (optional) Set the PDF page width explicitly (in mm)
     * @param {int} pageHeight (optional) Set the PDF page height explicitly (in mm)
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static hTML5Render(content,
        format,
        pageSize,
        title,
        margin,
        marginLeft,
        marginRight,
        marginTop,
        marginBottom,
        landscape,
        zoom,
        grayscale,
        mediaPrint,
        mediaQueries,
        forms,
        css,
        imageWidth,
        imageHeight,
        renderDelay,
        headerTextLeft,
        headerTextCenter,
        headerTextRight,
        headerSize,
        headerFont,
        headerFontSize,
        headerLine,
        footerTextLeft,
        footerTextCenter,
        footerTextRight,
        footerSize,
        footerFont,
        footerFontSize,
        footerLine,
        pageWidth,
        pageHeight,
        callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        const _pathUrl = '/html5-render';
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
            outputCase: 'camel',
            content,
            format: (format !== null) ? format : 'PDF',
            pageSize: (pageSize !== null) ? pageSize : 'A4',
            title,
            margin: (margin !== null) ? margin : 0,
            marginLeft: (marginLeft !== null) ? marginLeft : 0,
            marginRight: (marginRight !== null) ? marginRight : 0,
            marginTop: (marginTop !== null) ? marginTop : 0,
            marginBottom: (marginBottom !== null) ? marginBottom : 0,
            landscape: (landscape !== null) ? landscape : false,
            zoom: (zoom !== null) ? zoom : 1,
            grayscale: (grayscale !== null) ? grayscale : false,
            mediaPrint: (mediaPrint !== null) ? mediaPrint : false,
            mediaQueries: (mediaQueries !== null) ? mediaQueries : false,
            forms: (forms !== null) ? forms : false,
            css,
            imageWidth: (imageWidth !== null) ? imageWidth : 1024,
            imageHeight,
            renderDelay: (renderDelay !== null) ? renderDelay : 0,
            headerTextLeft,
            headerTextCenter,
            headerTextRight,
            headerSize: (headerSize !== null) ? headerSize : 9,
            headerFont: (headerFont !== null) ? headerFont : 'Courier',
            headerFontSize: (headerFontSize !== null) ? headerFontSize : 11,
            headerLine: (headerLine !== null) ? headerLine : false,
            footerTextLeft,
            footerTextCenter,
            footerTextRight,
            footerSize: (footerSize !== null) ? footerSize : 9,
            footerFont: (footerFont !== null) ? footerFont : 'Courier',
            footerFontSize: (footerFontSize !== null) ? footerFontSize : 11,
            footerLine: (footerLine !== null) ? footerLine : false,
            pageWidth,
            pageHeight,
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
}
module.exports = Imaging;
