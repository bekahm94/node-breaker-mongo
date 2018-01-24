console.log('client-side running');

let dead = false;

//declaring the variable types for the paddle
function Player(width, height, x, y,  speed, col){
    
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.col = col;
}

//decalring the variable types for the ball
function Ball(x, y, radius, vx, vy, col){
    
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.vx = vx;
    this.vy = vy;
    this.col = col;
}


let score = 0;//how many bricks have been hit by the player
//let gameScore = score; //the final score of the player
let lives = 3; //the amount of lives given to the player

let startSpeed = 4;
let xSpeed = startSpeed;
let ySpeed = startSpeed;
let ydirection = 1;//the movement in the y direction
let xdirection = 1;//the movement in x direction

let brickWidth = 100;
let brickHeight = 20;
let bounced = false;

let player = new Player(100, 20, 200, 500, 5, '#C6A5DF');//initialize the player
let ball = new Ball(250, 340, 20, 5, 5, '#C6A5DF');//initialize the ball
let bricks;//initialize the array that will store all the bricks

function setup(){
    
    createCanvas(canvasWidth = 600, canvasHeight = 600);// creating the cnavas with a width and height of 600
    background('slategrey');// displaying the canvas with a background colour of slategrey
    
    createBrick();// reading in the makeBrick function so as to create the bricks
    
    button = createButton('Restart');
    button.position(20, 550);
    button.mousePressed(startOver);
    button.style('background', '#B0E2FF');
}

function draw(){
    
    background('slategrey');// to make it look like the ball and paddle are moving by deleting the purple colour that follows the path
    
    if(!dead){
        
        drawPlayer();// display the player on the screen
        drawBall();// display the ball on the screen
        drawBricks();// display the bricks on the screen
        drawLives(); // display the lives on the screen
        drawScore();// display the scores on the screen
    }
}

function createBrick() {
    
    bricks = [5]; // setting the arry to have 5
    
    for(let r = 0; r < 6; r++) {// let r  equal to 0, r is less then 6 then add one to r 
        
        bricks[r] = [5];// r is equal to 5;
        
        for(let c = 0; c < 6; c++) {
            
            bricks[r][c] = [2];
            bricks[r][c][0] = brickWidth * (0 + r) + (r * 10) - 2; // displaying the bricks along the x axis with the distance from the side
            bricks[r][c][1] = brickHeight * (3 + c) + (c * 10) + 5; // displaying the bricks along the y axis with the distance from the bottom and top
            bricks[r][c][2] = true; // displaying the bricks on screen
        }
    }
}

function drawBricks() {
    
    for(let r = 0; r < 6; r++) {
        
        for(let c = 0; c < 6; c++) {
            
            check(r, c, bricks[r][c][0], bricks[r][c][1]); // chcking the rows and columns of the bricks along with their postion along the axis'
            if(bricks[r][c][2]) {
                
                rect(bricks[r][c][0], bricks[r][c][1], brickWidth, brickHeight); // if bricks is equal to 2 then display the brick
            }
        }
    }
}

function check(r, c, bx, by) { // check function checking the rows, columns, brick x and brick y 
    
    if(((ball.x > bx) && (ball.x < bx + brickWidth)) && (ball.y + ball.radius == by || ball.y - ball.radius == by + brickHeight)) { // if ball.x is greater the brick x and ball.x is greater brick x + the width of the brick 
        
		if(bricks[r][c][2]) {
            
			bricks[r][c][2]=false; // 2 is equal to false making the brick disappear along the x axis
			xdirection = -xdirection;// changing the direction of the ball along the x axis
            score++; // adding 1 to the score
		}
	}
    
	if(((ball.y > by) && (ball.y < by + brickHeight)) && (ball.x + ball.radius >= bx && ball.x - ball.radius <= bx + brickWidth)) {  // if ball.y is greater then brick y positon and ball.y is greater then brick y position + the brick height
        
		if(bricks[r][c][2]) { 
            
			bricks[r][c][2]=false; // 2 is equal to false making the brick disappear on the y axis
			ydirection = -ydirection; // changing the direction of the ball on the y axis
            score++; // adding 1 to the score
		}
	}
}

