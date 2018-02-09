'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSelector = undefined;

var _reactRedux = require('react-redux');

var _reselect = require('reselect');

var _memoizeOne = require('memoize-one');

var _memoizeOne2 = _interopRequireDefault(_memoizeOne);

var _contextKeys = require('../context-keys');

var _droppableDimensionPublisher = require('./droppable-dimension-publisher');

var _droppableDimensionPublisher2 = _interopRequireDefault(_droppableDimensionPublisher);

var _actionCreators = require('../../state/action-creators');

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

  return (0, _reselect.createSelector)([getOwnType, requestDimensionSelector], function (ownType, requested) {
    return getMapProps(ownType === requested);
  });
};

var makeMapStateToProps = function makeMapStateToProps() {
  var selector = makeSelector();
  return function (state, props) {
    return selector(state, props);
  };
};

var mapDispatchToProps = {
  publish: _actionCreators.publishDroppableDimension,
  updateScroll: _actionCreators.updateDroppableDimensionScroll,
  updateIsEnabled: _actionCreators.updateDroppableDimensionIsEnabled
};

exports.default = (0, _reactRedux.connect)(makeMapStateToProps, mapDispatchToProps, null, { storeKey: _contextKeys.storeKey })(_droppableDimensionPublisher2.default);