'use strict';

var _ = require('lodash');

var actions = require('../constants').action;


var initial = {
};

function templateReducer (state, action){
  state = state || initial;
  switch(action.type){
    case actions.ACTION:
      return _.extend({},state,{
      });
    default:
      return state;
  }

};

module.exports = templateReducer;
