import React, { Fragment, useEffect } from "react";
import "./Books.css";
import MetaData from "../layout/MetaData";
import { getBook } from "../../actions/bookAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";

import BookCard from "./BookCard/BookCard";

import { useAlert } from "react-alert";

const Book = () => {
  const alert = useAlert();

  const dispatch = useDispatch();
  const { loading, error, books, bookCount } = useSelector(
    (state) => state.books
  );

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(getBook());
  }, [dispatch, error]);

  return (
    <Fragment>
      <MetaData title="BookChimp - Home" />
      <div className="small-container">
        <h2 className="title">Featured Books</h2>
        {loading ? (
          <Loader />
        ) : (
          <Fragment>
            <div className="row">
              {books &&
                books.map((book) => <BookCard book={book} key={book._id} />)}
            </div>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

export default Book;
