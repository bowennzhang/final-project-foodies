import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";

import Loading from "../reusable/Loading";

import "./StoreDetails.css";

const StoreDetails = () => {
  const { id } = useParams();

  const [isLoaded, setIsLoaded] = useState(false);
  const [singleStore, setSingleStore] = useState({});

  console.log(singleStore);

  useEffect(() => {
    fetch(`/api/get-store/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleStore(data.data);
        console.log("j");
        setIsLoaded(true);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

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
              <p>review count{singleStore.review_count}</p>
              <p>{singleStore.display_phone}</p>
              <div>
                <p>{singleStore.location.display_address[0]}</p>
                <p>{singleStore.location.display_address[1]}</p>
                <p>{singleStore.location.display_address[2]}</p>
                <p>{singleStore.location.display_address[3]}</p>
              </div>
              <button className="store-details-btn">save</button>
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
