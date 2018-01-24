'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _position = require('../position');

var _isWithinVisibleBoundsOfDroppable = require('../is-within-visible-bounds-of-droppable');

exports.default = function (_ref) {
  var axis = _ref.axis,
      pageCenter = _ref.pageCenter,
      destination = _ref.destination,
      insideDestination = _ref.insideDestination;

  if (!insideDestination.length) {
    return null;
  }

  var isWithinDestination = (0, _isWithinVisibleBoundsOfDroppable.isDraggableWithin)(destination.container.bounds);

  var result = insideDestination.filter(isWithinDestination).sort(function (a, b) {
    var distanceToA = (0, _position.distance)(pageCenter, a.page.withMargin.center);
    var distanceToB = (0, _position.distance)(pageCenter, b.page.withMargin.center);

    if (distanceToA < distanceToB) {
      return -1;
    }

    if (distanceToB < distanceToA) {
      return 1;
    }

    return a.page.withMargin[axis.start] - b.page.withMargin[axis.start];
  });

  return result.length ? result[0] : null;
};