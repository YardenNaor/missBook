// const { useState, useEffect } = React
// import {bookService} from '../services/book.service.js'
// import {BookFilter } from '../cmps/Book-filter.jsx'
// import { BookList } from '../cmps/book-list.jsx'
// import {BookPreview } from '../cmps/Book-preview.jsx'
// import { UserMsg } from '../cmps/user-msg.jsx'

export function bookIndex() {
console.log('hi from bookindex:')
    // const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())
    // const [books, setbooks] = useState([])
    // const [selectedbook, setSelectedbook] = useState(null)
    // const [userMassage, setUserMsg] = useState('')

    // useEffect(() => {
    //     loadbooks()
    // }, [filterBy])

    // function loadbooks() {
    //     bookService.query(filterBy).then(booksToUpdate => {
    //         setbooks(booksToUpdate)
    //     })
    // }

    // function onSetFilter(filterByFromFilter) {
    //     setFilterBy(filterByFromFilter)
    // }

    // function onRemovebook(bookId) {
    //     bookService.remove(bookId).then(() => {
    //         const updatedbooks = books.filter(book => book.id !== bookId)
    //         setbooks(updatedbooks)
    //         flashMsg('book removed!')
    //     })
    // }

    // function onSelectbook(bookId) {
    //     // setSelectedbook(book)
    //     bookService.get(bookId).then((book) => {
    //         setSelectedbook(book)
    //     })
    // }

    // function flashMsg(msg) {
    //     setUserMsg(msg)
    //     setTimeout(() => {
    //         setUserMsg('')
    //     }, 3000)
    // }


    // // console.log('user msg:', userMassage);
    // return <section className="book-index ">
    //     {userMassage && <UserMsg msg={userMassage} />}
    //     {!selectedbook && <div>
    //         <h1>Hello from book app!</h1>
    //         <BookFilter onSetFilter={onSetFilter} />
    //         <BookList books={books} onRemovebook={onRemovebook} onSelectbook={onSelectbook} />
    //     </div>}

    //     {selectedbook && <BookPreview
    //         book={selectedbook}
    //         onGoBack={() => setSelectedbook(null)}
    //     />}
    // </section>
}