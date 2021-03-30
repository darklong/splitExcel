const { flatMap } = require('lodash');
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
    // let dataSortTemp = _.sortBy(arrObj, 'MAKH')
    let filenum = 1
    let flag = 1
    
    for(let i = 0; i < dataSort.length; i++)
    {
        
        let n = 0
        let key = false
        for (let j = i + 1; j <dataSort.length; j++ )
            if( dataSort[i].MAKH  ==  dataSort[j].MAKH )
                n++

        console.log(n,flag,limit,dataSort[i].MAKH)

        

        if( parseInt(flag) + parseInt(n) < limit)
            dataSort[i].fileSplit = filenum
       
        if( ( parseInt(flag) + parseInt(n) >= limit && parseInt(flag) > parseInt(n) ) || flag == limit) {
            filenum++
            dataSort[i].fileSplit = filenum
            key = true
        }
            
        // for(let j = 1; j < limit; j++)
        // {
        //     if( dataSort[i].MAKH == dataSort[j+i+1].MAKH  && flat < limit )
        //         dataSort[i].fileSplit = filenum
        // }

        
        if(flag != limit)
            flag++
        if(flag == limit) {
            flag = 1
            if(!key)
                filenum++
        }
    }

    console.log(dataSort)

})
