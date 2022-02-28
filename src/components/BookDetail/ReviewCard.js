import React from "react";
import ReactStars from "react-rating-stars-component";

const ReviewCard = ({ review }) => {
  const options = {
    edit: false,
    color: "rgba(20, 20, 20, 0.1)",
    activeColor: "rgb(254, 180, 42)",
    value: review.rating,
    isHalf: true,
    size: window.innerWidth < 600 ? 20 : 25,
  };
  return (
    <div className="review">
      <div className="head-review">
        <img
          className="review-image"
          src="https://img.search.brave.com/eK5fY5lImCUFw0e1jggMdUXvVhwbYFBy_VPwXoK33dw/rs:fit:416:416:1/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vdmVjdG9y/cy9wcm9maWxlLWlj/b24tbWFsZS1hdmF0/YXItcG9ydHJhaXQt/Y2FzdWFsLXBlcnNv/bi12ZWN0b3ItaWQ1/MzA4Mjc4NTM_az02/Jm09NTMwODI3ODUz/JnM9MTcwNjY3YSZ3/PTAmaD1pbkVtOUpo/YkdkdmhLS2Vsdnpk/eVI0NHBORzVDVTk4/RFEwZ29SaEtMVmlB/PQ"
          width="100px"
        />
      </div>
      <div className="body-review">
        <div className="name-review">{review.name}</div>
        <div className="rating">
          <ReactStars {...options} />
        </div>
        <div className="desc-review">{review.comment}</div>
      </div>
    </div>
  );
};

export default ReviewCard;
