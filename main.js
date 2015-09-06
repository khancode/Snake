/**
 * Created by khanc on 9/5/2015.
 */

var snake = new $snake.Create();

//snake.setDirection('up');
//
//console.log('init');
//snake.print();
//
//console.log('move 1');
//snake.move();
//snake.print();
//
//console.log('move 2');
//snake.move();
//snake.print();

var food = new $food.Create();

console.log('init');
food.print();

console.log('respawn');
food.respawn();
food.print();
