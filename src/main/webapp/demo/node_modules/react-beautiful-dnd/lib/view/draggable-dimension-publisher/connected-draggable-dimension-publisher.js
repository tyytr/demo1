'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSelector = undefined;

var _reactRedux = require('react-redux');

var _memoizeOne = require('memoize-one');

var _memoizeOne2 = _interopRequireDefault(_memoizeOne);

var _reselect = require('reselect');

var _contextKeys = require('../context-keys');

var _actionCreators = require('../../state/action-creators');

var _draggableDimensionPublisher = require('./draggable-dimension-publisher');

var _draggableDimensionPublisher2 = _interopRequireDefault(_draggableDimensionPublisher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var requestDimensionSelector = function requestDimensionSelector(state) {
  return state.dimension.request;
};

var getOwnType = function getOwnType(state, props) {
  return props.type;
};

var makeSelector = exports.makeSelector = function makeSelector() {
  var getMapProps = (0, _memoizeOne2.default)(function (shouldPublish) {
    return {
      shouldPublish: shouldPublish
    };
  });

  return (0, _reselect.createSelector)([getOwnType, requestDimensionSelector], function (ownType, requestId) {
    return getMapProps(ownType === requestId);
  });
};

var makeMapStateToProps = function makeMapStateToProps() {
  var selector = makeSelector();
  return function (state, props) {
    return selector(state, props);
  };
};

var mapDispatchToProps = {
  publish: _actionCreators.publishDraggableDimension
};

exports.default = (0, _reactRedux.connect)(makeMapStateToProps, mapDispatchToProps, null, { storeKey: _contextKeys.storeKey })(_draggableDimensionPublisher2.default);