// import {getCust} from 'createCustomer.js';
const { getCust } = require('./src/create/newCust.js');
const { readFile } = require('./src/write/writeCustData.js');

const readline = require('readline')
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

rl.question("고객을 몇 명 생성하시겠습니까?: ", (input) => {
	let custCnt = input;
	let custData = [];
	// custData[0] = `custId custBirthDate \n`;

	for (let i = 0; i < custCnt; i++) {
		custData = getCust();
	}
	console.log(`${input}명 생성되었습니다.`);
	// rl.close();

	writeFile(custData);
	// let tooYoungCust = readFile();
	// let moreCustCnt = tooYoungCust.length;

	// for (let j = tooYoungCust.length - 1; j >= 0; j--) {
    //     custData.splice(tooYoungCust[j], 1);
	// }

	// for (let k = 0; k < moreCustCnt; k++) {
	// 	custData.push(getCust());
	// }
	
	// console.log(`${moreCustCnt}명 더 생성되었습니다.\n`);

	getTxDt();
});

getTxDt = () => {
	console.log("계약일(YYYYMMDD) 한도액 차입일(YYYYMMDD) 차입액");
	let inputData = []; //계약일, 한도액, 차입일, 차입액

	rl.on("line", function(line) {
		inputData.push(line);
		console.log(inputData);
		rl.close();
	})
	rl.on("close", function() {
		process.exit()
	})
}