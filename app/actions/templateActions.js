'use strict';
var actions = require('../constants').action;


var syncAction = function () {
  return ({
    type: actions.RESET_PROMPT
  });
};

var asyncAction = function (payload) {
  return function(dispatch){
    $.ajax({
      method: 'GET',
      url: '/api/route/:' + id,
      dataType: 'json',
      cache: false,
      success: function (data) {
          dispatch({
            type: actions.SUCCESS,
            payload: data
          });
      },
      error: function (error) {
        dispatch({
          type: actions.ERROR
        });
      }
    });
  };
};


module.exports = {
  syncAction: syncAction,
  asyncAction: asyncAction
};
