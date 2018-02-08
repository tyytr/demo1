'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _memoizeOne = require('memoize-one');

var _memoizeOne2 = _interopRequireDefault(_memoizeOne);

var _getDraggablesInsideDroppable = require('../get-draggables-inside-droppable');

var _getDraggablesInsideDroppable2 = _interopRequireDefault(_getDraggablesInsideDroppable);

var _isWithinVisibleBoundsOfDroppable = require('../is-within-visible-bounds-of-droppable');

var _position = require('../position');

var _moveToEdge = require('../move-to-edge');

var _moveToEdge2 = _interopRequireDefault(_moveToEdge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getIndex = (0, _memoizeOne2.default)(function (draggables, target) {
  return draggables.indexOf(target);
});

exports.default = function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      draggableId = _ref.draggableId,
      impact = _ref.impact,
      droppable = _ref.droppable,
      draggables = _ref.draggables;

  if (!impact.destination) {
    console.error('cannot move to next index when there is not previous destination');
    return null;
  }

  var location = impact.destination;
  var draggable = draggables[draggableId];
  var axis = droppable.axis;

  var insideDroppable = (0, _getDraggablesInsideDroppable2.default)(droppable, draggables);

  var startIndex = getIndex(insideDroppable, draggable);
  var currentIndex = location.index;
  var proposedIndex = isMovingForward ? currentIndex + 1 : currentIndex - 1;

  if (startIndex === -1) {
    console.error('could not find draggable inside current droppable');
    return null;
  }

  if (proposedIndex > insideDroppable.length - 1) {
    return null;
  }

  if (proposedIndex < 0) {
    return null;
  }

  var destination = insideDroppable[proposedIndex];
  var isMovingTowardStart = isMovingForward && proposedIndex <= startIndex || !isMovingForward && proposedIndex >= startIndex;

  var edge = function () {
    if (!isMovingTowardStart) {
      return isMovingForward ? 'end' : 'start';
    }

    return isMovingForward ? 'start' : 'end';
  }();

  var newCenter = (0, _moveToEdge2.default)({
    source: draggable.page.withoutMargin,
    sourceEdge: edge,
    destination: destination.page.withoutMargin,
    destinationEdge: edge,
    destinationAxis: droppable.axis
  });

  var isVisible = (0, _isWithinVisibleBoundsOfDroppable.isPointWithinDroppable)(droppable)(newCenter);

  if (!isVisible) {
    return null;
  }

  var moved = isMovingTowardStart ? impact.movement.draggables.slice(1, impact.movement.draggables.length) : [destination.id].concat((0, _toConsumableArray3.default)(impact.movement.draggables));

  var newImpact = {
    movement: {
      draggables: moved,

      amount: (0, _position.patch)(axis.line, draggable.page.withMargin[axis.size]),
      isBeyondStartPosition: proposedIndex > startIndex
    },
    destination: {
      droppableId: droppable.id,
      index: proposedIndex
    },
    direction: droppable.axis.direction
  };

  var result = {
    pageCenter: newCenter,
    impact: newImpact
  };

  return result;
};