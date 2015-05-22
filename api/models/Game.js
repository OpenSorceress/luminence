/**
* Game.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  identity: 'game',
  connection: 'localDiskDb',
  autoCreatedAt:true,
  autoUpdatedAt: true,

  attributes: {

    id: {
      type: 'integer',
      unique: true,
      primaryKey: true
    },

    status: {
      type: 'string',
      enum: ['play', 'edit' ]
    },

    player: {

      model: 'player'

    },

    histories: {

      collection: 'history'
    }

  }

};

