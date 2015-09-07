/**
 * Created by khancode on 9/5/2015.
 */

var $food = new Food();

/* All functions reside in Food() for encapsulation */
function Food()
{
    // TODO need to set LOWER_BOUND and UPPER_BOUND from Draw.js global values
    var LOWER_BOUND = 0;
    var UPPER_BOUND = 34;

    /* Creates new object for food */
    this.Create = function() {

        var x;
        var y;

        init();

        function init() {
            x = Math.floor((Math.random() * UPPER_BOUND) + LOWER_BOUND);
            y = Math.floor((Math.random() * UPPER_BOUND) + LOWER_BOUND);
        }

        this.respawn = function(snakePositionArr) {
            var newX;
            var newY;
            var validPosition;

            do
            {
                validPosition = true;

                newX = Math.floor((Math.random() * UPPER_BOUND) + LOWER_BOUND);
                newY = Math.floor((Math.random() * UPPER_BOUND) + LOWER_BOUND);

                for (var i in snakePositionArr) {
                    var pos = snakePositionArr[i];

                    if (newX == pos.x && newY == pos.y) {
                        validPosition = false;
                        break;
                    }
                }
            } while (validPosition == false);

            x = newX;
            y = newY;
        };

        this.getPosition = function() {
            return {'x':x, 'y':y };
        };

        this.getX = function() { return x; };
        this.getY = function() { return y; };

        this.print = function() {
            console.log('[ Food pos:(' + x + ', ' + y + ') ]');
        };
    };
}