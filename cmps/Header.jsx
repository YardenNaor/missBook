import { Navigator } from "./Navigator.jsx"

export function  Header({onSetPage}){
console.log('hi from header:')
return <header className="app-header">
<h1>Miss book</h1>
<nav className="app-nav">
            <a href="#" onClick={() => onSetPage('home')}>Home</a> | 
            <a href="#" onClick={() => onSetPage('about')}>About</a> | 
            <a href="#" onClick={() => onSetPage('books')}>books</a>
        </nav>
</header>

}