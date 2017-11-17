/**
 * @name userg-metadata-v1-api
 * @description This module packages the Userg-metadata API.
 */
'use strict';

const hydraExpress = require('hydra-express');
const hydra = hydraExpress.getHydra();
const express = hydraExpress.getExpress();
const jwtAuth = require('fwsp-jwt-auth');
const ServerResponse = require('fwsp-server-response');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const userMetaData = mongoose.model('userMetaData');

let serverResponse = new ServerResponse();
serverResponse.enableCORS(true);
express.response.sendError = function(err) {
  serverResponse.sendServerError(this, {result: {error: err}});
};
express.response.sendOk = function(result) {
  serverResponse.sendOk(this, {result});
};

let api = express.Router();

api.get('/get-metadata',
(req, res) => {
  /**
   * DB Layer !!
   */
  userMetaData.find({})
  .then((outputBody) =>{
    return res.sendOk({msg:outputBody})
  })
  .catch((error)=> res.sendServerError(error));
});

module.exports = api;
