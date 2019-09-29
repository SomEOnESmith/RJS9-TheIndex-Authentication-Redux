import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

// Components
import BookTable from "./BookTable";
import AddBookModal from "./AddBookModal";

function AuthorDetail({ authors, books, match, user }) {
  const { authorID } = match.params;
  const author = authors.find(author => author.id === +authorID);

  if (!author) return <Redirect to="/" />;

  const authorName = `${author.first_name} ${author.last_name}`;
  const authorBooks = author.books.map(bookID =>
    books.find(book => book.id === bookID)
  );

  return (
    <div className="author">
      <div>
        <h3>{authorName}</h3>
        <img
          src={author.imageUrl}
          className="img-thumbnail img-fluid"
          alt={authorName}
        />
      </div>
      <BookTable books={authorBooks} />
      {!!user ? <AddBookModal authorID={author.id} /> : <div />}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    authors: state.rootAuthors.authors,
    books: state.rootBooks.books,
    user: state.user
  };
};

export default connect(mapStateToProps)(AuthorDetail);
