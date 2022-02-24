import React, { Fragment } from "react";
import "./Books.css";
import dummyImage from "../../images/lf.jpeg";
import MetaData from "../layout/MetaData";

import BookCard from "./BookCard/BookCard";

const book = {
  name: "The Book Thief",
  images: [{ url: dummyImage }],
  price: "NRs. 1200",
  _id: "dummyBook",
};

const Book = () => {
  return (
    <Fragment>
      <MetaData title="BookChimp" />
      <div className="small-container">
        <h2 className="title">Featured Books</h2>
        <div className="row">
          <BookCard book={book} />
          <BookCard book={book} />
          <BookCard book={book} />
          <BookCard book={book} />
          <BookCard book={book} />
          <BookCard book={book} />
          <BookCard book={book} />
          <BookCard book={book} />
        </div>
      </div>
    </Fragment>
  );
};

export default Book;
