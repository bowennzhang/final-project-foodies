import { NavLink } from "react-router-dom";

import Loading from "../../reusable/Loading";
import "./ProfileActivity.css";

const ProfileActivity = ({ favor, loading }) => {
  console.log(favor);
  return (
    <>
      {loading ? (
        <div className="profileActivity-container">
          <NavLink to={`/storeDetails/${favor.id}`}>
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
              <div className="profileActivity-store-contact">
                <p className="profileActivity-store-phone">
                  {favor.display_phone}
                </p>
                <div className="profileActivity-store-address">
                  <p>{favor.location.display_address[0]}</p>
                  <p>{favor.location.display_address[1]}</p>
                  <p>{favor.location.display_address[2]}</p>
                </div>
              </div>
            </div>
          </NavLink>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default ProfileActivity;
