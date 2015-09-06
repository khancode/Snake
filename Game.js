/**
 * Created by khancode on 9/6/2015.
 */

var $game = new Game();

/* All functions reside in Game() for encapsulation */
function Game()
{
    this.Create = function() {

        var snake;
        var food;
        var ground;
        var speed; // in milliseconds
        var timer;

        init();

        function init() {
            snake = new $snake.Create();
            food = new $food.Create();
            ground = new $ground.Create();
            speed = 750;
            timer = null;
        }

        this.start = function() {
            timer = setInterval(move, speed);
        };

        this.stop = function() {
            clearInterval(timer);
        };

        function move() {

            snake.move();
            ground.refresh(snake.getPositionArr(), food.getPosition());
            ground.print();
            snake.print();
        }
    };
}