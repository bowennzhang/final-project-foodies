import "./ProfileActivity.css";

const ProfileActivity = () => {
  return (
    <div className="profileActivity-container">
      <p className="profileActivity-title">
        Recent Activity{" "}
        <span className="profileActivity-subtitle">stores you saved :</span>
      </p>

      <div className="profileActivity-saved-details">
        <img
          className="profileActivity-saved-image"
          src="https://via.placeholder.com/100"
          alt=""
        />

        <div className="profileActivity-store-info">
          <p className="profileActivity-store-name">name</p>
          <div className="profileActivity-saved-rating-info">
            <p className="profileActivity-saved-rating">rating</p>
            <p className="profileActivity-saved-review">reviews</p>
          </div>
          <p className="profileActivity-saved-tag">tag</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileActivity;
