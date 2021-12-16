import { getInputDirection,getHeadDirection } from "./keyevent.js"
import { updateScore,updateSpeed} from "./settings.js"

/* 定义常量表示蛇的移动速度 */
export let SNAKE_SPEED = 1

//初始蛇的身体大小为0
let newSegment = 0
const SNAKE_GROW = 1

const snakeBody = [
    {x : 11, y : 11},
]

//食物和蛇头位置相等
function equalsPosition(position1, position2) {
    return position1.x === position2.x && position1.y === position2.y
}

function addNewSegment() {
    for(let i=0;i<newSegment; i++) {
        snakeBody.push({...snakeBody[snakeBody.length-1]})
    }
    newSegment = 0
}

/* 更新蛇的长度 */
function update() {

    addNewSegment()
    // console.log('update')
    //获取新的移动方向
    var inputDirection = getInputDirection()
    for (let i=snakeBody.length-2; i>=0; i--) {
        snakeBody[i+1] = {...snakeBody[i]}
    }
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}

function draw(gameBoard) {

    /* for(var i=0;i<=snakeBody.length;i++) {
        //console.log('draw')
        //创建一个div表示蛇
        const snakeElement = document.createElement('div')
        //设置元素的样式
        snakeElement.style.gridRowStart = snakeBody[i].y
        snakeElement.style.gridColumnStart = snakeBody[i].x
        snakeElement.style.backgroundColor = 'hsl(200,100%,50%)'
        snakeElement.style.border = '.25vmin solid black'
        gameBoard.appendChild(snakeElement)
    } */

    //使用ES6中的forEach遍历snakeBody数组
    snakeBody.forEach((segment,index)=>{
        
        //创建一个div表示蛇
        const snakeElement = document.createElement('div')
        //设置元素的样式
        snakeElement.style.gridRowStart = segment.x
        snakeElement.style.gridColumnStart = segment.y
        if(index == 0) {
            snakeElement.classList.add('snake-head')
            snakeElement.style.transform = 'rotate('+getHeadDirection()+")"
        }
        else {
            snakeElement.classList.add('snake-body')
        }
        //snakeElement.className = 'snake'
        //snakeElement.style.backgroundColor = 'hsl(200,100%,50%)'
        //snakeElement.style.border = '.25vmin solid black'
        gameBoard.appendChild(snakeElement)
    })  
}

function snakeGrow() {
    
	newSegment += SNAKE_GROW
	
    SNAKE_SPEED += 1
    updateScore(1)
    updateSpeed(SNAKE_SPEED)

}

//获取蛇头坐标位置
function getSnakeHead() {
    return snakeBody[0]
}

function snakeIntersection() {
    return onSnake(snakeBody[0], {ignoreHead:true})
}

//判断蛇头是否碰到食物
function onSnake(position, {ignoreHead=false} = {} ) {
    //使用数组的some函数遍历蛇的body除了head, 如果只有head就返回false
    return snakeBody.some((segment,index)=>{
        if(ignoreHead && index ===0) {
            return false
        }
        //判断位置坐标是否重合
        return equalsPosition(segment, position)
    })

    /*if(equalsPosition(snakeBody[0],position)) {
        newSegment = SNAKE_GROW
        return true
    }*/
}


export {update, draw, onSnake,snakeGrow, getSnakeHead, snakeIntersection}