const { useState } = React
import { HomePage } from './pages/HomePage.jsx'
import { AboutUs } from './pages/AboutUs.jsx'
import { BookIndex } from './pages/BookIndex.jsx'
import { Header } from './cmps/Header.jsx'

export function App() {

    const [page, setPage] = useState('home')
    console.log('page is', page);

    function onSetPage(page) {
        setPage(page)
    }

    return <section className="app">
        <main>
            <Header onSetPage={onSetPage} />
            {page === 'home' && <HomePage />}
            {page === 'about' && <AboutUs />}
            {page === 'books' && <BookIndex />}
        </main>
    </section>
}