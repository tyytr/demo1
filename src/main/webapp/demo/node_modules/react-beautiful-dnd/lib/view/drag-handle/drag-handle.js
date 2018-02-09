'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _memoizeOne = require('memoize-one');

var _memoizeOne2 = _interopRequireDefault(_memoizeOne);

var _createMouseSensor = require('./sensor/create-mouse-sensor');

var _createMouseSensor2 = _interopRequireDefault(_createMouseSensor);

var _createKeyboardSensor = require('./sensor/create-keyboard-sensor');

var _createKeyboardSensor2 = _interopRequireDefault(_createKeyboardSensor);

var _createTouchSensor = require('./sensor/create-touch-sensor');

var _createTouchSensor2 = _interopRequireDefault(_createTouchSensor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getFalse = function getFalse() {
  return false;
};

var DragHandle = function (_Component) {
  (0, _inherits3.default)(DragHandle, _Component);

  function DragHandle() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, DragHandle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DragHandle.__proto__ || (0, _getPrototypeOf2.default)(DragHandle)).call.apply(_ref, [this].concat(args))), _this), _this.mouseSensor = (0, _createMouseSensor2.default)(_this.props.callbacks, _this.props.getDraggableRef), _this.keyboardSensor = (0, _createKeyboardSensor2.default)(_this.props.callbacks, _this.props.getDraggableRef), _this.touchSensor = (0, _createTouchSensor2.default)(_this.props.callbacks, _this.props.getDraggableRef), _this.sensors = [_this.mouseSensor, _this.keyboardSensor, _this.touchSensor], _this.onKeyDown = function (event) {
      if (_this.mouseSensor.isCapturing()) {
        return;
      }

      _this.keyboardSensor.onKeyDown(event, _this.props);
    }, _this.onMouseDown = function (event) {
      if (_this.keyboardSensor.isCapturing()) {
        return;
      }

      _this.mouseSensor.onMouseDown(event, _this.props);
    }, _this.onTouchStart = function (event) {
      if (_this.mouseSensor.isCapturing() || _this.keyboardSensor.isCapturing()) {
        console.error('mouse or keyboard already listening when attempting to touch drag');
        return;
      }

      _this.touchSensor.onTouchStart(event, _this.props);
    }, _this.onTouchMove = function (event) {
      _this.touchSensor.onTouchMove(event);
    }, _this.onClick = function (event) {
      _this.mouseSensor.onClick(event);
      _this.touchSensor.onClick(event);
    }, _this.isAnySensorDragging = function () {
      return _this.sensors.some(function (sensor) {
        return sensor.isDragging();
      });
    }, _this.isAnySensorCapturing = function () {
      return _this.sensors.some(function (sensor) {
        return sensor.isCapturing();
      });
    }, _this.getProvided = (0, _memoizeOne2.default)(function (isEnabled, isDragging) {
      if (!isEnabled) {
        return null;
      }

      var provided = {
        onMouseDown: _this.onMouseDown,
        onKeyDown: _this.onKeyDown,
        onTouchStart: _this.onTouchStart,
        onTouchMove: _this.onTouchMove,
        onClick: _this.onClick,
        tabIndex: 0,
        'aria-grabbed': isDragging,
        draggable: false,
        onDragStart: getFalse,
        onDrop: getFalse
      };

      return provided;
    }), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(DragHandle, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var _this2 = this;

      this.sensors.forEach(function (sensor) {
        var wasCapturing = sensor.isCapturing();
        var wasDragging = sensor.isDragging();

        if (wasCapturing) {
          sensor.kill();
        }

        if (wasDragging) {
          _this2.props.callbacks.onCancel();
        }
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      var isCapturing = this.isAnySensorCapturing();

      if (!isCapturing) {
        return;
      }

      var isDragStopping = this.props.isDragging && !nextProps.isDragging;

      if (isDragStopping) {
        this.sensors.forEach(function (sensor) {
          if (sensor.isCapturing()) {
            sensor.kill();
          }
        });
        return;
      }

      if (!nextProps.isEnabled) {
        this.sensors.forEach(function (sensor) {
          if (sensor.isCapturing()) {
            var wasDragging = sensor.isDragging();

            sensor.kill();

            if (wasDragging) {
              _this3.props.callbacks.onCancel();
            }
          }
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          isEnabled = _props.isEnabled;


      return children(this.getProvided(isEnabled, this.isAnySensorDragging()));
    }
  }]);
  return DragHandle;
}(_react.Component);

exports.default = DragHandle;