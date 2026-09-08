function WordAnaylzer(word){
 
    let WordingA=word.toLowerCase().split(" ")
    let WordObj={}

    for(let wrd of WordingA){
        if(WordObj[wrd]){
            WordObj[wrd]++
        }
        else{
            WordObj[wrd]=1
        }
    }


     return WordObj
}

console.log(WordAnaylzer("hello brother hello bother hello brother"));