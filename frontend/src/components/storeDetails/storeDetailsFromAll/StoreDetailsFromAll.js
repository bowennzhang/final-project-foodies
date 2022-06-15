import { useEffect, useState, useContext } from "react";
import { useParams, NavLink } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useAuth0 } from "@auth0/auth0-react";
import { AllStoresContext } from "../../contexts/allStoresContext";

import Loading from "../../reusable/Loading";

import "./StoreDetailsFromAll.css";

const StoreDetailsFromAll = () => {
  const { update, setUpdated } = useContext(AllStoresContext);
  const { page, id } = useParams();
  const { user, isAuthenticated } = useAuth0();
  const [isLoaded, setIsLoaded] = useState(false);
  const [singleStore, setSingleStore] = useState();
  const [posted, setPosted] = useState(false);

  useEffect(() => {
    fetch(`/api/get-all/${page}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleStore(data.result4[0]);

        setIsLoaded(true);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  const handleLike = (e) => {
    fetch(`/api/update-favorites/?&email=${user.email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(singleStore),
    })
      .then((res) => res.json())
      .then((data) => {
        setUpdated(!update);
        setPosted(!posted);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      {isLoaded ? (
        <div className="store-details-container">
          <div className="store-details-card">
            <NavLink to="/search">
              <div className="details-home-button">
                <ArrowBackIosIcon className="details-arrow" />
                <p>Back</p>
              </div>
            </NavLink>
            <div className="store-details-info">
              <p className="store-details-title">{singleStore.name}</p>
              <p>{singleStore.price}</p>
              <p>{singleStore.rating}</p>
              <p>{singleStore.review_count} reviews</p>
              <p>{singleStore.display_phone}</p>
              <div>
                <p>{singleStore.location.display_address[0]}</p>
                <p>{singleStore.location.display_address[1]}</p>
                <p>{singleStore.location.display_address[2]}</p>
                <p>{singleStore.location.display_address[3]}</p>
              </div>
              {posted ? (
                <button onClick={handleLike} className="store-details-remove">
                  remove
                </button>
              ) : (
                <>
                  {!isAuthenticated ? (
                    <>
                      <button
                        onClick={handleLike}
                        className="store-details-btn-before-login"
                      >
                        save
                      </button>
                      <p className="store-details-reminder">
                        Please login first to save
                      </p>
                    </>
                  ) : (
                    <button onClick={handleLike} className="store-details-btn">
                      save
                    </button>
                  )}
                </>
              )}
            </div>
            <img
              className="store-details-image"
              src={`${singleStore.image_url}`}
              alt=""
            />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default StoreDetailsFromAll;
