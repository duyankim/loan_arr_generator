// let date = new Date(+(new Date()) - Math.floor(Math.random()*10000000000));
const { writeFile } = require('../write/writeCustData')
getBirthDate = (start, end) => {
    let randomeDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    let year = `${randomeDate.getFullYear()}`;
    let month = `${(randomeDate.getMonth()+1) < 10 ? '0' + (randomeDate.getMonth()+1) : (randomeDate.getMonth()+1)}`;
    let date =  `${(randomeDate.getDate()+1) < 10 ? '0' + (randomeDate.getDate()+1) : (randomeDate.getDate()+1)}`;
    return year + month + date;
}

getCustId = () => {
    return `${Math.random()}`.substring(2,12);
}

let custData = [];
custData[0] = `custId custBirthDate \n`;
getCust = () => {
    let custId = getCustId();
    let custBirthDate = getBirthDate(new Date(1950, 0, 1), new Date());

    custData.push(`${custId} ${custBirthDate} \n`);
    console.log(`고객번호 [${custId}] 생년월일 [${custBirthDate}]`);
    return custData;
}

// export {getCust};
module.exports = { getCust };