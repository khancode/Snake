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

            x = Math.floor((Math.random() * 10) + 1);
            y = Math.floor((Math.random() * 10) + 1);
        };

        this.getX = function() { return x; };
        this.getY = function() { return y; };

        this.print = function() {
            console.log('[ Food pos:(' + x + ', ' + y + ') ]');
        };
    };
}