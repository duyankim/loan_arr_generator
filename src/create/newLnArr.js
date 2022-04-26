// const readline = require('readline')
// const rl = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout
// })

class Arr {

	constructor(custId, pdCd, lnLmtAmt) {
		this.custId = custId;
		this.pdCd = pdCd;
		this.lnLmtAmt = lnLmtAmt;
	}
}

let arr = new Arr('7665282831', '2', '300');
console.log(arr);