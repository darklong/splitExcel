const { flatMap } = require("lodash")


function splitBy(collection,  key, limit) {
    let filenum = 1
    // used to mark to see how much of the slot was used
    let flag = 1
    for(let i = 0; i < collection.length; i++)
    {
        
        let n = 0
        let _key = false
        for (let j = i + 1; j <collection.length; j++ )
            // count how many element in collection
            if( collection[i][key]  ==  collection[j][key] )
                n++
            //debug
            // console.log(n,flag,limit,collection[i][key])

        
            // is the number of elements less than the limit?
            if( parseInt(flag) + parseInt(n) < limit)
                collection[i]._fileSplit = filenum
       
            if( ( parseInt(flag) + parseInt(n) >= limit && parseInt(flag) > parseInt(n) ) || flag == limit) {
                filenum++
                collection[i]._fileSplit = filenum
                _key = true
               // refresh after split new file
                flag = 1
            }
            
        
            if(flag != limit)
                flag++
            if(flag == limit) {
                flag = 1
                if(!_key)
                    filenum++
            }
    }
    return collection
}   

module.exports = splitBy;