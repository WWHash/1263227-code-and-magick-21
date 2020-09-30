'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var GAP_X = 30;
var GAP_Y = 40;
var TEXT_WIDTH = 50;
var BAR_WIDTH = 40;
var MAXHEIGHTGISTOGRAM = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};
var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

function getRandomInt(min, max) {
  return Math.random() * (max - min + 1) + min;
}

var getColorGistogramm = function (name) {
  return (name === 'Вы') ? '#f00' : 'rgba(0, 0, 255, ' + getRandomInt(0.3, 1) + ')';
};

var drawText = function (ctx, text, textX, textY) {
  ctx.fillText(text, textX, textY);
};

var getDrawStatistics = function (ctx, name, time, maximumTime, index) {
  var barHeight = MAXHEIGHTGISTOGRAM * time / maximumTime;
  var maximumGap = CLOUD_X + GAP_Y + (GAP_Y + TEXT_WIDTH) * index;
  ctx.fillStyle = '#000';
  drawText(ctx, name, maximumGap, CLOUD_Y + CLOUD_HEIGHT - GAP);
  drawText(ctx, Math.floor(time), maximumGap, CLOUD_Y + MAXHEIGHTGISTOGRAM + GAP_Y + GAP_X - barHeight);
  ctx.fillStyle = getColorGistogramm(name);
  ctx.fillRect(maximumGap, CLOUD_Y + CLOUD_HEIGHT - GAP_Y - barHeight, BAR_WIDTH, barHeight);
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = '#000';
  ctx.font = '16pt PT Mono';
  drawText(ctx, 'Ура вы победили!', CLOUD_X + GAP_X, CLOUD_Y + GAP_X);
  drawText(ctx, 'Список результатов:', CLOUD_X + GAP_X, CLOUD_Y + GAP_Y + GAP);
  var maxTime = getMaxElement(times);
  for (var i = 0; i < players.length; i++) {
    getDrawStatistics(ctx, players[i], times[i], maxTime, i);
  }
};
