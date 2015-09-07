/**
 * Created by khancode on 9/7/2015.
 */

var $draw = new Draw();

function Draw() {

    var HEIGHT = 420; // px
    var WIDTH = 420; // px
    var ROW_NUM = 35;
    var CELL_LENGTH = HEIGHT / ROW_NUM; // px

    this.Create = function() {

        var ctx;

        init();

        function init() {
            var canvas = $("#myCanvas");
            var c = canvas[0];
            ctx = c.getContext("2d");
            ctx.canvas.height = HEIGHT;
            ctx.canvas.width = WIDTH;

            $("#canvas_container").css('height', HEIGHT);
            $("#canvas_container").css('width', WIDTH);
        }

        this.paint = function(snakePositionArr, foodPosition) {
            // clear drawing area
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, HEIGHT, WIDTH);
            ctx.strokeStyle = 'black';
            ctx.strokeRect(0, 0, HEIGHT, WIDTH);

            // draw snake
            ctx.fillStyle = 'green';
            ctx.strokeStyle = 'white';
            for (var i in snakePositionArr) {
                var pos = snakePositionArr[i];
                ctx.fillRect(pos.y * CELL_LENGTH, pos.x * CELL_LENGTH, CELL_LENGTH, CELL_LENGTH);
                ctx.strokeRect(pos.y * CELL_LENGTH, pos.x * CELL_LENGTH, CELL_LENGTH, CELL_LENGTH);
            }

            // draw food
            ctx.fillStyle = 'red';
            ctx.strokeStyle = 'white';
            ctx.fillRect(foodPosition.y * CELL_LENGTH, foodPosition.x * CELL_LENGTH, CELL_LENGTH, CELL_LENGTH);
            ctx.strokeRect(foodPosition.y * CELL_LENGTH, foodPosition.x * CELL_LENGTH, CELL_LENGTH, CELL_LENGTH);
        };
    }
}