const fs = require('fs');

writeFile = (data) =>  {
    fs.writeFileSync("src/result/custData.csv", data.toString());
}

readFile = () => {
    console.log("***********");
    let tooYoungCust = [];
    const custData = fs.readFileSync("src/result/custData.csv", "utf-8").toString().split("\n");
    for(let i = 1; i < custData.length-1; i++) {
        let birthDate = custData[i].split(" ")[1];
        
        if (`${birthDate}`.substring(0,4) * 1 > 2002) {
            tooYoungCust.push(i);
        }
    }
    return tooYoungCust;
}

module.exports = { writeFile, readFile };