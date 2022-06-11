import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import Loading from "../../reusable/Loading";

import "./StoreDetailsFromAll.css";

const StoreDetailsFromAll = () => {
  const { page, id } = useParams();
  console.log(page, id);
  const [isLoaded, setIsLoaded] = useState(false);
  const [singleStore, setSingleStore] = useState();

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

  return (
    <>
      {console.log(singleStore)}
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

export default StoreDetailsFromAll;
