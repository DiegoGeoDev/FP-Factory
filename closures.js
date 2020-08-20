let wallet_price = '1 Real';

function getWalletPrice() {
	console.log(wallet_price);
}

getWalletPrice(); // 1 Real

wallet_price = '2 Reais';

function changeWalletPrice() {
	wallet_price = '3 Reaix!!!';
}

getWalletPrice(); // 2 Reais
changeWalletPrice();
getWalletPrice(); // 3 Reaix!!!
