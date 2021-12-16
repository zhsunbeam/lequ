//游戏得分
let score = 0

//游戏分数元素
let scoreElement = document.getElementById('score')
//蛇速度显示元素
let speedElement = document.getElementById('speed')

//更新得分
function updateScore(n) {
    score += n
    scoreElement.innerText = score
}

function updateSpeed(speed) {
    speedElement.innerText = speed
}

export {updateScore,updateSpeed}