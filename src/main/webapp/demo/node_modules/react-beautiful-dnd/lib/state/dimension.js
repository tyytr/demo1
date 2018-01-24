'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDroppableDimension = exports.getDraggableDimension = exports.getFragment = exports.noSpacing = undefined;

var _axis = require('./axis');

var _getClientRect = require('./get-client-rect');

var _getClientRect2 = _interopRequireDefault(_getClientRect);

var _spacing = require('./spacing');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var origin = { x: 0, y: 0 };

var noSpacing = exports.noSpacing = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};

var getWithPosition = function getWithPosition(clientRect, point) {
  var top = clientRect.top,
      right = clientRect.right,
      bottom = clientRect.bottom,
      left = clientRect.left;

  return (0, _getClientRect2.default)({
    top: top + point.y,
    left: left + point.x,
    bottom: bottom + point.y,
    right: right + point.x
  });
};

var getWithSpacing = function getWithSpacing(clientRect, spacing) {
  var top = clientRect.top,
      right = clientRect.right,
      bottom = clientRect.bottom,
      left = clientRect.left;

  return (0, _getClientRect2.default)({
    top: top - spacing.top,
    left: left - spacing.left,
    bottom: bottom + spacing.bottom,
    right: right + spacing.right
  });
};

var getFragment = exports.getFragment = function getFragment(initial) {
  var point = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : origin;

  var rect = (0, _getClientRect2.default)({
    top: initial.top + point.y,
    left: initial.left + point.x,
    bottom: initial.bottom + point.y,
    right: initial.right + point.x
  });

  return {
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    width: rect.width,
    height: rect.height,
    center: {
      x: (rect.right + rect.left) / 2,
      y: (rect.bottom + rect.top) / 2
    }
  };
};

var getDraggableDimension = exports.getDraggableDimension = function getDraggableDimension(_ref) {
  var id = _ref.id,
      droppableId = _ref.droppableId,
      clientRect = _ref.clientRect,
      _ref$margin = _ref.margin,
      margin = _ref$margin === undefined ? noSpacing : _ref$margin,
      _ref$windowScroll = _ref.windowScroll,
      windowScroll = _ref$windowScroll === undefined ? origin : _ref$windowScroll;

  var withScroll = getWithPosition(clientRect, windowScroll);

  var dimension = {
    id: id,
    droppableId: droppableId,

    client: {
      withoutMargin: getFragment(clientRect),
      withMargin: getFragment(getWithSpacing(clientRect, margin))
    },

    page: {
      withoutMargin: getFragment(withScroll),
      withMargin: getFragment(getWithSpacing(withScroll, margin))
    }
  };

  return dimension;
};

var getDroppableDimension = exports.getDroppableDimension = function getDroppableDimension(_ref2) {
  var id = _ref2.id,
      clientRect = _ref2.clientRect,
      containerRect = _ref2.containerRect,
      _ref2$direction = _ref2.direction,
      direction = _ref2$direction === undefined ? 'vertical' : _ref2$direction,
      _ref2$margin = _ref2.margin,
      margin = _ref2$margin === undefined ? noSpacing : _ref2$margin,
      _ref2$padding = _ref2.padding,
      padding = _ref2$padding === undefined ? noSpacing : _ref2$padding,
      _ref2$windowScroll = _ref2.windowScroll,
      windowScroll = _ref2$windowScroll === undefined ? origin : _ref2$windowScroll,
      _ref2$scroll = _ref2.scroll,
      scroll = _ref2$scroll === undefined ? origin : _ref2$scroll,
      _ref2$isEnabled = _ref2.isEnabled,
      isEnabled = _ref2$isEnabled === undefined ? true : _ref2$isEnabled;

  var withMargin = getWithSpacing(clientRect, margin);
  var withWindowScroll = getWithPosition(clientRect, windowScroll);

  var containerRectWithWindowScroll = !containerRect || (0, _spacing.isEqual)(containerRect, clientRect) ? getWithPosition(withMargin, windowScroll) : getWithPosition(containerRect, windowScroll);

  var dimension = {
    id: id,
    isEnabled: isEnabled,
    axis: direction === 'vertical' ? _axis.vertical : _axis.horizontal,
    client: {
      withoutMargin: getFragment(clientRect),
      withMargin: getFragment(withMargin),
      withMarginAndPadding: getFragment(getWithSpacing(withMargin, padding))
    },
    page: {
      withoutMargin: getFragment(withWindowScroll),
      withMargin: getFragment(getWithSpacing(withWindowScroll, margin)),
      withMarginAndPadding: getFragment(getWithSpacing(withWindowScroll, (0, _spacing.add)(margin, padding)))
    },
    container: {
      scroll: {
        initial: scroll,

        current: scroll
      },
      bounds: getFragment(containerRectWithWindowScroll)
    }
  };

  return dimension;
};