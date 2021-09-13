
function benchmark() {
	let start = new Date();
	for(let i = 0; i < 5000; i++) {
		addCoin();
		console.log('#' + i + ' gehad');
	}
	let end = new Date();
	let diff = end - start;

	console.log(diff);
}


function addCoin() {
	// 1. omslachtig lelijk maar wel snel - document.createElement()
	
	// let newTr = document.createElement('tr');

	// let newTdCode = document.createElement('td');
	// let codeTextNode = document.createTextNode('SOL');
	// newTdCode.appendChild(codeTextNode);
	// newTr.appendChild(newTdCode);

	// let newTdDescription = document.createElement('td');
	// let descriptionTextNode = document.createTextNode('Solana');
	// newTdDescription.appendChild(descriptionTextNode);
	// newTr.appendChild(newTdDescription);

	// let newTdPrice = document.createElement('td');
	// let priceTextNode = document.createTextNode('$160.00');
	// newTdPrice.appendChild(priceTextNode);
	// newTr.appendChild(newTdPrice);

	// let newTdLogo = document.createElement('td');
	// let logo = document.createElement('img');
	// logo.setAttribute('src', 'https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png');
	// newTdLogo.appendChild(logo);
	// newTr.appendChild(newTdLogo);

	// document.querySelector('table tbody').appendChild(newTr);


	// 2. kort lelijk en traag - .innerHTML
	// document.querySelector('table tbody').innerHTML += `<tr>
	// 	<td>SOL</td>
	// 	<td>Solana</td>
	// 	<td>$165.00</td>
	// 	<td><img src="https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png"></td>
	// </tr>`;



	// 3. kort overzichtelijk en snel - <template>

	let template = document.querySelector('#coin-template').content;

	// future stuff
	// template.CreateInstance({
	// 	description: '...',
	// 	value: '...',
	// 	logo: '...'
	// });

	let clone = template.cloneNode(true);

	clone.querySelector('.code').innerText = 'SOL';
	clone.querySelector('.description').innerText = 'Solana';
	clone.querySelector('.value').innerText = '170.00';
	clone.querySelector('.logo').setAttribute('src', 'https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png');

	document.querySelector('table tbody').appendChild(clone);
}


/* 
Angular
Vue
React
Svelte


Blazor (Microsoft C#) - WebAssembly
=> 7.5MB
- unittesten


TDD?

*/