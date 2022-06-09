import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";

import Loading from "../reusable/Loading";

import "./StoreDetails.css";

const StoreDetails = () => {
  const { id } = useParams();
  const { user } = useAuth0();

  const [isLoaded, setIsLoaded] = useState(false);
  const [singleStore, setSingleStore] = useState({});

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
    // e.preventDefault();
    fetch(`/api/update-favorites/?id=${singleStore.id}&email=${user.email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data, "fave data");
        if (data.status === 400) {
          // setErrorMessage(data.message);
          console.log("errorDrinks");
        } else if (data.status === 200) {
          console.log("saved stores", data);
          // setStatus(data.status);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //   console.log(singleStore.location.address1);
  return (
    <>
      {isLoaded ? (
        <div className="store-details-container">
          <div className="store-details-card">
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
              <button onClick={handleLike} className="store-details-btn">
                save
              </button>
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
