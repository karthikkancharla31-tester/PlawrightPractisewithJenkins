interface Book{
    book_id:string;
    book_name:string;
}

interface Author{
    author_id:string;
    author_name:string;
}

type book_and_author = Book & Author;

let obj_book_and_author:book_and_author ={
    book_id :"12AC",
    book_name :"Harry Potter",
    author_id :"3E2C",
    author_name : "J.K. Rowling",
}

console.log(obj_book_and_author.book_id);
console.log(obj_book_and_author.book_name);
console.log(obj_book_and_author.author_id);
console.log(obj_book_and_author.author_name);
