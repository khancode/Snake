/**
 * Created by khanc on 9/5/2015.
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

        init();

        function init() {
            head = new Square(5, 5);
            var mid = new Square(4, 5);
            tail = new Square(3, 5);

            head.setNext(mid);
            mid.setPrev(head);
            mid.setNext(tail);
            tail.setPrev(mid);

            direction = 'right';

            console.log('snaked initialized! :D');
        }

        this.move = function () {

            var xDiff = 0;
            var yDiff = 0;

            switch (direction)
            {
                case LEFT:
                    xDiff = -1;
                    break;
                case RIGHT:
                    xDiff = 1;
                    break;
                case UP:
                    yDiff = -1;
                    break;
                case DOWN:
                    yDiff = 1;
                    break;
            }

            var xPosNewHead = head.getX() + xDiff;
            var yPosNewHead = head.getY() + yDiff;

            push(dequeue());

            head.setX(xPosNewHead);
            head.setY(yPosNewHead);

            console.log('move successful');
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

        this.setDirection = function(newDirection) {

            if (newDirection != LEFT && newDirection != RIGHT && newDirection != UP && newDirection != DOWN)
                throw "Not a valid direction input '" + newDirection + "'\n" +
                      'Valid values are: ' + LEFT + ', ' + RIGHT + ', ' + UP + ', ' + DOWN;

            direction = newDirection;
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
    function Square(x, y) {
        var x = x;
        var y = y;
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