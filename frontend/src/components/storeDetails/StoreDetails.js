import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";

import Loading from "../reusable/Loading";
import { AllStoresContext } from "../contexts/allStoresContext";
import "./StoreDetails.css";

const StoreDetails = () => {
  const { update, setUpdated } = useContext(AllStoresContext);
  const { id } = useParams();
  const { user } = useAuth0();

  const [isLoaded, setIsLoaded] = useState(false);
  const [singleStore, setSingleStore] = useState({});
  const [posted, setPosted] = useState(false);

  useEffect(() => {
    fetch(`/api/get-store/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleStore(data.data);

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
            <div className="store-details-info">
              <p className="store-details-title">{singleStore.name}</p>
              <p>{singleStore.price}</p>
              <div>
                <p className="store-details-rating">{singleStore.rating}</p>
                <p>{singleStore.review_count} reviews</p>
              </div>
              <p>{singleStore.display_phone}</p>
              <div className="store-details-address">
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
                <button onClick={handleLike} className="store-details-btn">
                  save
                </button>
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

export default StoreDetails;
