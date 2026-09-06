let Libaray={
  book:[],
  addbook(Bt,Ba){
      let BookAvail=this.book.find(e=>e.Bt===Bt)
      if(BookAvail) return "Book Already Added"
      
      this.book.push({id:this.book.length+1,Bt,Ba,isBarrowed:false})
      return "Book Added"
  },

  BarrowBook(Bt){
   let BookAvail=this.book.find(e=>e.Bt===Bt)
    if(!BookAvail) return "Book Is Not In Libaray"
   if(BookAvail.isBarrowed) return "Book Already Barrowed"
   BookAvail.isBarrowed=true 
   return `${BookAvail.Bt} Barrowed succesfully`
  },

  ReturnBook(Bt){
   let BookAvail=this.book.find(e=>e.Bt===Bt)
   if(!BookAvail) return "Book Is Not In Libaray"
   BookAvail.isBarrowed=false
    return `${BookAvail.Bt} return succesfully`
  },

  ShowBook(){
    for(let SinglB of this.book){
     console.log(  `${SinglB.id}. ${SinglB.Bt} author is ${SinglB.Ba} is ${SinglB.isBarrowed?"Is Barrowed":"Available"} `
    )}
  
  },

  AvailiableBook(){
    let ab= this.book.filter(a=>a.isBarrowed!==true)
    console.log(ab);
  }
}

console.log(Libaray.addbook("firstBook","abc"))
console.log(Libaray.addbook("secondB","def"))


Libaray.ShowBook()
Libaray.AvailiableBook()