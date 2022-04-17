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

	for (let i = 0; i < custCnt; i++) {
		custData = getCust();
	}
	console.log(`${input}명 생성되었습니다.`);
	rl.close();

	writeFile(custData);
	let tooYoungCust = readFile();
	console.log(tooYoungCust);
	let moreCustCnt = tooYoungCust.length;

	for (let j = tooYoungCust.length - 1; j >= 0; j--) {
        custData.splice(tooYoungCust[j], 1);
	}

	for (let k = 0; k < moreCustCnt; k++) {
		getCust();
		//파일에 추가로 쓰여지지 않은 상태
	}
	
	console.log(`${moreCustCnt}명 더 생성되었습니다.`);
});

