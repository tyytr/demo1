'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSelector = undefined;

var _reactRedux = require('react-redux');

var _reselect = require('reselect');

var _memoizeOne = require('memoize-one');

var _memoizeOne2 = _interopRequireDefault(_memoizeOne);

var _contextKeys = require('../context-keys');

var _selectors = require('../../state/selectors');

var _droppable = require('./droppable');

var _droppable2 = _interopRequireDefault(_droppable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeSelector = exports.makeSelector = function makeSelector() {
  var idSelector = function idSelector(state, ownProps) {
    return ownProps.droppableId;
  };
  var isDropDisabledSelector = function isDropDisabledSelector(state, ownProps) {
    return ownProps.isDropDisabled || false;
  };

  var getIsDraggingOver = (0, _memoizeOne2.default)(function (id, destination) {
    if (!destination) {
      return false;
    }
    return destination.droppableId === id;
  });

  var memoizedPlaceholder = (0, _memoizeOne2.default)(function (width, height) {
    return {
      width: width, height: height
    };
  });

  var getPlaceholder = (0, _memoizeOne2.default)(function (id, source, destination, draggable) {
    if (!destination) {
      return null;
    }

    if (destination.droppableId !== id) {
      return null;
    }

    if (source.droppableId === destination.droppableId) {
      return null;
    }

    if (!draggable) {
      return null;
    }

    var placeholder = memoizedPlaceholder(draggable.client.withoutMargin.width, draggable.client.withoutMargin.height);

    return placeholder;
  });

  var getMapProps = (0, _memoizeOne2.default)(function (isDraggingOver, placeholder) {
    return {
      isDraggingOver: isDraggingOver,
      placeholder: placeholder
    };
  });

  return (0, _reselect.createSelector)([_selectors.phaseSelector, _selectors.dragSelector, _selectors.draggingDraggableSelector, _selectors.pendingDropSelector, idSelector, isDropDisabledSelector], function (phase, drag, draggable, pending, id, isDropDisabled) {
    if (isDropDisabled) {
      return getMapProps(false, null);
    }

    if (phase === 'DRAGGING') {
      if (!drag) {
        console.error('cannot determine dragging over as there is not drag');
        return getMapProps(false, null);
      }

      var isDraggingOver = getIsDraggingOver(id, drag.impact.destination);

      var placeholder = getPlaceholder(id, drag.initial.source, drag.impact.destination, draggable);
      return getMapProps(isDraggingOver, placeholder);
    }

    if (phase === 'DROP_ANIMATING') {
      if (!pending) {
        console.error('cannot determine dragging over as there is no pending result');
        return getMapProps(false, null);
      }

      var _isDraggingOver = getIsDraggingOver(id, pending.impact.destination);
      var _placeholder = getPlaceholder(id, pending.result.source, pending.result.destination, draggable);
      return getMapProps(_isDraggingOver, _placeholder);
    }

    return getMapProps(false, null);
  });
};

var makeMapStateToProps = function makeMapStateToProps() {
  var selector = makeSelector();
  return function (state, props) {
    return selector(state, props);
  };
};

exports.default = (0, _reactRedux.connect)(makeMapStateToProps, null, null, { storeKey: _contextKeys.storeKey })(_droppable2.default);