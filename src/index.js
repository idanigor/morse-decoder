const MORSE_TABLE = {
	'.-': 'a',
	'-...': 'b',
	'-.-.': 'c',
	'-..': 'd',
	'.': 'e',
	'..-.': 'f',
	'--.': 'g',
	'....': 'h',
	'..': 'i',
	'.---': 'j',
	'-.-': 'k',
	'.-..': 'l',
	'--': 'm',
	'-.': 'n',
	'---': 'o',
	'.--.': 'p',
	'--.-': 'q',
	'.-.': 'r',
	'...': 's',
	'-': 't',
	'..-': 'u',
	'...-': 'v',
	'.--': 'w',
	'-..-': 'x',
	'-.--': 'y',
	'--..': 'z',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'-----': '0',
}

//* coding --------------------------------------------------------------------------------------------------------

// function code(expr) {
// 	let result = []
// 	let array = []
// 	for (let i = 0; i < expr.length; i++) {
// 		if (expr[i] === ' ') {
// 			result += '**********'
// 		} else {
// 			for (var key in MORSE_TABLE) {
// 				if (expr[i] === MORSE_TABLE[key]) {
// 					for (let j = 0; j < key.length; j++) {
// 						if (key[j] === '.') {
// 							array.push('10')
// 						} else {
// 							array.push('11')
// 						}
// 					}
// 					while (array.join('').length < 10) {
// 						array.unshift('0')
// 					}
// 					result += array + ','
// 					array = []
// 				}
// 			}
// 		}
// 	}
// 	return result.split(',').join('')
// }

//* decoding --------------------------------------------------------------------------------------------------------

function decode(expr) {
	let result = ''
	let array = ''
	let string = ''
	let arrResult
	for (let i = 0; i < expr.split('').length; i = i + 10) {
		let arr10 = expr.slice(i, i + 10).split('')
		if (arr10.join('') === '**********') {
			result += ' '
			string = ''
		} else {
			for (let j = 0; j < 10; j = j + 2) {
				if (arr10[j] > 0) {
					arrResult = arr10[j] + arr10[j + 1]
					if (arrResult === '10') {
						array += '.'
					} else {
						array += '-'
					}
				}
				for (var key in MORSE_TABLE) {
					if (key === array) {
						string = MORSE_TABLE[key]
					}
				}
			}
		}
		result += string
		array = ''
	}
	return result
}

module.exports = {
	decode,
}
