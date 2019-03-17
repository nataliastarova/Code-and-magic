'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 50;
var FONT_GAP = 16;
var TEXT_WIDTH = 50;
var BAR_WIDTH = 40;

var barHeight = CLOUD_HEIGHT - GAP - FONT_GAP - GAP;

var renderCloud = function (ctx)  {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++){
        if (arr[i] > maxElement){
            maxElement =arr[i];
        }
    }

    return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    ctx.fillStyle = '#000';

    var maxTime = getMaxElement(times);

    for (var i = 0; i < players.length; i++) {
        ctx.fillText(players[i], CLOUD_X + GAP + (TEXT_WIDTH + GAP) * i, CLOUD_Y + GAP + FONT_GAP + barHeight);
        ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_Y + GAP, BAR_WIDTH, (barHeight * times[i]) / maxTime);
    }
};



    // ctx.fillStyle = '#000';
    // ctx.text('Ура вы победили!', 120, 20);

    //ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    //
    // var playerIndex = 0;
    // var playerName = 'Вы';
    //
    // ctx.text('Вы', CLOUD_X + GAP + (TEXT_WIDTH + GAP) * 0, CLOUD_Y  + GAP + FONT_GAP + barHeight);
    // ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + GAP) * 0, CLOUD_Y  + GAP, BAR_WIDTH, 100);
    //
    // var playerIndex = 1;
    // var playerName = 'Кекс';
    //
    // ctx.fillStyle = '#000';
    // ctx.text('Кекс', CLOUD_X + GAP + (TEXT_WIDTH + GAP) * 1, CLOUD_Y  + GAP + FONT_GAP + barHeight);
    // ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + GAP) * 1, 40, BAR_WIDTH, 100);
    //
    // var playerIndex = 2;
    // var playerName = 'Катя';
    //
    // ctx.fillStyle = '#000';
    // ctx.text('Катя', CLOUD_X + GAP + (TEXT_WIDTH + GAP) * 2, CLOUD_Y  + GAP + FONT_GAP + barHeight);
    // ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + GAP) * 2, 80, BAR_WIDTH, 100);
    //
    // var playerIndex = 3;
    // var playerName = 'Игорь';
    //
    // ctx.fillStyle = '#000';
    // ctx.text('Игорь',CLOUD_X + GAP + (TEXT_WIDTH + GAP) * 3, CLOUD_Y  + GAP + FONT_GAP + barHeight);
    // ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + GAP) * 3, 75, BAR_WIDTH, 100);

// };

// // DOM элемент канвас
// var canvas = document.getElementById('canvas');
//
// //Контекст отрисовки
// var ctx = canvas.getContext('2d');
// ctx.FillStyle = 'blue';
// ctx.FillRect(0,0, 300, 150);