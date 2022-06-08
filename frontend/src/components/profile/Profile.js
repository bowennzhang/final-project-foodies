import { useAuth0 } from "@auth0/auth0-react";

import "./Profile.css";
import ProfileActivity from "./profileActivity/ProfileActivity";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <>
      {isAuthenticated ? (
        <div className="profile-container">
          <div className="profile-card">
            <div className="profile-info">
              <img
                className="profile-image"
                src={user.picture}
                alt="profileImg"
              />
              <div className="profile-name">{user.name}</div>
            </div>
            {/* <p>{JSON.stringify(user, null, 2)}</p> */}
          </div>

          <ProfileActivity />
        </div>
      ) : (
        <p className="profile-error"> Please login to check your profile.</p>
      )}
    </>
  );
};

export default Profile;
