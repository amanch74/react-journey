const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, cloudinaryImageId } = resData;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};

export default RestaurantCard;