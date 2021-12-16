import {randomGridPosition} from './grid.js' 
import {onSnake, snakeGrow} from './snake.js'

let foodPosition = randomGridPosition()

function update() {
    //判断蛇头是否碰到食物
    if(onSnake(foodPosition)) {
        //蛇生长
        snakeGrow()
        var position = randomGridPosition()
        foodPosition = position
    }
}

function draw(gameBoard) {
    var foodElement = document.createElement('div')
    foodElement.style.gridRowStart = foodPosition.x
    foodElement.style.gridColumnStart = foodPosition.y
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
}

export {update, draw}