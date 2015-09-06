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

            console.log('ground initialized! :D');
        }

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