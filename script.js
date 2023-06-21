let quadro;
let ctx;
let blockSize = 25;
let cols = 20;
let rows = 20;
let snakeX = 100;
let snakeY = 225;
let snake = [
    [75, 225],
    [50, 225]
];
let velocityX = 1 
let velocityY = 0;
let anima;

window.onload = () =>{
    quadro = document.getElementById("quadro")
    quadro.width = blockSize * cols;
    quadro.height = blockSize * rows;
    ctx = quadro.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 500, 500);
    

    placeFood();
    drawSnake();
    document.addEventListener("keyup", changeDirection);
    //update()
    //setInterval(update, 100)
    
}

function update(){

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 500, 500);
    
    if(snakeX == foodX && snakeY == foodY){
        snake.push([foodX, foodY])
        placeFood();
    }
    
    ctx.fillStyle = "red";
    ctx.fillRect(foodX, foodY, blockSize, blockSize)
    moveSnake();
    
    snake[0] = [snakeX, snakeY];
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;
    
    drawSnake();
}

function placeFood(){
     foodX = Math.floor(Math.random() * cols)* blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;
    
}

function drawSnake(){
    ctx.fillStyle="green";
    ctx.fillRect(snakeX, snakeY, blockSize, blockSize)
    for(let i = 0;i < snake.length;i++){
        
        ctx.fillRect(snake[i][0], snake[i][1], blockSize, blockSize)
    }
}

function moveSnake(){
    for(let i = snake.length - 1; i > 0; i--){
       
        snake[i] = snake[i-1];
    }
}

function changeDirection(key){
    console.log(key)
    switch(key.key){
        case "w" || "W":
            velocityY = -1;
            velocityX = 0;
            break;
        case "d" || "D":
            velocityY = 0;
            velocityX = 1;
            break;
        case "s" || "S":
            velocityY = 1;
            velocityX = 0;
            break;
        case "a" || "A":
            velocityY = 0;
            velocityX = -1;
            break;
        
    }
}