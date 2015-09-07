/**
 * Created by khancode on 9/6/2015.
 */

var $game = new Game();

/* All functions reside in Game() for encapsulation */
function Game()
{
    this.GOOD_STATE = 'GS';
    this.FOOD_STATE = 'FS';
    this.BAD_STATE = 'BS';

    /* Creates a new object for game */
    this.Create = function() {

        var snake;
        var food;
        var ground;
        var draw;
        var speed; // in milliseconds
        var timer;
        var score;

        init();

        function init() {
            snake = new $snake.Create();
            food = new $food.Create();
            ground = new $ground.Create();
            draw = new $draw.Create();
            speed = 80;
            timer = null;
            score = 0;

            ground.refresh(snake.getPositionArr(), food.getPosition());
        }

        this.start = function() {
            timer = setInterval(move, speed);
        };

        this.stop = function() {
            clearInterval(timer);
        };

        function gameOver() {
            clearInterval(timer);
            console.log('Game Over!');
        }

        function move() {
            // TODO call snake.move() before ground.checkCollision()
            var nextMove = snake.determineNextMove();
            var state = ground.checkCollision(nextMove);

            if (state == $game.GOOD_STATE) {
                snake.move(nextMove);
            }
            else if (state == $game.FOOD_STATE) {
                score += 100;
                snake.growSnake(nextMove);
                food.respawn(snake.getPositionArr());
                console.log('Score: ' + score);
            }
            else if (state == $game.BAD_STATE) {
                gameOver();
            }
            else
                throw "This is not a valid state '" + state + "'";

            ground.refresh(snake.getPositionArr(), food.getPosition());
            //ground.print();
            //snake.print();

            draw.paint(snake.getPositionArr(), food.getPosition());
        }
    };
}