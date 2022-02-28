import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useAlert } from "react-alert";
import { addItemsToCart } from "../../actions/cartAction";

// Additional components
import ReactStars from "react-rating-stars-component";
import ReviewCard from "./ReviewCard.js";
import Loader from "../layout/Loader/Loader";

// Import for book actions
import { clearErrors, getBookDetails } from "../../actions/bookAction";

// Style import
import "./BookDetails.css";
import MetaData from "../layout/MetaData.js";

const BookDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const alert = useAlert();

  const { book, loading, error } = useSelector((state) => state.bookDetails);

  const increaseQuantity = () => {
    if (book.stock <= quantity) return;

    const qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;

    const qty = quantity - 1;
    setQuantity(qty);
  };

  const addToCartHandler = () => {
    dispatch(addItemsToCart(id, quantity));
    alert.success("Item Added To Cart");
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getBookDetails(id));
  }, [dispatch, id]);

  // Options for rating
  const options = {
    edit: false,
    color: "rgba(20, 20, 20, 0.1)",
    activeColor: "rgb(254, 180, 42)",
    value: book.ratings,
    isHalf: true,
    size: window.innerWidth < 600 ? 20 : 25,
  };

  const [quantity, setQuantity] = useState(1);

  return (
    <Fragment>
      <MetaData title={`BookChimp - ${book.name}`} />
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          {/* Book Details section */}
          <div className="small-container book-details">
            <div className="row">
              {/* Image Section */}
              <div className="col-2">
                {book.images &&
                  book.images.map((item, i) => (
                    <img
                      className="CarouselImage"
                      key={item.url}
                      src={item.url}
                      alt={`${i} Slide`}
                    />
                  ))}
              </div>

              {/* Details about the book */}
              <div className="col-2">
                <h1>{book.name}</h1>
                <h4>{`$ ${book.price}`} </h4>

                {/* Review of the Book */}
                <div className="review-section-details">
                  <ReactStars {...options} />
                  <span>({book.numOfReviews} Reviews)</span>
                  <button className="btnSubmitReview">Submit Review</button>
                </div>

                {/* Add to cart section */}

                {book.stock < 1 ? null : (
                  <div>
                    <div className="cartActions">
                      <button onClick={decreaseQuantity}>-</button>
                      <input readOnly type="number" value={quantity} />
                      <button onClick={increaseQuantity}>+</button>
                    </div>
                    <button onClick={addToCartHandler} className="btnAddToCart">
                      Add To Cart
                    </button>
                  </div>
                )}

                {/* is In Stock ? Section */}
                <p>
                  <b className={book.stock < 1 ? "redColor" : "greenColor"}>
                    {book.stock < 1 ? "Out of stock" : "In stock"}
                  </b>
                </p>

                {/* Book Description */}

                <h3>Description</h3>
                <p>{book.description}</p>
              </div>
            </div>
          </div>

          <h1 className="reviewsHeading">Reviews</h1>
          {book.reviews && book.reviews[0] ? (
            <div className="reviews">
              {book.reviews &&
                book.reviews.map((review) => (
                  <ReviewCard review={review} key={review._id} />
                ))}
            </div>
          ) : (
            <p className="noReviews">No Reviews Yet</p>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default BookDetails;
