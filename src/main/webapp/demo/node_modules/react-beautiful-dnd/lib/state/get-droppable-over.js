'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _memoizeOne = require('memoize-one');

var _memoizeOne2 = _interopRequireDefault(_memoizeOne);

var _dimension = require('./dimension');

var _getClientRect = require('./get-client-rect');

var _getClientRect2 = _interopRequireDefault(_getClientRect);

var _getDraggablesInsideDroppable = require('./get-draggables-inside-droppable');

var _getDraggablesInsideDroppable2 = _interopRequireDefault(_getDraggablesInsideDroppable);

var _isWithinVisibleBoundsOfDroppable = require('./is-within-visible-bounds-of-droppable');

var _position = require('./position');

var _spacing = require('./spacing');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noBuffer = { x: 0, y: 0 };

var bufferDimensionFragment = function bufferDimensionFragment(buffer) {
  return function (fragment) {
    return (0, _dimension.getFragment)((0, _getClientRect2.default)((0, _spacing.addPosition)(fragment, buffer)));
  };
};

var addBufferToDroppableDimension = (0, _memoizeOne2.default)(function (buffer, droppable) {
  var id = droppable.id,
      axis = droppable.axis,
      isEnabled = droppable.isEnabled,
      client = droppable.client,
      container = droppable.container,
      page = droppable.page;

  var withBuffer = bufferDimensionFragment(buffer);

  var newClient = {
    withoutMargin: withBuffer(client.withoutMargin),
    withMargin: withBuffer(client.withMargin),
    withMarginAndPadding: withBuffer(client.withMarginAndPadding)
  };

  var newPage = {
    withoutMargin: withBuffer(page.withoutMargin),
    withMargin: withBuffer(page.withMargin),
    withMarginAndPadding: withBuffer(page.withMarginAndPadding)
  };

  var shouldBufferContainer = droppable.page.withMargin[droppable.axis.size] <= droppable.container.bounds[droppable.axis.size];
  var newContainerBounds = shouldBufferContainer ? withBuffer(container.bounds) : (0, _extends3.default)({}, container.bounds);

  return {
    id: id,
    axis: axis,
    isEnabled: isEnabled,
    client: newClient,
    page: newPage,
    container: {
      scroll: container.scroll,
      bounds: newContainerBounds
    }
  };
});

var calculateBufferSize = (0, _memoizeOne2.default)(function (draggable, draggables, droppable) {

  var draggablesInDroppable = (0, _getDraggablesInsideDroppable2.default)(droppable, draggables);

  if (!draggablesInDroppable.length) {
    return noBuffer;
  }
  var excessSpace = droppable.page.withMargin[droppable.axis.end] - draggablesInDroppable[draggablesInDroppable.length - 1].page.withMargin[droppable.axis.end];
  var bufferSize = Math.max(draggable.page.withMargin[droppable.axis.size] - excessSpace, 0);

  var buffer = (0, _position.patch)(droppable.axis.line, bufferSize);

  return buffer;
});

var bufferDroppable = function bufferDroppable(_ref) {
  var draggable = _ref.draggable,
      draggables = _ref.draggables,
      droppable = _ref.droppable,
      previousDroppableOverId = _ref.previousDroppableOverId;

  var isHomeDroppable = draggable.droppableId === droppable.id;
  var isCurrentlyHovered = previousDroppableOverId && previousDroppableOverId === droppable.id;

  if (isHomeDroppable || !isCurrentlyHovered) {
    return droppable;
  }

  var buffer = calculateBufferSize(draggable, draggables, droppable);

  return addBufferToDroppableDimension(buffer, droppable);
};

exports.default = function (_ref2) {
  var target = _ref2.target,
      draggable = _ref2.draggable,
      draggables = _ref2.draggables,
      droppables = _ref2.droppables,
      previousDroppableOverId = _ref2.previousDroppableOverId;

  var maybe = (0, _keys2.default)(droppables).map(function (id) {
    return droppables[id];
  }).find(function (droppable) {
    var bufferedDroppable = bufferDroppable({
      draggable: draggable, draggables: draggables, droppable: droppable, previousDroppableOverId: previousDroppableOverId
    });

    return (0, _isWithinVisibleBoundsOfDroppable.isPointWithinDroppable)(bufferedDroppable)(target);
  });

  return maybe ? maybe.id : null;
};