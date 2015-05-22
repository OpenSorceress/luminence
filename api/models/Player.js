/**
* Players.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  identity: 'player',
  connection: 'localDiskDb',
  autoCreatedAt:true,
  autoUpdatedAt: true,
  schema: true,

  attributes: {

    username  : { type: 'string', unique: true },
    email     : { type: 'email',  unique: true },
    passports : { collection: 'Passport', via: 'user' },


    games: {

      collection: 'game'
    }
  }

};

