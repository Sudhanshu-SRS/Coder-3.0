function wordcalculator(text){
  let word=text.toLowerCase().split(/\s+/)
  let calculatorword={}
  word.forEach((word)=>

//    🏷️ Think of it like this
// calculatorword.word

// means:

// 🏷️ Give me the box labelled "word"

// Whereas:

// calculatorword[word]

// means:

// 🏷️ Look inside the variable word, see what label it contains, and use that label.

    calculatorword[word]=(calculatorword[word]||0)+1
  )

  return calculatorword
}
console.log(
wordcalculator("my Name is "))