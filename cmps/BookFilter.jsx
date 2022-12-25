
const { useState, useEffect } = React

import { bookService } from "../services/book.service.js"


export function bookFilter({ onSetFilter }) {

    const [filterByToEdit, setFilterByToEdit] = useState(bookService.getDefaultFilter())

    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        let { value, name: field, type } = target
        value = (type === 'number') ? +value : value
        setFilterByToEdit((prevFilter) => {
            return { ...prevFilter, [field]: value }
        })
    }

    function onSubmitFilter(ev) {
        ev.preventDefault()
        onSetFilter(filterByToEdit)
    }


    return <section className="book-filter">
        <h2>Filter our books</h2>
        <form onSubmit={onSubmitFilter}>
            <label htmlFor="title">title:</label>
            <input type="text"
                id="title"
                name="txt"
                placeholder="By title"
                value={filterByToEdit.txt}
                onChange={handleChange}
            />

            <label htmlFor="maxPrice">Max price:</label>
            <input type="number"
                id="maxPrice"
                name="maxPrice"
                placeholder="By min speed"
                value={filterByToEdit.maxPrice}
                onChange={handleChange}
            />

            <button>Filter books!</button>
        </form>

    </section>
}

