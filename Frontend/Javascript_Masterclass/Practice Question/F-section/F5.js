class Book {
    #isborrowed=false;
    constructor(name){
        this.Bookname=name
    }
    borrow(){
        if(this.#isborrowed) return "Book already issued"
        this.#isborrowed=true
        return "Book Isuued"
    }
    returnbook(){
        this.#isborrowed=false
        return "Book Returned"
    }
    getInfo(){
        return {
            BookName: this.Bookname,
            isBorrowed:this.#isborrowed
        }
    }



}
let book1 = new Book("Harry Potter");
let book2 = new Book("Atomic Habits");

console.log(book1.getInfo());
console.log(book2.getInfo());

console.log(book1.borrow());
console.log(book1.getInfo());

console.log(book1.borrow()); // already issued

console.log(book2.borrow());
console.log(book2.getInfo());

console.log(book1.returnbook());
console.log(book1.getInfo());

console.log(book1.borrow());
console.log(book1.getInfo());
