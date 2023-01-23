function sortedFrequency(arr, target) {
	let count = 0;
	arr.forEach((num) => (num === target ? count++ : null));
	if (count) return count;
	return -1;
}

module.exports = sortedFrequency;
