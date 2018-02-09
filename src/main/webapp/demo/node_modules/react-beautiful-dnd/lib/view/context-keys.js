'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var prefix = function prefix(key) {
  return 'private-drag-drop-key-do-not-use-store-' + key;
};

var storeKey = exports.storeKey = prefix('store');
var droppableIdKey = exports.droppableIdKey = prefix('droppable-id');