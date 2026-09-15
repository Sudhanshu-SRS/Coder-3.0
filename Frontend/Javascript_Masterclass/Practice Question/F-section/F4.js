function Book(name){
    this.name=name,
    this.isborrowed=false
}

Book.prototype.borrow=function(){
    if(this.isborrowed===false){
         this.isborrowed=true
         return "Book Is issued"
    }else {
        return "Book Not Aviliabel"
    }

}
Book.prototype.returnBook=function(){
    if(this.isborrowed===false){
        return "Book Is Not Issued You Can Not Return"
    }
    else if(this.isborrowed===true){
        this.isborrowed=false
        return "Book Return Succesfully"
    }
    else {
        return "No Book Found"
    }
}
Book.prototype.getInfo=function(){
    return this 
}







let book1 = new Book("Harry Potter");
let book2 = new Book("Atomic Habits");
let book3 = new Book("The Alchemist");
let book4 = new Book("Rich Dad Poor Dad");

// Book 1
console.log(book1.getInfo());
console.log(book1.borrow());
console.log(book1.getInfo());

// Book 2
console.log(book2.getInfo());
console.log(book2.borrow());
console.log(book2.borrow());
console.log(book2.returnBook());

// Book 3
console.log(book3.borrow());
console.log(book3.getInfo());

// Book 4
console.log(book4.getInfo());
console.log(book4.borrow());
console.log(book4.returnBook());
console.log(book4.getInfo());