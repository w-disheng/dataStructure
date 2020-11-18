/* this will the exercises of "stack"
-Disheng Wang */

// stack class

function Stack() {
  let items = []
  
  this.push = function(value) {
    items.push(value)
  }
  
  this.pop = function() {
    return items.pop()
  }
  
  this.top = function() {
    return items[items.length - 1]
  }
  
  this.isEmpty = function() {
    return items.length === 0
  }
  
  this.size = function() {
    return items.length
  }
  
  this.clear = function() {
    items = []
  }
}

// practice one, canceling parenthesis
function checkEqualParenthesis(str) {
  const stack = new Stack()
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push(str[i])
    } else if (str[i] === ")"){
      if (stack.isEmpty()) {
        return false
      } else {
        stack.pop()
      }
    }
  }
  return stack.isEmpty()
}
// console.log(checkEqualParenthesis("sdf(ds(ew(we)rw)rwqq)qwewe"))
// console.log(checkEqualParenthesis("sdf(ds(ew(we)rw)rwqq)qwewe("))
// console.log(checkEqualParenthesis("(sd(qwqw)sd(sd))"))

// practice 2 - postfix expression

function calc_exp(exp) {
  const stack = new Stack()
  
  for (let i of exp) {
    if (["+", "-", "*", "/"].indexOf(i) >= 0) {
      let first = stack.pop()
      let second = stack.pop()
      let combine = second + i + first;
      let result  = parseInt(eval(combine))
      stack.push(result.toString())
      } else {
        stack.push(i)
      }
  }
  return stack.pop()
}

const exp_1 = ["4", "13", "5", "/", "+"]

const exp_2 = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]

// console.log(calc_exp(exp_1))
// console.log(calc_exp(exp_2))

// practice 3 - implement min method in stack, the time complexity is 0(1).

function StackTwo() {
  let dataStack = []
  let minStack = []
  
  this.push = function(value)   {
    dataStack.push(value)
    if (minStack.length === 0) {
      minStack.push(value)
    } else {
      if (value < minStack[minStack.length - 1]) {
        minStack.push(value)
      } else {
      minStack.push(minStack[minStack.length - 1])
    }
    } 
  }
  
  this.pop = function() {
    return dataStack.pop()
  }
  
  this.top = function() {
    return dataStack[dataStack.length - 1]
  }
  
  this.isEmpty = function() {
    return dataStack.length === 0
  }
  
  this.size = function() {
    return dataStack.length
  }
  
  this.clear = function() {
    dataStack = []
  }
  
  this.min = function() {
    return minStack[minStack.length - 1].toString()
  }
}

const testStack = new StackTwo
testStack.push(32)
testStack.push(5)
testStack.push(12)
console.log(testStack.min())

// practice 4 - mid expression to postExpress

 