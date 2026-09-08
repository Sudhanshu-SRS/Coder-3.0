let library = {
  libraryB: [],
  addBook(title, author) {
    let exisiting = this.libraryB.find((book) => book.title === title);
    if (exisiting) return "Book Already Added IN Library ";
    this.libraryB.push({
      title,
      author,
      isBorrowed: false,
      id: this.libraryB.length + 1,
    });
    return "Book Added IN Library";
  },
  borrowBook(id) {
    let exisiting = this.libraryB.find((book) => book.id === id);
    if (exisiting) {
      if (exisiting.isBorrowed) {
        return "Book Already Borrowed";
      }

      exisiting.isBorrowed = true;

      return "Book Issued ";
    }

    return "Book Not FOund IN Libaray";
  },
  returnBook(id) {
    let exisiting = this.libraryB.find((book) => book.id === id);
    if (exisiting) {
      if (!exisiting.isBorrowed) {
        return "Book Was Not Borrowed";
      }

      exisiting.isBorrowed = false;

      return "Book Returned ";
    }

    return "Book Not Found In Libaray";
  },
  availableBooks() {
    let avb = this.libraryB.filter((book) => book.isBorrowed === false);
    return avb;
  },
};

// ===============================
// ADD BOOKS
// ===============================

console.log(library.addBook("JavaScript Basics", "John Smith"));
console.log(library.addBook("Clean Code", "Robert Martin"));
console.log(library.addBook("Atomic Habits", "James Clear"));
console.log(library.addBook("The Pragmatic Programmer", "David Thomas"));
console.log(library.addBook("Eloquent JavaScript", "Marijn Haverbeke"));

// ===============================
// CHECK ALL BOOKS
// ===============================

console.log("All Books:");
console.log(library.libraryB);

// ===============================
// DUPLICATE BOOK TEST
// ===============================

console.log(library.addBook("JavaScript Basics", "John Smith"));

// ===============================
// BORROW BOOK TEST
// ===============================

// Borrow book ID 2
console.log(library.borrowBook(2));

// Borrow book ID 4
console.log(library.borrowBook(4));

// ===============================
// CHECK AVAILABLE BOOKS
// ===============================

console.log("Available Books:");
console.log(library.availableBooks());

// ===============================
// RETURN BOOK TEST
// ===============================

// Return book ID 2
console.log(library.returnBook(2));

// ===============================
// CHECK AVAILABLE BOOKS AGAIN
// ===============================

console.log("Available Books After Return:");
console.log(library.availableBooks());

// ===============================
// INVALID ID TEST
// ===============================

console.log(library.borrowBook(100));

console.log(library.returnBook(100));

// ===============================
// BORROW ALREADY BORROWED BOOK
// ===============================

console.log(library.borrowBook(4));
console.log(library.borrowBook(4));
