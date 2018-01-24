'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _position = require('../position');

var _isWithin = require('../is-within');

var _isWithin2 = _interopRequireDefault(_isWithin);

var _spacing = require('../spacing');

var _isWithinVisibleBoundsOfDroppable = require('../is-within-visible-bounds-of-droppable');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      pageCenter = _ref.pageCenter,
      source = _ref.source,
      droppables = _ref.droppables;

  var axis = source.axis;
  var sourceBounds = (0, _isWithinVisibleBoundsOfDroppable.getVisibleBounds)(source);

  var candidates = (0, _keys2.default)(droppables).map(function (id) {
    return droppables[id];
  }).filter(function (droppable) {
    return droppable !== source;
  }).filter(function (droppable) {
    return droppable.isEnabled;
  }).map(function (droppable) {
    return {
      bounds: (0, _isWithinVisibleBoundsOfDroppable.getVisibleBounds)(droppable),
      droppable: droppable
    };
  }).filter(function (_ref2) {
    var bounds = _ref2.bounds;

    if (isMovingForward) {
      return sourceBounds[axis.crossAxisEnd] <= bounds[axis.crossAxisStart];
    }

    return bounds[axis.crossAxisEnd] <= sourceBounds[axis.crossAxisStart];
  }).filter(function (_ref3) {
    var bounds = _ref3.bounds;

    var isBetweenSourceBounds = (0, _isWithin2.default)(sourceBounds[axis.start], sourceBounds[axis.end]);
    var isBetweenDestinationBounds = (0, _isWithin2.default)(bounds[axis.start], bounds[axis.end]);

    return isBetweenSourceBounds(bounds[axis.start]) || isBetweenSourceBounds(bounds[axis.end]) || isBetweenDestinationBounds(sourceBounds[axis.start]) || isBetweenDestinationBounds(sourceBounds[axis.end]);
  }).filter(function (_ref4) {
    var droppable = _ref4.droppable;
    return droppable.page.withoutMargin[axis.crossAxisStart] >= droppable.container.bounds[axis.crossAxisStart] && droppable.page.withoutMargin[axis.crossAxisEnd] <= droppable.container.bounds[axis.crossAxisEnd];
  }).sort(function (_ref5, _ref6) {
    var a = _ref5.bounds;
    var b = _ref6.bounds;

    var first = a[axis.crossAxisStart];
    var second = b[axis.crossAxisStart];

    if (isMovingForward) {
      return first - second;
    }
    return second - first;
  }).filter(function (_ref7, index, array) {
    var bounds = _ref7.bounds;
    return bounds[axis.crossAxisStart] === array[0].bounds[axis.crossAxisStart];
  });

  if (!candidates.length) {
    return null;
  }

  if (candidates.length === 1) {
    return candidates[0].droppable;
  }

  var contains = candidates.filter(function (_ref8) {
    var bounds = _ref8.bounds;

    var isWithinDroppable = (0, _isWithin2.default)(bounds[axis.start], bounds[axis.end]);
    return isWithinDroppable(pageCenter[axis.line]);
  });

  if (contains.length === 1) {
    return contains[0].droppable;
  }

  if (contains.length > 1) {
    return contains.sort(function (_ref9, _ref10) {
      var a = _ref9.bounds;
      var b = _ref10.bounds;
      return a[axis.start] - b[axis.start];
    })[0].droppable;
  }

  return candidates.sort(function (_ref11, _ref12) {
    var a = _ref11.bounds;
    var b = _ref12.bounds;

    var first = (0, _position.closest)(pageCenter, (0, _spacing.getCorners)(a));
    var second = (0, _position.closest)(pageCenter, (0, _spacing.getCorners)(b));

    if (first !== second) {
      return first - second;
    }

    return a[axis.start] - b[axis.start];
  })[0].droppable;
};