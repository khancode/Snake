/**
 * Created by khanc on 9/5/2015.
 */

var $food = new Food();

/* All functions reside in Food() for encapsulation */
function Food()
{
    /* Creates new object for food */
    this.Create = function() {

        var x;
        var y;

        init();

        function init() {
            x = 2;
            y = 2;

            console.log('food initialized! :D');
        }

        this.respawn = function() {

            var lowerBound = 0;
            var upperBound = 9;
            x = Math.floor((Math.random() * upperBound) + lowerBound);
            y = Math.floor((Math.random() * upperBound) + lowerBound);
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