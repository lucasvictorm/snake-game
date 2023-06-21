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

window.onload = () =>{
    quadro = document.getElementById("quadro")
    quadro.width = blockSize * cols;
    quadro.height = blockSize * rows;
    ctx = quadro.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 500, 500);
    
    snake.push()
    console.log(snake)
    placeFood();
    drawSnake();
    document.addEventListener("keyup", changeDirection);
    //update()
    //setInterval(update, 1000/10)
}

function update(){
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 500, 500);
    
    
    
    ctx.fillStyle = "red";
    ctx.fillRect(foodX, foodY, blockSize, blockSize)
    moveSnake();
    
    snake[0] = [snakeX, snakeY];
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;
    console.log(snake)
    
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
    //console.log(key)
    switch(key){
        case "w" || "W":

        
    }
}