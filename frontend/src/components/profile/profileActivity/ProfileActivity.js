import Loading from "../../reusable/Loading";
import "./ProfileActivity.css";

const ProfileActivity = ({ favor, loading }) => {
  return (
    <>
      {loading ? (
        <div className="profileActivity-container">
          <div className="profileActivity-saved-details">
            <img
              className="profileActivity-saved-image"
              src={favor.image_url}
              alt=""
            />

            <div className="profileActivity-store-info">
              <p className="profileActivity-store-name">{favor.name}</p>
              <div className="profileActivity-saved-rating-info">
                <p className="profileActivity-saved-rating">{favor.rating}</p>
                <p className="profileActivity-saved-review">
                  {favor.review_count} reviews
                </p>
              </div>
              <p className="profileActivity-saved-tag">
                {favor.categories[0].title}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default ProfileActivity;
