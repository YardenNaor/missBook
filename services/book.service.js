import {storageService} from './async-storage.service.js'
import { utilService } from './util.service.js'

 const BOOKS_KEY= 'books_DB'  
 _createBooks()

export const bookService = {

}

// function createBooks(){
// const booksPrm= storageService.query(STORAGE_KEY) 


// }
// }


function _createBooks() {
    let books = utilService.loadFromStorage(BOOKS_KEY)
    if (!books || !books.length) {
        books = []
        
    const book1 = {
        id: utilService.makeId(),
        title: "metus hendrerit",
        // description: "placerat nisi sodales suscipit tellus",
        // thumbnail: "http://ca.org/books-photos/20.jpg",
        listPrice: {
            amount: 109,
            currencyCode: "EUR",
            isOnSale: false
        }
    }
    const book2={ 
        id: utilService.makeId(),
    title: "sded htfuyku",
    // description: "placerat nisi sodales suscipit tellus",
    // thumbnail: "http://ca.org/books-photos/20.jpg",
    listPrice: {
        amount: 20,
        currencyCode: "EUR",
        isOnSale: false
    }
}
    
    const book3={
        id: utilService.makeId(),
        title: 'tgdrtg juyjyukj' ,
        // description: "placerat nisi sodales suscipit tellus",
        // thumbnail: "http://ca.org/books-photos/20.jpg",
        listPrice: {
            amount: 200,
            currencyCode: "EUR",
            isOnSale: true
    }
}

        books.push(book1)
        books.push(book2)
        books.push(book3)
        utilService.saveToStorage(BOOKS_KEY, books)
    }
}

// function _createBook() {

// }
