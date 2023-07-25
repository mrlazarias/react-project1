import Header from "./components/header";
import Footer from "./components/footer/footer";
import Book from "./components/book/books";
import Title from "./components/title/title";

import "./App.css";

import { booksList, bestMovie } from "./data";
import interestellarSrc from "./assets/interestellar-src.jpg";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Title>
          Meus livros: <s>Livros emprestados</s>
        </Title>
        <ul className="books-list">
          {booksList.map((book) => (
            <Book key={book.title} book={book} />
          ))}
        </ul>
        <Title>{bestMovie}</Title>

        <div className="images-container">
          <img src={interestellarSrc} alt="Poster 1 filme interestellar" />
          <img
            src="/interestellar-public.jpg"
            alt="Poster 2 filme interestellar"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
