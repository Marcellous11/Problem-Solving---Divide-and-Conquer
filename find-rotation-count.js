function findRotationCount(arr) {
	let count = 1;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < arr[i + 1]) count++;
		if (arr[i] > arr[i + 1]) return count;
	}
	return 0;
}

module.exports = findRotationCount;
