/**
 * NeutrinoAPILib
 *
 * This file was automatically generated for NeutrinoAPI.com by APIMATIC BETA v2.0 on 12/10/2015
 */

var request = require('../Http/Client/RequestClient'),
    configuration = require('../configuration'),
    APIHelper = require('../APIHelper');

var ECommerceController = {

    /**
     * Perform a BIN (Bank Identification Number) or IIN (Issuer Identification Number) lookup. See: https://www.neutrinoapi.com/api/bin-lookup/
     * @param {string} binNumber    Required parameter: The BIN or IIN number (the first 6 digits of a credit card number)
     * @param {string|null} customerIp    Optional parameter: Pass in a customers remote IP address. The API will then determine the country of the IP address and match it against the BIN country. This feature is designed for fraud prevention and detection checks.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {BINLookupResponse}
     */
    createBINLookup : function(binNumber, customerIp, callback){

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/bin-lookup";
        
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
            "bin-number" : binNumber,
            "output-case" : "camel",
            "customer-ip" : customerIp
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

module.exports = ECommerceController;