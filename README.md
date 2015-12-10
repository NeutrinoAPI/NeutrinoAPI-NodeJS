NeutrinoAPILib
=================
Welcome to the Neutrino API Node.js SDK. See: https://www.neutrinoapi.com/

This file was automatically generated for NeutrinoAPI.com by APIMATIC BETA v2.0 on 12/10/2015


How To Install: 
=============
The generated code relies on node package manager (npm) being available to resolve dependencies.
Once published you will need copy the folder 'neutrinoapilib' in to your 'node_modules' folder.

  
How To Use:
===========
The following shows how import the controllers and use:

1) Import the module:

        var neutrinoapilib = require('neutrinoapilib');
2) Configure any authentication parameters. For example:

        var config = neutrinoapilib.configuration;
        config.apikey = a_secret_key;

3) Access various controllers by:

        var controller = neutrinoapilib.XYZ;
        controller.getItems(id, callback);
    

