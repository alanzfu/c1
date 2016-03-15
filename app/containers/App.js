//react & redux require
var _ = require('lodash');
var React = require('react');
var ReactDOM = require('react-dom');
var { bindActionCreators } = require('redux');
var { connect } = require('react-redux');

//actions require
var actions = require('../actions');

//component require
var components = require('../components');

//constant requires (views)
var views = require('../constants').view;


var contextType = {
  redux: React.PropTypes.object
};

var App = React.createClass({
  componentWillMount: function(){
  },

  render: function(){
      switch(this.props.view) {
        case views.INITIAL_VIEW:
          return (
            <div>
              <components.Component {...this.props}/>
            </div>
          );
        default:
          return (
            <div>
              <components.Component {...this.props}/>
            </div>
          );


});

function mapStateToProps(state) {
    // instantiate empty object
    // keys currently are: user, view, newRace, activeRace
    var mapping = {};

    for (var k in state){
      mapping[k] = state[k];
    }

  return mapping;
}

function mapDispatchToProps(dispatch) {
  // console.log("THE MAPPED ACTIONS", actions);
  var actionsObj = {}
  for(var key in actions) {
    actionsObj[key] = bindActionCreators(actions[key], dispatch);
  }
  return actionsObj;
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(App);
