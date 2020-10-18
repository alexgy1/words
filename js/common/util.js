// let a = 1
// let b ={
//     name:'alex'
// }


const addId = (words)=>{
    let startId = 0
    return words.map( w => {
        !w.id && (w.id = startId++)
        return w 
    })
}

const listNamesOfWords = (words)=>{
    return words.map(w=> w.n)//output all words in array 
                .sort((a,b)=> a.localeCompare(b)) //startswith a b c sort 
}

const logAll = (words)=>{
    //add increaseId for each word
    console.log(addId(words))
    //log all words name 
    console.log(listNamesOfWords(words))
    let len = words.length
    console.log( '今天背了' +len + '个单词，继续加油！')
}
module.exports = {
    addId,
    listNamesOfWords,
    logAll,
}
