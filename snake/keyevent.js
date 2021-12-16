let inputDirection = {
    x: 0, y: 0
}
let lastInputDirection = {
    x: 0, y: 0
}
let headDirection;


//监听键盘按钮事件
window.addEventListener('keydown', e=>{
    
    switch(e.key) {
        case 'ArrowUp': 
        inputDirection = {x : -1, y : 0}
        headDirection = '-90deg'
        break    
        case 'ArrowDown':
        inputDirection = {x : 1, y : 0}
        headDirection = '90deg'
        break
        case 'ArrowLeft':
        inputDirection = {x : 0, y : -1}
        headDirection = '-180deg'
        break
        case 'ArrowRight':
        inputDirection = {x : 0, y : 1}
        headDirection = '0deg'
        break
    }
})

function getInputDirection() {
    return inputDirection
}
function getHeadDirection() {
    return headDirection
}

export {getInputDirection, getHeadDirection}