export default () => {
    let stackReg = /at\s.+(?=\s\()/gm
    let callStack = new Error().stack.toString()
    let stack = callStack.match(stackReg)
    stack = stack.slice(3, -3).reverse()
    stack = stack.map(item => item.slice(3))
    return stack.reduce((prev, item, index) => {
        if (index === 0) return prev += item
        else return prev += '.' + item
    }, '')
}