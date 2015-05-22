/**
* History.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  identity: 'history',
  connection: 'localDiskDb',
  autoCreatedAt:true,
  autoUpdatedAt: true,

  attributes: {

    rgb: 'string',
    alpha: 'string',

    game: {

      model: 'game'

    }

  }

};

