'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 50;
var FONT_GAP = 16;
var TEXT_WIDTH = 50;
var BAR_WIDTH = 40;
var barHeight = 150;
var offset = 10;
var you = 'Вы';



var renderCloud = function(ctx, x, y, color)   {
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

window.renderStatistics = function(ctx, players, times) {
    renderCloud(ctx, CLOUD_X + offset, CLOUD_Y + offset, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', CLOUD_X + offset * 2 , CLOUD_Y + FONT_GAP + offset);
    ctx.fillText('Список результатов:', CLOUD_X + offset * 2, CLOUD_Y + FONT_GAP + offset + FONT_GAP);

    var maxTime = getMaxElement(times);

    for (var i = 0; i < players.length; i++) {
        if ( you === players[i]){
            ctx.fillStyle = 'rgba(255, 0, 0, 1)';
            // ctx.fillRect(you, CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_Y + (offset + FONT_GAP) * 2 + FONT_GAP + FONT_GAP + (barHeight -((barHeight * times[i]) / maxTime)), BAR_WIDTH, (barHeight * times[i]) / maxTime);
        } else {
            ctx.fillStyle = 'rgba(0, 0, 255, ' + genOpacity() + ')';
        }

        // noinspection JSAnnotator
        function genOpacity() {
            return Math.random();
        }

        ctx.fillText(players[i], CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_Y + (offset + FONT_GAP) * 2 + FONT_GAP + FONT_GAP + barHeight + FONT_GAP);
        ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_Y + (offset + FONT_GAP) * 2 + FONT_GAP + FONT_GAP + (barHeight -((barHeight * times[i]) / maxTime)), BAR_WIDTH, (barHeight * times[i]) / maxTime)
        
    }
};

