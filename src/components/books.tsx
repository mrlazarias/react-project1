type BookProps = {
  book: {
    title: string;
    pages: number;
    isRead: boolean;
    isFavorite: boolean;
  };
};

function Book({ book }: BookProps) {
  return (
    <li>
      <span>
        <span>{book.isRead ? "✅" : "⌛"} </span>
        {book.title} ({book.pages} páginas)
      </span>
      {book.isFavorite && <span> 🤩</span>}
    </li>
  );
}

export default Book;
