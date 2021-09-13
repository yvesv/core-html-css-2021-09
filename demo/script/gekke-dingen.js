console.log('hoi');

// flexibele taal
// dynamische taal

let x = 14;
x = 'hoi';
x = {};
x = [1, 2, 3];

console.log(x);

console.log('0.1 + 0.2', 0.1 + 0.2);
console.log('0.3 - 0.2', 0.3 - 0.2);
console.log('12.1 * iets', 12.1 * 9);
console.log('12.1 * iets afgerond', Math.round(12.1 * 9));
console.log(
	'12.1 * iets afgerond',
	(12.1 * 9).toFixed(3),
	typeof (12.1 * 9).toFixed(3)
);
console.log('12.1 * iets afgerond', parseFloat((12.1 * 9).toFixed(3)));
console.log(
	'12.1 * iets afronden en converteren met een plusje',
	+(12.1 * 9).toFixed(3)
);

console.log('7 / "bla"', 7 / 'bla');
console.log('NaN == NaN', NaN == NaN);
console.log('"bla" / 7', 'bla' / 7);
console.log('0 / 7', 0 / 7);
console.log('7 / 0', 7 / 0);
console.log('0 / 0', 0 / 0);

let obj = {
	x: 4,
	y: 'hoi',
};
obj.z = 'sdjkf';

let lijstje = [1, 2, 3, 4];
for (let item of lijstje) {
	console.log('item:', item);
}


test(4, 8, 15, 16, 23, 42);

// hoist

function test() {
	console.log('hoi vanaf test');
}
test();

function test(param1, param2) {
	console.log('hoi vanaf test met params:', param1, param2);
}
test(14, 28);
test('hoi');
