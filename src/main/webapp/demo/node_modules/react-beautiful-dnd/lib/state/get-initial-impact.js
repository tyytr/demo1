'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getDraggablesInsideDroppable = require('./get-draggables-inside-droppable');

var _getDraggablesInsideDroppable2 = _interopRequireDefault(_getDraggablesInsideDroppable);

var _noImpact = require('./no-impact');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var draggable = _ref.draggable,
      droppable = _ref.droppable,
      draggables = _ref.draggables;

  var insideDroppable = (0, _getDraggablesInsideDroppable2.default)(droppable, draggables);

  var homeIndex = insideDroppable.indexOf(draggable);

  if (homeIndex === -1) {
    console.error('lifting a draggable that is not inside a droppable');
    return null;
  }

  var home = {
    index: homeIndex,
    droppableId: droppable.id
  };

  var impact = {
    movement: _noImpact.noMovement,
    direction: droppable.axis.direction,
    destination: home
  };

  return impact;
};