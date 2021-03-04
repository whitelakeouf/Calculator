let currentOperand = document.querySelector(".current-operand")
let previousOperand = document.querySelector(".previous-operand")

function insert(num) {
	currentOperand.innerHTML += num
}

function clean() {
	currentOperand.innerHTML = ""
	previousOperand.innerHTML = ""
}

function back() {
	let exp = currentOperand.innerHTML
	currentOperand.innerHTML = exp.slice(0, exp.length - 1)
}

function operation() {
	let op = currentOperand.innerHTML.slice(-1)
	let exp = currentOperand.innerHTML
	if (exp != op) {
		previousOperand.innerHTML += exp
		currentOperand.innerHTML = ""
	}
	else {
		currentOperand.innerHTML = ""
	}
}

function equal() {
	let exp = previousOperand.innerHTML + currentOperand.innerHTML
	if (exp) {
		currentOperand.innerHTML = eval(exp)
		previousOperand.innerHTML = ""
	}
}
