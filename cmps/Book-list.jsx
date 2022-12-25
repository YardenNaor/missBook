import { bookPreview } from "../cmps/Book-preview.jsx"

export function bookList({ books, onRemovebook, onSelectbook }) {

    return <ul className="book-list">
        {
            books.map(book => <li key={book.id}>
                <bookPreview book={book} />
                <div>
                    <button onClick={() => onRemovebook(book.id)}>Remove book!</button>
                    <button onClick={() => onSelectbook(book.id)}>Select book!</button>
                </div>
            </li>)
        }
    </ul>
}