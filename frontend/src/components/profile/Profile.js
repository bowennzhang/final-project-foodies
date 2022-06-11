import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useContext, useState } from "react";

import "./Profile.css";
import ProfileActivity from "./profileActivity/ProfileActivity";
import { AllStoresContext } from "../contexts/allStoresContext";
import Loading from "../reusable/Loading";

const Profile = () => {
  const { update } = useContext(AllStoresContext);
  const { user, isAuthenticated } = useAuth0();
  const [isLoaded, setIsLoaded] = useState(false);
  const [favorites, setFavorites] = useState();

  useEffect(() => {
    if (isAuthenticated) {
      fetch(`/api/get-favorites/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsLoaded(true);
          setFavorites(data.data);
        });
    }
  }, [update, isAuthenticated]);

  console.log(favorites);

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
          </div>
          {isLoaded ? (
            <>
              <p className="profileActivity-title">
                Recent Activity{" "}
                <span className="profileActivity-subtitle">
                  stores you saved :
                </span>
              </p>
              {favorites?.map((favor) => {
                return (
                  <ProfileActivity
                    key={favor.id}
                    favor={favor}
                    loading={isLoaded}
                  />
                );
              })}
            </>
          ) : (
            <Loading />
          )}
        </div>
      ) : (
        <p className="profile-error"> Please login to check your profile.</p>
      )}
    </>
  );
};

export default Profile;
