/**
 * Created by khancode on 9/5/2015.
 */

var $ground = new Ground();

/* All functions reside in Ground() for encapsulation */
function Ground()
{
    var LENGTH = 10;
    var WIDTH = 10;

    var SNAKE = 'S';
    var FOOD = 'F';
    var EMPTY = '_';
    var WALL = 'W';

    /*
        Creates a new object for ground
            FYI: Represents a 2D Array
     */
    this.Create = function() {

        var gridArr; // 2D array

        init();

        function init() {
            // Create 2D array
            gridArr = new Array(WIDTH);
            for (var i = 0; i < LENGTH; i++)
                gridArr[i] = new Array(WIDTH);

            clearGrid();
        }

        this.checkCollision = function(position) {
            var state;

            if (position.x < 0 || position.x > 9 || position.y < 0 || position.y > 9)
                state = WALL;
            else
                state = gridArr[position.x][position.y];

            if (state == EMPTY)
                return $game.GOOD_STATE;
            else if (state == FOOD)
                return $game.FOOD_STATE;
            else if (state == SNAKE || state == WALL)
                return $game.BAD_STATE;
            else
                throw "This is not a valid state '" + state + "'";
        };

        this.refresh = function(snakePositionArr, foodPosition) {
            clearGrid();

            // place snake on grid
            for (var i in snakePositionArr) {
                var pos = snakePositionArr[i];
                gridArr[pos.x][pos.y] = SNAKE;
            }

            // place food on grid
            gridArr[foodPosition.x][foodPosition.y] = FOOD;
        };

        function clearGrid() {
            // clear grid
            for (var i = 0; i < gridArr.length; i++)
            {
                for (var j = 0; j < gridArr[i].length; j++)
                {
                    gridArr[i][j] = EMPTY;
                }
            }
        }

        this.print = function() {
            var str = '';

            var col = '  col: ';
            for (var i = 0; i < gridArr.length; i++)
                col += i + '  ';
            str += col + '\n';

            for (var i = 0; i < gridArr.length; i++)
            {
                var rowStr = 'row ' + i + ': ';
                for (var j = 0; j < gridArr[i].length; j++)
                {
                    rowStr += gridArr[i][j];
                    if (j != gridArr[i].length - 1)
                        rowStr += ', ';
                    else
                        rowStr += '\n';
                }
                str += rowStr;
            }

            console.log(str);
        };

    };
}