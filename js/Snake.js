/**
 * Created by khancode on 9/5/2015.
 */

var $snake = new Snake();

/* All functions reside in Snake() for encapsulation */
function Snake()
{
    var LEFT = 'left';
    var RIGHT = 'right';
    var UP = 'up';
    var DOWN = 'down';

    var squareCounter = 0;

    /*
        Creates a new object for snake
            FYI: Represents a doubly linked list
    */
    this.Create = function() {
        // private variables
        var head;
        var tail;
        var direction;

        var moveCompleted;

        init();

        function init() {
            head = new Square(5, 5);
            var mid = new Square(4, 5);
            tail = new Square(3, 5);

            head.setNext(mid);
            mid.setPrev(head);
            mid.setNext(tail);
            tail.setPrev(mid);

            direction = 'left';

            window.onkeydown = function (e) {

                var code = e.keyCode ? e.keyCode : e.which;
                if (code == 37)
                    setDirection(LEFT);
                else if (code == 39)
                    setDirection(RIGHT);
                else if (code === 38) { //up key
                    setDirection(UP);
                } else if (code === 40) { //down key
                    setDirection(DOWN);
                }
            };
        }

        this.determineNextMove = function() {
            var xDiff = 0;
            var yDiff = 0;

            switch (direction)
            {
                case LEFT:
                    yDiff = -1;
                    break;
                case RIGHT:
                    yDiff = 1;
                    break;
                case UP:
                    xDiff = -1;
                    break;
                case DOWN:
                    xDiff = 1;
                    break;
            }

            var xPosNewHead = head.getX() + xDiff;
            var yPosNewHead = head.getY() + yDiff;

            return {'x':xPosNewHead, 'y':yPosNewHead};
        };

        this.move = function (newHeadPosition) {
            push(dequeue());

            head.setX(newHeadPosition.x);
            head.setY(newHeadPosition.y);
        };

        this.growSnake = function (newHeadPosition) {
            var newHead = new Square(newHeadPosition.x, newHeadPosition.y);

            push(newHead);
        };

        function dequeue() {
            var newTail = tail.getPrev();
            tail.setPrev(null);
            tail.setNext(null);
            newTail.setNext(null);

            var oldTail = tail;
            tail = newTail;

            return oldTail;
        }

        function push(newHead) {
            newHead.setPrev(null);
            newHead.setNext(head);
            head.setPrev(newHead);

            head = newHead;
        }

        function setDirection(newDirection) {
            if (newDirection != LEFT && newDirection != RIGHT && newDirection != UP && newDirection != DOWN)
                throw "Not a valid direction input '" + newDirection + "'\n" +
                      'Valid values are: ' + LEFT + ', ' + RIGHT + ', ' + UP + ', ' + DOWN;

            if ( (direction == LEFT && newDirection == RIGHT) ||
                 (direction == RIGHT && newDirection == LEFT) ||
                 (direction == UP && newDirection == DOWN) ||
                 (direction == DOWN && newDirection == UP)   )
                return;

            direction = newDirection;
        }

        /* Returns an array of all square positions of a snake */
        this.getPositionArr = function() {
            var positions = [];

            var cur = head;
            while (cur != null)
            {
                positions.push(cur.getPosition());
                cur = cur.getNext();
            }

            return positions;
        };

        this.print = function() {
            console.log('Head:');
            var cur = head;
            while (cur != null)
            {
                console.log(cur.info());
                cur = cur.getNext();
            }
            console.log(':Tail');
        };

    };

    /*
        Creates a new object
            FYI: Represents a node
    */
    function Square(xPos, yPos) {
        var x = xPos;
        var y = yPos;
        var prev = null;
        var next = null;

        var id = squareCounter++;

        this.info = function() {
            var prevId = null, nextId = null;
            if(prev != null)
                prevId = prev.getId();

            if (next != null)
                nextId = next.getId();

            return '[Square #' + id + ':\n' +
                        '\tpos: (' + x + ', ' + y + '),\n' +
                        '\tprev: ' + prevId + ',\n' +
                        '\tnext: ' + nextId + ',\n' +
                    ']';
        };

        this.getPosition = function() {
            return { 'x':x, 'y':y };
        };

        this.getX = function() { return x; };
        this.getY = function() { return y; };
        this.getPrev = function () { return prev; };
        this.getNext = function () { return next; };
        this.getId = function() { return id; };

        this.setX = function(newX) { x = newX; };
        this.setY = function(newY) { y = newY; };
        this.setPrev = function (newPrev) { prev = newPrev; };
        this.setNext = function (newNext) { next = newNext; };
    }
}