function drawPlayer(){
    
    fill('#C6A5DF');
    rect(player.x, player.y, player.width, player.height);
        
        if(keyIsPressed){
            
            if(keyCode == RIGHT_ARROW &&(player.x < canvasWidth - brickWidth)){ // collisionfor the paddle so that the paddle cannot go further then the canvas. Also allowing the right arrow key to move
                
                player.x += 5; // the paddle moves right with a speed of 5
            }
        }
        
         if(keyIsPressed){
            
            if(keyCode == LEFT_ARROW &&(player.x > 0)){ // collision for the paddle so that the paddle cannot go further then the canvas. Also allowing the left arrow key to move
                
                player.x -= 5; // the paddle moves left with a speed of 5
            }
        }
}


function drawBall() {
    
    fill('#C6A5DF')
	ellipse(ball.x, ball.y, ball.radius, ball.radius);
    
	ball.y += ySpeed * ydirection; // makes the ball drop downward with a speed of 4
    
  if(bounced) { // if the ball bounces
      
	   ball.x += xSpeed * xdirection; // the direction of the ball on the x axis
  }
    
	bounce(); // reading in the bounce function
    
	if((ball.x + ball.radius > canvasWidth) || (ball.x - ball.radius < 0)) { // ball collision for the canvaswidth
        
		xdirection = -xdirection; // changes x direction
	}
    
	if(ball.y - ball.radius < 0) {// ball collision for the canvas height
        
		ydirection = -ydirection; // changes y direction
	}
    
  if(ball.y + ball.radius > player.y + brickHeight) {// collision for the bottom of the canvas. If the balls y position is less then the player(paddle)
      lives -=1;// lose a life
      reset();// reset the position of the ball
  }
}

function bounce() {
    
	if((ball.x > player.x) && (ball.x < player.x + brickWidth)) { // if the ball.x is greater then the player.x and 
        
		if(ball.y + ball.radius == player.y) {// if the ball.y position + the radius is equal to the player y position
            
      if (!bounced) {// not bounced
          
        xSpeed = 4;// the speed of the ball go along the x axis
        ySpeed = 4;// the speed of the ball going along the y axis
        bounced = true;// bounced is equal to true allowing the ball to bounce
      }
            
			ydirection = -ydirection;// causing it to change its direction going upward
		}
	}
}


function drawLives(){
    
    textSize(20);// the size of the font displayed on the screen
    text("Lives: ", 400, 30);// the text that will appear along with its x and y position
    text(lives, 480, 30);// the variable that will appear beside the lives text along with its x and y postion
    
    if(lives <= 0 && !dead){// if lives is equal to 0
        dead = true;
        gameOver();// initiate the gameOver function
    }
        
}

function gameOver(){
    
    //let total = score;
    
    fill('#FF0000');// the red colour of the text being displayed
        textSize(50);// the size of the font
        text("GAME OVER", 150, 300);// the text to appear along with the x and y positions
        text("Game Score: ", 120, 400);// the text to appear along with the x and y positions
        text(score, 450, 400);// the variable that will appear beside the game score text along with its x and y position
        
    
    
    // database code to store the score in the database
    fetch('/scores', {method: 'POST'})
        
    .then(function(response){
            
        if(response.ok) {
            
            console.log('score was recorded');
            return;
        }
            
        throw new Error('Request failed.');
    })
    .catch(function(error){
        console.log(error);
    })
}


//function youWin(){
//    
//    //let total = score;
//   fill('#FF0000');
//        textSize(50);
//        text("YOU WIN", 150, 300);
//        text("Game Score: ", 120, 400);
//        text(score, 450, 400);
//      
          
        
//        fetch('/scores', {method: 'POST'})
//        
//    .then(function(response){
//            
//        if(response.ok) {
//            
//            console.log('score was recorded');
//            return;
//        }
//            
//        throw new Error('Request failed.');
//    })
//    .catch(function(error){
//        console.log(error);
//    })
//}

function drawScore(){
    
    textSize(20);// the size of the font 
    text("Score: ", 10, 30);// the text to be displayed along with the x and y position
    text(score, 80, 30);// the variable to appear beside the score text along with its x and y position
    
}

function reset(){
    
    ball.x = 600/2;// resets the ball x position to the centre
    ball.y = 600/2;// resets the ball y position to the centre
//    player.x = 300 - brickWidth/2;
//    player.y = 500 - brickHeight/2;
    bounced = false;// resets the bounce boolean to false as it has not hit anything yet
 
    
}

function startOver(){
    dead = false;
    lives = 3;
    reset();
}