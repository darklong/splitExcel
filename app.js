const _ = require('lodash')
const readXlsxFile = require("read-excel-file/node");

let limit = 10;

class objPrice {
    MAKH = ''
    price = 0
}

readXlsxFile(`./IN/Book1.xlsx`).then((rows) => {
    rows.shift()
    let arrObj = []

    for (let i = 2; i < rows.length; i++) {

        let obj = new objPrice()
  
        obj.MAKH = rows[i][0]
        obj.price = rows[i][1]
        arrObj.push(obj)

      }
  
    let dataSort = _.sortBy(arrObj, 'MAKH') 
    
    let filenum = 1
    let flat = 1
    
    for(let i = 0; i < dataSort.length; i++)
    {
        for(let j = 1; j < limit; j++)
        {
            if( dataSort[i].MAKH == dataSort[j].MAKH  && flat < limit )
                dataSort[i].fileSplit = filenum
        }

        
        if(flat == limit)
            flat = 1
        else 
            flat++

    }

})
