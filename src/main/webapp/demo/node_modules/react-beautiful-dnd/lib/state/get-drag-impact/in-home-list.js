'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _position = require('../position');

exports.default = function (_ref) {
  var pageCenter = _ref.pageCenter,
      draggable = _ref.draggable,
      home = _ref.home,
      insideHome = _ref.insideHome;

  var axis = home.axis;
  var homeScrollDiff = (0, _position.subtract)(home.container.scroll.current, home.container.scroll.initial);

  var currentCenter = (0, _position.add)(pageCenter, homeScrollDiff);

  var originalCenter = draggable.page.withoutMargin.center;

  var isBeyondStartPosition = currentCenter[axis.line] - originalCenter[axis.line] > 0;

  var moved = insideHome.filter(function (child) {
    if (child === draggable) {
      return false;
    }

    var fragment = child.page.withoutMargin;

    if (isBeyondStartPosition) {
      if (fragment.center[axis.line] < originalCenter[axis.line]) {
        return false;
      }

      return currentCenter[axis.line] > fragment[axis.start];
    }

    if (originalCenter[axis.line] < fragment.center[axis.line]) {
      return false;
    }

    return currentCenter[axis.line] < fragment[axis.end];
  }).map(function (dimension) {
    return dimension.id;
  });

  var ordered = isBeyondStartPosition ? moved.reverse() : moved;

  var index = function () {
    var startIndex = insideHome.indexOf(draggable);
    if (!moved.length) {
      return startIndex;
    }

    if (isBeyondStartPosition) {
      return startIndex + moved.length;
    }

    return startIndex - moved.length;
  }();

  var movement = {
    amount: (0, _position.patch)(axis.line, draggable.page.withMargin[axis.size]),
    draggables: ordered,
    isBeyondStartPosition: isBeyondStartPosition
  };

  var impact = {
    movement: movement,
    direction: axis.direction,
    destination: {
      droppableId: home.id,
      index: index
    }
  };

  return impact;
};