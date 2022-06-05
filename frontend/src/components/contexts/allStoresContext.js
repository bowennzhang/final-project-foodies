// ----------- IMPORTS ----------------
import { createContext, useState, useEffect } from "react";

export const AllStoresContext = createContext(null);

const AllStoresProvider = ({ children }) => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [coffeeData, setCoffeeData] = useState([]);
  const [barsData, setBarsData] = useState([]);
  const [shoppingData, setShoppingData] = useState([]);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("/api/get-restaurants")
      .then((res) => res.json())
      .then((data) => {
        setRestaurantData(data.data);

        setIsLoaded(true);
      });
  }, []);

  useEffect(() => {
    fetch("/api/get-coffee")
      .then((res) => res.json())
      .then((data) => {
        setCoffeeData(data.data);

        setIsLoaded(true);
      });
  }, []);

  useEffect(() => {
    fetch("/api/get-bars")
      .then((res) => res.json())
      .then((data) => {
        setBarsData(data.data);

        setIsLoaded(true);
      });
  }, []);

  useEffect(() => {
    fetch("/api/get-shopping")
      .then((res) => res.json())
      .then((data) => {
        setShoppingData(data.data);

        setIsLoaded(true);
      });
  }, []);
  // const YELP_API_KEY =
  //   "4enntBHfeYier6LSVphCx9BsPZuovcDrN56fft5v_CsaM9Jbp_EB9ERPLGJwGuxsTiQHv1qQW7Y_YT3SihiO3WKazr2dYZRPqxFFlF7qjWKfLEE9mfIUK8GlavOOYnYx";

  // const getRestaurantFromYelp = () => {
  //   const yelpUrl =
  //     "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&location=montreal";

  //   const apiOptions = {
  //     headers: {
  //       Authorization: `Bearer ${YELP_API_KEY}`,
  //       Origin: "http://localhost:3000",
  //       "Content-Type": "application/json",
  //       withCredentials: true,
  //     },
  //   };
  //   return fetch(yelpUrl, apiOptions)
  //     .then((res) => res.json())
  //     .then((json) => setRestaurantData(json.businesses));
  // };

  // useEffect(() => {
  //   getRestaurantFromYelp();
  // }, []);

  // const getBarsFromYelp = () => {
  //   const yelpUrl =
  //     "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=bars&location=montreal";

  //   const apiOptions = {
  //     headers: {
  //       Authorization: `Bearer ${YELP_API_KEY}`,
  //       Origin: "http://localhost:3000",
  //       "Content-Type": "application/json",
  //       withCredentials: true,
  //     },
  //   };
  //   return fetch(yelpUrl, apiOptions)
  //     .then((res) => res.json())
  //     .then((json) => setRestaurantData(json.businesses));
  // };
  // console.log(restaurantData);

  // useEffect(() => {
  //   getBarsFromYelp();
  // }, []);

  return (
    <AllStoresContext.Provider
      value={{ isLoaded, coffeeData, restaurantData, barsData, shoppingData }}
    >
      {children}
    </AllStoresContext.Provider>
  );
};

export default AllStoresProvider;
