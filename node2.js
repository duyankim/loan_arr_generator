const readline = require('readline')
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

// 여러 줄을 반복해서 입력 받기
// rl.setPrompt("> ")
// rl.prompt()
// rl.on("line", function(line) {
// 	console.log("input: ", line)
// 	switch(line) {
// 		case "quit":
// 			rl.close()
// 		default:
// 			rl.prompt()
// 	}
// })
// rl.on("close", function() {
// 	process.exit()
// })

// 여러 줄을 한번에 입력받기
let input = [];

rl.on('line', function (line) {
    input.push(line);
    	// switch(line) {
        //     case "quit":
        //         input.pop(line);
        //         rl.close()
        //     default:
        //         rl.prompt()
        //     }
  })
  .on('close', function () {
    console.log(input);
    process.exit();
});

// 한 라인에 출력과 입력을 같이 할 수 있다.
// rl.question("아무거나 입력하세요: ", (input) => {
// 	//TODO: 입력 받은 후 할 작업 작성
// 	console.log(`입력한 내용 : ${input}`);
// 	rl.close();	//close()를 호출하지 않으면 무한 반복
// });

let input2 = [];

// console에서 입력 받으면 close되지 않고, file에서 입력 받을 시에 EOF를 만나서 close된다.
rl.on('line', function (line) {
    input2 = line.split(' ').map((el) => parseInt(el));
  })
  .on('close', function () {
    console.log(input2[0] + input2[1]);
    process.exit();
  });