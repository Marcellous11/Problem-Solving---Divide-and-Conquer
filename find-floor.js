function findFloor(arr, target) {
	let val = arr.find((num) => num === target);

	if (!val) {
		let floor = arr.reverse().find((num) => num < target);
		return floor ? floor : -1;
	}
	return val;
}

module.exports = findFloor;
