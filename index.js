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
	rl.close();

	writeFile(custData);
	let tooYoungCust = readFile();
	let moreCustCnt = tooYoungCust.length;

	for (let j = tooYoungCust.length - 1; j >= 0; j--) {
        custData.splice(tooYoungCust[j], 1);
	}

	for (let k = 0; k < moreCustCnt; k++) {
		custData.push(getCust());
	}
	
	console.log(`${moreCustCnt}명 더 생성되었습니다.\n`);

	getTxDt();
});

let promptQuestion = {
	"arrTxDt" : "계약일은 언제입니까? YYYYMMDD 형태로 써주세요.",
	"lnLmtAmt" : "한도액은 얼마입니까?",
	"dsbsTxDt" : "차입일은 언제입니까? YYYYMMDD 형태로 써주세요.",
	"dsbsAmt" : "차입액은 얼마입니까?"
}

getTxDt = () => {
	console.log(`${promptQuestion.arrTxDt}`);
	let inputData = []; //계약일, 한도액, 차입일, 차입액

	rl.setPrompt("> ")
	rl.prompt()

	rl.on("line", function(line) {
		inputData.push(line);

		if (inputData.length == 1) {
			for (seq in promptQuestion) {
				console.log(`${promptQuestion.seq}`);
				rl.prompt();
				inputData.push(line);
			}
			rl.close();
		}
		
		})
	rl.on("close", function() {
		process.exit()
	})
	console.log(inputData);
}