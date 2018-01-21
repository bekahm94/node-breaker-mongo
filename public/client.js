console.log('client-side running');

/*let score = 0;

//let scoreDisplay;

function scoreText(x = 50, y = 40, font = 'Verdanna', col = '#C6A5DF') {
    
    this.x = x;
    this.y = y;
    this.font = font;
    this.col = col;
       
    this.draw = function() {
        
        fill(this.col);
        text('Score: ', this.x, this.y, this.font);
        textSize(18);
    };
}

//let lives = 3;
let liveTextDisplay;

function lifeText(x = 450, y = 40, font = 'Verdanna', col = '#C6A5DF', numLives = 3) {
    
    this.x = x;
    this.y = y;
    this.font = font;
    this.col = col;
    this.numLives = numLives;
    
    this.draw = function() {
        
        fill(this.col);
        text('Life: ' + numLives, this.x, this.y, this.font);
        textSize(18);
    };
}

let ball;

let xPos = 600/2;
let yPos = 400/2;

let bx = 250;
let by = 340;
let bounced = false;
let radius = 20;

let px = 200;
let py = 350;
let pwidth = 100;
let pheight = 20;

let vx = (-4, 4);
let vy = (-4, 4);

function Circle(bx = 250, by = 340, radius = 20, col = '#C6A5DF') {
    
    this.bx = bx;
    this.by = by;
    this.radius = radius;
    this.col = col;
    this.vx = random(-4,4);
    this.vy = random(-4,4);
    
    this.draw = function() {
        
        fill(this.col);
        ellipse(this.bx, this.by, this.radius);
        
        //movement
        this.bx += this.vx;
        this.by += this.vy;
        
        //collision detection
        //collision detection for the sides
         if(this.bx + this.vx > canvasWidth - radius || this.bx + this.vx < radius){
            
            this.vx = -this.vx;
         }
        
        if(this.by + this.vy > canvasHeight - radius || this.by + this.vy < radius){
            
            this.vy = -this.vy;
        }
        
        if((this.bx > px) && (this.bx < px + brickWidth)){
            if(this.by + radius === py){
                
                if(!bounced){
                    
                    this.vx = -this.vx;
                    this.vy = -this.vy;
                    bounced = true;
                    
                }
                
                yDirection = -yDirection;
            }
        }
    };
        
    
}

//ball.checkCollision(paddle);

let paddle;

function Pad(px = 200, py = 350, pwidth = 100, pheight = 20, col = '#C6A5DF') {
    
    this.px = px;
    this.py = py;
    this.pwidth = pwidth;
    this.pheight = pheight;
    this.col = col;
    
    this.draw = function() {
        
        fill(this.col);
        rect(this.px, this.py, this.pwidth, this.pheight);
        
        if(keyIsPressed){
            
            if(keyCode == RIGHT_ARROW &&(this.px < canvasWidth - brickWidth)){
                
                this.px += 5;
            }
        }
        
         if(keyIsPressed){
            
            if(keyCode == LEFT_ARROW &&(this.px > 0)){
                
                this.px -= 5;
            }
        }
    };
}


let brickWidth = 100;
let brickHeight = 20;

let yDirection = 1;
let xDirection = 1;

let blocks = [];
let sBlockDisplay;

/*function singleBlock(xPos = 40, yPos = 60, brickWidth = 100, brickHeight = 20, col = '#C6A5DF') {
    
    this.xPos = xPos;
    this.yPos = yPos;
    this.brickWidth = brickWidth;
    this.brickHeight = brickHeight;
    this.col = col;
    
    this.draw = function(){
        
        fill(this.col);
        rect(this.xPos, this.yPos, this.brickWidth, this.brickHeight);
    };
    
    
}*/

