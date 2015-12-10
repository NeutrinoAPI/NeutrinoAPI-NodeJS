/**
 * NeutrinoAPILib
 *
 * This file was automatically generated for NeutrinoAPI.com by APIMATIC BETA v2.0 on 12/10/2015
 */

var request = require('../Http/Client/RequestClient'),
    configuration = require('../configuration'),
    APIHelper = require('../APIHelper');

var ImagingController = {

    /**
     * Generate a QR code as a PNG image. See: https://www.neutrinoapi.com/api/qr-code/
     * @param {string} content    Required parameter: The content to encode into the QR code (e.g. a URL or a phone number)
     * @param {string|null} bgColor    Optional parameter: The QR code background color (you should always use a light color for this)
     * @param {string|null} fgColor    Optional parameter: The QR code foreground color (you should always use a dark color for this)
     * @param {int|null} height    Optional parameter: The height of the QR code (in px)
     * @param {int|null} width    Optional parameter: The width of the QR code (in px)
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {binary}
     */
    createQRCode : function(content, bgColor, fgColor, height, width, callback){
        //Assign default values
        bgColor = bgColor || "#ffffff";
        fgColor = fgColor || "#000000";
        height = height || 250;
        width = width || 250;

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/qr-code";
        
        //Process query parameters
        queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
            "width" : (null != width)? width: 250,
            "user-id" : configuration.userId,
            "api-key" : configuration.apiKey
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare form data
        var form = {
            "content" : content,
            "bg-color" : (null != bgColor)? bgColor: "#ffffff",
            "fg-color" : (null != fgColor)? fgColor: "#000000",
            "height" : (null != height)? height: 250
        };

        //Remove null values
        APIHelper.cleanObject(form);

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "POST",
            form : form,
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null, response.body,context);
            }else{
                //Error handling using HTTP status codes
                callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
            }
        }
        request(options, cb);
        
    },


    /**
     * Convert HTML content into PDF documents. See: https://www.neutrinoapi.com/api/html-to-pdf/
     * @param {string} content    Required parameter: The HTML content. This can be either a URL to load HTML from or an actual HTML content string
     * @param {int|null} htmlWidth    Optional parameter: The width (in px) to render the HTML document at
     * @param {int|null} margin    Optional parameter: The PDF document margin (in mm)
     * @param {string|null} title    Optional parameter: The PDF document title
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {binary}
     */
    createHTMLToPDF : function(content, htmlWidth, margin, title, callback){
        //Assign default values
        htmlWidth = htmlWidth || 1024;
        margin = margin || 10;

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/html-to-pdf";
        
        //Process query parameters
        queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
            "user-id" : configuration.userId,
            "api-key" : configuration.apiKey
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare form data
        var form = {
            "content" : content,
            "html-width" : (null != htmlWidth)? htmlWidth: 1024,
            "margin" : (null != margin)? margin: 10,
            "title" : title
        };

        //Remove null values
        APIHelper.cleanObject(form);

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "POST",
            form : form,
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null, response.body,context);
            }else{
                //Error handling using HTTP status codes
                callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
            }
        }
        request(options, cb);
        
    },


    /**
     * Resize an image and output as either JPEG or PNG. See: https://www.neutrinoapi.com/api/image-resize/
     * @param {int} height    Required parameter: Height to resize to (in px)
     * @param {string} imageUrl    Required parameter: The URL to the source image
     * @param {int} width    Required parameter: Width to resize to (in px)
     * @param {string|null} format    Optional parameter: The output image format, can be either png or jpg
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {binary}
     */
    createImageResize : function(height, imageUrl, width, format, callback){
        //Assign default values
        format = format || "png";

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/image-resize";
        
        //Process query parameters
        queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
            "user-id" : configuration.userId,
            "api-key" : configuration.apiKey
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare form data
        var form = {
            "height" : height,
            "image-url" : imageUrl,
            "width" : width,
            "format" : (null != format)? format: "png"
        };

        //Remove null values
        APIHelper.cleanObject(form);

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "POST",
            form : form,
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null, response.body,context);
            }else{
                //Error handling using HTTP status codes
                callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
            }
        }
        request(options, cb);
        
    },


    /**
     * Watermark one image with another image. See: https://www.neutrinoapi.com/api/image-watermark/
     * @param {string} imageUrl    Required parameter: The URL to the source image
     * @param {string} watermarkUrl    Required parameter: The URL to the watermark image
     * @param {string|null} format    Optional parameter: The output image format, can be either png or jpg
     * @param {int|null} height    Optional parameter: If set resize the resulting image to this height (preserving aspect ratio)
     * @param {int|null} opacity    Optional parameter: The opacity of the watermark (0 to 100)
     * @param {string|null} position    Optional parameter: The position of the watermark image, possible values are: center, top-left, top-center, top-right, bottom-left, bottom-center, bottom-right
     * @param {int|null} width    Optional parameter: If set resize the resulting image to this width (preserving aspect ratio)
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {binary}
     */
    createImageWatermark : function(imageUrl, watermarkUrl, format, height, opacity, position, width, callback){
        //Assign default values
        format = format || "png";
        opacity = opacity || 50;
        position = position || "center";

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/image-watermark";
        
        //Process query parameters
        queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
            "user-id" : configuration.userId,
            "api-key" : configuration.apiKey
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare form data
        var form = {
            "image-url" : imageUrl,
            "watermark-url" : watermarkUrl,
            "format" : (null != format)? format: "png",
            "height" : height,
            "opacity" : (null != opacity)? opacity: 50,
            "position" : (null != position)? position: "center",
            "width" : width
        };

        //Remove null values
        APIHelper.cleanObject(form);

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "POST",
            form : form,
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null, response.body,context);
            }else{
                //Error handling using HTTP status codes
                callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
            }
        }
        request(options, cb);
        
    }

};

module.exports = ImagingController;