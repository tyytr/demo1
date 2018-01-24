'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _position = require('../position');

exports.default = function (_ref) {
  var pageCenter = _ref.pageCenter,
      draggable = _ref.draggable,
      destination = _ref.destination,
      insideDestination = _ref.insideDestination;

  var axis = destination.axis;

  var destinationScrollDiff = (0, _position.subtract)(destination.container.scroll.current, destination.container.scroll.initial);

  var currentCenter = (0, _position.add)(pageCenter, destinationScrollDiff);

  var moved = insideDestination.filter(function (child) {
    var threshold = child.page.withoutMargin[axis.end];
    return threshold > currentCenter[axis.line];
  }).map(function (dimension) {
    return dimension.id;
  });

  var newIndex = insideDestination.length - moved.length;

  var movement = {
    amount: (0, _position.patch)(axis.line, draggable.page.withMargin[axis.size]),
    draggables: moved,
    isBeyondStartPosition: false
  };

  var impact = {
    movement: movement,
    direction: axis.direction,
    destination: {
      droppableId: destination.id,
      index: newIndex
    }
  };

  return impact;
};