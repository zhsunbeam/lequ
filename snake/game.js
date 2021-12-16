import {SNAKE_SPEED, update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection} from './snake.js'
import {update as updateFood, draw as drawFood} from './food.js'
import {outsideGrid} from './grid.js'

console.log(SNAKE_SPEED)

let lastRenderTime = 0
//游戏是否结束
let gameOver = false

//获取游戏界面元素, 蛇和食物都会要添加到此元素中
var gameBoard = document.getElementById('game-board')

/**
 * 游戏的主函数
 */
function main(currentTime) {

    if(gameOver) {

        let cm = window.confirm('游戏失败，请按F5重新游戏')
        //如果按下确认则cm的值为true, 按下取消则cm值为false
        if(cm) {
            window.location.reload()
        }
        else {

        }
        return 
    }

    //console.log(currentTime)
    window.requestAnimationFrame(main)

    let secondsTime = (currentTime - lastRenderTime) / 1000
    
    if(secondsTime < 1 / SNAKE_SPEED) {
        return 
    }

    lastRenderTime = currentTime

    //更新数据
    update()
    //绘制游戏内容：蛇和食物
    draw()
}

window.requestAnimationFrame(main)


function update() {
    updateFood()
    updateSnake()
    //检查游戏是否结束
    checkGameOver()
}


function draw() {
    gameBoard.innerHTML = ''
    //画蛇
    drawSnake(gameBoard)
    //画食物
    drawFood(gameBoard)
}
//检查蛇是否超出边界
function checkGameOver() {
    gameOver = outsideGrid( getSnakeHead()) || snakeIntersection()
}