'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDraggableWithin = exports.isPointWithinDroppable = exports.getVisibleBounds = undefined;

var _isWithin = require('./is-within');

var _isWithin2 = _interopRequireDefault(_isWithin);

var _position = require('./position');

var _spacing = require('./spacing');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getVisibleBounds = exports.getVisibleBounds = function getVisibleBounds(droppable) {
  var _droppable$container = droppable.container,
      scroll = _droppable$container.scroll,
      containerBounds = _droppable$container.bounds;

  var containerScrollDiff = (0, _position.subtract)(scroll.initial, scroll.current);

  var droppableBounds = (0, _spacing.offset)(droppable.page.withMargin, containerScrollDiff);

  var clippedBounds = {
    top: Math.max(droppableBounds.top, containerBounds.top),
    right: Math.min(droppableBounds.right, containerBounds.right),
    bottom: Math.min(droppableBounds.bottom, containerBounds.bottom),
    left: Math.max(droppableBounds.left, containerBounds.left)
  };

  return clippedBounds;
};

var isPointWithin = function isPointWithin(bounds) {
  var isWithinHorizontal = (0, _isWithin2.default)(bounds.left, bounds.right);
  var isWithinVertical = (0, _isWithin2.default)(bounds.top, bounds.bottom);

  return function (point) {
    return isWithinHorizontal(point.x) && isWithinVertical(point.y);
  };
};

var isPointWithinDroppable = exports.isPointWithinDroppable = function isPointWithinDroppable(droppable) {
  return isPointWithin(getVisibleBounds(droppable));
};

var isDraggableWithin = exports.isDraggableWithin = function isDraggableWithin(bounds) {
  var top = bounds.top,
      right = bounds.right,
      bottom = bounds.bottom,
      left = bounds.left;

  var isWithinHorizontal = (0, _isWithin2.default)(left - 1, right + 1);
  var isWithinVertical = (0, _isWithin2.default)(top - 1, bottom + 1);

  return function (draggable) {
    var fragment = draggable.page.withMargin;

    return isWithinHorizontal(fragment.left) && isWithinHorizontal(fragment.right) && isWithinVertical(fragment.top) && isWithinVertical(fragment.bottom);
  };
};