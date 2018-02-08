'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moveToEdge = require('../../move-to-edge');

var _moveToEdge2 = _interopRequireDefault(_moveToEdge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var amount = _ref.amount,
      pageCenter = _ref.pageCenter,
      target = _ref.target,
      insideDroppable = _ref.insideDroppable,
      draggable = _ref.draggable,
      droppable = _ref.droppable;

  var axis = droppable.axis;
  var isGoingBeforeTarget = Boolean(target && pageCenter[droppable.axis.line] < target.page.withMargin.center[droppable.axis.line]);

  if (!target) {

    var _newCenter = (0, _moveToEdge2.default)({
      source: draggable.page.withoutMargin,
      sourceEdge: 'start',
      destination: droppable.page.withMarginAndPadding,
      destinationEdge: 'start',
      destinationAxis: axis
    });

    var _newImpact = {
      movement: {
        draggables: [],
        amount: amount,
        isBeyondStartPosition: false
      },
      direction: axis.direction,
      destination: {
        droppableId: droppable.id,
        index: 0
      }
    };

    return {
      pageCenter: _newCenter,
      impact: _newImpact
    };
  }

  var targetIndex = insideDroppable.indexOf(target);
  var proposedIndex = isGoingBeforeTarget ? targetIndex : targetIndex + 1;

  if (targetIndex === -1) {
    console.error('could not find target inside destination');
    return null;
  }

  var newCenter = (0, _moveToEdge2.default)({
    source: draggable.page.withoutMargin,
    sourceEdge: 'start',
    destination: target.page.withMargin,
    destinationEdge: isGoingBeforeTarget ? 'start' : 'end',
    destinationAxis: axis
  });

  var needsToMove = insideDroppable.slice(proposedIndex, insideDroppable.length).map(function (dimension) {
    return dimension.id;
  });

  var newImpact = {
    movement: {
      draggables: needsToMove,
      amount: amount,
      isBeyondStartPosition: false
    },
    direction: axis.direction,
    destination: {
      droppableId: droppable.id,
      index: proposedIndex
    }
  };

  return {
    pageCenter: newCenter,
    impact: newImpact
  };
};