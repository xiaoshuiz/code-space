// 获取所有dom
document.querySelectorAll('*')
// 获取selection起点
document.getSelection().getRangeAt(0).startContainer.parentNode
// 获取selection终点
document.getSelection().getRangeAt(0).endContainer.parentNode
// 遍历所有比对 获取中间的dom节点，通过node.isSameNode()判断