/**
  * @module NeutrinoAPILib
  *  
  * The general-purpose API
  */

var configuration = require('./configuration'),
    GeolocationController = require('./Controllers/GeolocationController'),
    TelephonyController = require('./Controllers/TelephonyController'),
    DataToolsController = require('./Controllers/DataToolsController'),
    ImagingController = require('./Controllers/ImagingController'),
    SecurityAndNetworkingController = require('./Controllers/SecurityAndNetworkingController'),
    ECommerceController = require('./Controllers/ECommerceController');


function initializer(){}

//Main functional components of NeutrinoAPILib
initializer.configuration = configuration;
initializer.GeolocationController = GeolocationController;
initializer.TelephonyController = TelephonyController;
initializer.DataToolsController = DataToolsController;
initializer.ImagingController = ImagingController;
initializer.SecurityAndNetworkingController = SecurityAndNetworkingController;
initializer.ECommerceController = ECommerceController;

//Main Models of NeutrinoAPILib

module.exports = initializer;