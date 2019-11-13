/**
 * neutrinoapi
 *
 * This file was automatically generated for NeutrinoAPI by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const servers = require('./Servers');
const environments = require('./Environments');
const apiHelper = require('./APIHelper');

const environmentsMap = [];

environmentsMap[environments.MULTICLOUD] = [];
environmentsMap[environments.AWS] = [];
environmentsMap[environments.GCP] = [];
environmentsMap[environments.MSA] = [];

environmentsMap[environments.MULTICLOUD][servers.MDEFAULT] = 'https://neutrinoapi.net/';
environmentsMap[environments.AWS][servers.MDEFAULT] = 'https://aws.neutrinoapi.net/';
environmentsMap[environments.GCP][servers.MDEFAULT] = 'https://gcp.neutrinoapi.net/';
environmentsMap[environments.MSA][servers.MDEFAULT] = 'https://msa.neutrinoapi.net/';

const Configuration = {
    // Your user ID
    userId: '',

    // Your API key
    apiKey: '',

    /**
     * Current API environment
     * @type {string}
     */
    currentEnvironment: environments.MULTICLOUD,

    /**
     * Get base URI for a server in the current API environment
     * @param  {string|null} server Server name
     * @return {string}             Base URI for server
     */
    getBaseUri(server) {
        const url = environmentsMap[this.currentEnvironment][server || servers.MDEFAULT];
        const urlParams = {
        };
        return apiHelper.appendUrlWithTemplateParameters(url, urlParams);
    },
};

module.exports = Configuration;
