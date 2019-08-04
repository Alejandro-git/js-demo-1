let div1 = document.createElement('div');
div1.classname = 'demo'

document.body.appendChild(div1);

var dragging = false

var lastX
var lastY

div1.onmousedown = function (e) {
    // console.log('原始位置')
    // console.log(e.clientX, e.clientY)
    lastX = e.clientX
    lastY = e.clientY
    dragging = true
}

// console.log(1)
document.onmousemove = function (e) {
    if (dragging === true) {
        //使用onclick时，实现鼠标点哪div在哪。；使用onmousemove时，实现鼠标托着移动。
        // console.log(2)
        console.log(lastX, lastY)
        console.log(e.clientX, e.clientY)
        var deltaX = e.clientX - lastX
        var deltaY = e.clientY - lastY
        // div1.style.top = '10px'
        // div1.style.left = '20px'
        var top = parseInt(div1.style.top) || 0
        var left = parseInt(div1.style.left) || 0
        // div1.style.top = e.clientY + 'px'
        // div1.style.left = e.clientX + 'px'
        div1.style.top = top + deltaY + 'px'
        div1.style.left = left + deltaX + 'px'
        // js中的style只能取内联样式，不能取css中的样式。
        lastX = e.clientX
        lastY = e.clientY
        // 将X,Y位置更新为最新的
    }

}

document.onmouseup = function () {
    dragging = false
}
