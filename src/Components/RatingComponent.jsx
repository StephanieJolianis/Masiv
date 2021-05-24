import ReactStars from "react-rating-stars-component";

const RatingComponent = (newRating) => {
    console.log(newRating);
  return(
    <ReactStars
      count={5}
      onChange={RatingComponent}
      size={24}
      activeColor="#ffd700"
    />
  )}

export {RatingComponent}