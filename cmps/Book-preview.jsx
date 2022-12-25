

export function bookPreview({ book }) {

    return <article className="book-preview">
        <h2>book title: {book.title}</h2>
        <h3>Max Price: {book.maxPrice}</h3>
        <img src={`assets/img/${book.title}.png`} />
    </article>
}