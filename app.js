const { flatMap } = require('lodash');
const _ = require('lodash')
const fs = require('fs');

const readXlsxFile = require("read-excel-file/node");

const splitBy = require('./splitBy')


class objPrice {

    _splitKey = ''
    VKORG = 0
    MAKH = ''
    price = 0

    constructor(_splitKey,VKORG,MAKH,price) {
        this._splitKey = _splitKey;
        this.VKORG = VKORG;
        this.MAKH = MAKH;
        this.price = price;
    }
    
}


let rawdata = fs.readFileSync('config.json');
const { limit } = JSON.parse(rawdata);
console.log(limit);

console.log(1)

readXlsxFile(`./IN/zp01.xlsx`).then((rows) => {
    // rows.shift()
    // let arrObj = []
    console.log(rows[0])
    let str = ''
    for(let i = 0; i < rows[0].length; i++ ) {
        str += `${rows[0][i]} =  ${ typeof rows[1][i] === 'string' ? '\'\'' : typeof rows[1][i] === 'number' ? 0 : 'null'} \n`
    }
    
    console.log(str)
    // for (let i = 2; i < rows.length; i++) {

    //     let obj = new objPrice(
    //             rows[i][0]+rows[i][1],
    //             rows[i][0],
    //             rows[i][1],
    //             rows[i][2]
    //         )

    //     arrObj.push(obj)

    //   }
  
})

// let dataSort = _.sortBy(arrObj, '_splitKey') 
// // let dataSortTemp = _.sortBy(arrObj, 'MAKH')

// let newData  = splitBy(dataSort,'_splitKey',limit)


// console.log( _.sortBy(newData,'fileSplit'))