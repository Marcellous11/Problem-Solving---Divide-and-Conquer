function countZeroes(arr) {
	let numOfZero = 0;
	arr.forEach((num) => (num === 0 ? numOfZero++ : null));
	return numOfZero;
}

module.exports = countZeroes;
