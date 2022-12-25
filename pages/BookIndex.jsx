const { useState, useEffect } = React
import {bookService} from '../services/book.service.js'
import {BookFilter } from '../'
import { BookList } from '../cmps/book-list.jsx';
import {BookDetails } from './book-details.jsx';
import { userMassage } from '../cmps/user-msg.jsx';

export function bookIndex() {

    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())
    const [books, setbooks] = useState([])
    const [selectedbook, setSelectedbook] = useState(null)
    const [userMassage, setUserMsg] = useState('')

    useEffect(() => {
        loadbooks()
    }, [filterBy])

    function loadbooks() {
        bookService.query(filterBy).then(booksToUpdate => {
            setbooks(booksToUpdate)
        })
    }

    function onSetFilter(filterByFromFilter) {
        setFilterBy(filterByFromFilter)
    }

    function onRemovebook(bookId) {
        bookService.remove(bookId).then(() => {
            const updatedbooks = books.filter(book => book.id !== bookId)
            setbooks(updatedbooks)
            flashMsg('book removed!')
        })
    }

    function onSelectbook(bookId) {
        // setSelectedbook(book)
        bookService.get(bookId).then((book) => {
            setSelectedbook(book)
        })
    }

    function flashMsg(msg) {
        setUserMsg(msg)
        setTimeout(() => {
            setUserMsg('')
        }, 3000)
    }

    console.log('user msg:', userMassage);
    return <section className="book-index ">
        {userMassage && <UserMsg msg={userMassage} />}
        {!selectedbook && <div>
            <h1>Hello from book app!</h1>
            <BookFilter onSetFilter={onSetFilter} />
            <BookList books={books} onRemovebook={onRemovebook} onSelectbook={onSelectbook} />
        </div>}

        {selectedbook && <BookDetails
            book={selectedbook}
            onGoBack={() => setSelectedbook(null)}
        />}
    </section>
}