/*let rows = 5;
let columns = 5;

let total = rows*columns;


function makeBlocks(xPos = canvasWidth/2, yPos = canvasHeight/2, brickWidth = 100, brickHeight = 20, col = '#C6A5DF'){
    
    this.xPos = xPos;
    this.yPos = yPos;
    this.brickWidth = brickWidth;
    this.brickHeight = brickHeight;
    this.col = col;
    
    blocks = [5];
    
    for(let r = 0; r < 6; r++){
        
        blocks[r]=[5];
        
        for(let c = 0; c < 6; c++){
            
            blocks[r][c] = [2];
            blocks[r][c][0] = this.brickWidth * (0 + r) + (r * 10) - 2;
            blocks[r][c][1] = this.brickHeight * (3 + c) + (c * 10) + 5;
            blocks[r][c][2] = true;
        }
    }
    
    this.draw = function(){
        
        for(let r = 0; r < 6; r++){
            
            for(let c = 0; c < 6; c++){
                
              // check(r, c, blocks[r][c][0], blocks[r][c][1]);
                
                if(blocks[r][c][2]){
                    
                    rect(blocks[r][c][0], blocks[r][c][1], this.brickWidth, this.brickHeight);
                }
            }
            
            //this.check(r, c, bx, by){
                
                
            //}
        }
        
    };
}

function setup() {
    
    createCanvas(canvasWidth = 600, canvasHeight = 400);
    background('slategrey');
    
    ball = new Circle();
    paddle = new Pad();
    score = new scoreText();
    liveTextDisplay = new lifeText();
    sBlockDisplay = new makeBlocks();
}

function draw() {
    
    background('slategrey');
    //stroke('#C6A5DF');
    //strokeWeight(5);
    
    ball.draw();
    paddle.draw();
    score.draw();
    liveTextDisplay.draw();
    sBlockDisplay.draw();
    
}

*/
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

function makeBrick(){
    
    brick = [5];
    
    for(let r = 0; r < 6; r++){
       
        brick[r] = [5];
        
        for(let c = 0; c < 6; c++){
            
            brick[r][c] = [2];
            
            brick[r][c][0] = brickWidth * (1 + r) + (r * 10) - 2;
            
            brick[r][c][1] = brickHeight * (3 + c) + (c * 10) + 5;
        }
    }
}

let rows = 5;//the amount of brick rows
let columns = 5;//the amount of brick columns
let total = rows*columns;//the total number of bricks
let score = 0;//how many bricks have been hit by the player
let gameScore = 0; //the final score of the player
let lives = 5; //the amount of lives given to the player

let ydirection = 1;//the movement in the y direction
let xdirection = 1;//the movement in x direction

let brickWidth = 100;
let brickHeight = 20;
let bounced = false;

let player = new Player(100, 20, 200, 500, 5, '#C6A5DF');//initialize the player
let ball = new Ball(250, 340, 20, 5, 5, '#C6A5DF');//initialize the ball
let brick = [];//initialize the array that will store all the bricks

function setup(){
    
    createCanvas(canvasWidth = 600, canvasHeight = 600);
    background('slategrey');
    
    makeBrick();
}

function draw(){
    
    background('slategrey');
    
    drawPlayer();
    drawBall();
    drawBrick();
    drawLives(); 
    drawScore();
}

function drawPlayer(){
    
    fill('#C6A5DF');
    rect(player.x, player.y, player.width, player.height);
        
        if(keyIsPressed){
            
            if(keyCode == RIGHT_ARROW &&(player.x < canvasWidth - brickWidth)){
                
                player.x += 5;
            }
        }
        
         if(keyIsPressed){
            
            if(keyCode == LEFT_ARROW &&(player.x > 0)){
                
                player.x -= 5;
            }
        }
}


function drawBrick(){
    
    for(let r = 0; r < 6; r++){
        
        for(let c = 0; c < 6; c++){
            
            if(brick[r][c][2]){
                
                rect(brick[r][c][0], brick[r][c][1], brickHeight, brickWidth, player.col);
            }
        }
    }
}
function drawBall(){
    
    fill('#C6A5DF');
   ellipse(ball.x, ball.y, ball.radius);
        ball.y += ball.vy * ydirection;
    
    if(bounced){
        
        ball.x += ball.vx * xdirection;
    }
    bounce();
        if((ball.x + ball.radius > canvasWidth) || (ball.x - ball.radius < 0)){
        
        xdirection = -xdirection;
        
    }
    
    if(ball.y - ball.radius < 0){
        
        ydirection = -ydirection;
    }
    
    if(ball.y + ball.radius > player.y + brickHeight){
        
        lives -= 1;
        
    }
}

function bounce(){
    
    if((ball.x > player.x)&&(ball.x < player.x + brickWidth)){
        
        if(ball.y + ball.radius === player.y){
            
            if(!bounced){
                
                bounced = true;
            }
            
            ydirection = -ydirection;
        }
    }
}

function drawLives(){
    
    textSize(20);
    text("Lives: ", 400, 30);
    text(lives, 480, 30);
    
}

function drawScore(){
    
    textSize(20);
    text("Score: ", 10, 30);
    text(score, 80, 30);
}

function reset(){
    
    ball.x = ball.x;
    ball.y = ball.y;
    player.x = player.x;
    player.y = player.y;
    bounced = false;
    
}
