import React, { Fragment, useEffect } from "react";
import "./Books.css";
import MetaData from "../layout/MetaData";
import { clearErrors, getBook } from "../../actions/bookAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";

import BookCard from "./BookCard/BookCard";

import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";

const Book = () => {
  const alert = useAlert();
  const { keyword } = useParams();

  const dispatch = useDispatch();
  const { loading, error, books, bookCount } = useSelector(
    (state) => state.books
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getBook(keyword));
  }, [dispatch, error, alert, keyword]);

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
