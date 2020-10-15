"use strict";

(function () {
  let getRandomElement = function (arr) {
    let rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
  };

  let getMaxElement = function (arr) {
    var maxElement = arr[0];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
    return maxElement;
  };

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  window.util = {
    getRandomElement,
    getMaxElement,
    getRandomInt
  };
})();
