'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (el) {
  var _el$getBoundingClient = el.getBoundingClientRect(),
      top = _el$getBoundingClient.top,
      right = _el$getBoundingClient.right,
      bottom = _el$getBoundingClient.bottom,
      left = _el$getBoundingClient.left;

  var centerX = (left + right) / 2;
  var centerY = (top + bottom) / 2;

  return {
    x: centerX,
    y: centerY
  };
};