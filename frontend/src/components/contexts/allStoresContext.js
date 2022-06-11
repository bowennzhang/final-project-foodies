// ----------- IMPORTS ----------------
import { createContext, useState, useEffect } from "react";

export const AllStoresContext = createContext(null);

const AllStoresProvider = ({ children }) => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [coffeeData, setCoffeeData] = useState([]);
  const [barsData, setBarsData] = useState([]);
  const [shoppingData, setShoppingData] = useState([]);
  const [update, setUpdated] = useState(false);

  const [storesToShowRestaurant, setStoresToShowRestaurant] = useState([]);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("/api/get-restaurants")
      .then((res) => res.json())
      .then((data) => {
        setRestaurantData(data.data);

        setStoresToShowRestaurant(data.data.slice(0, 50));

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

  return (
    <AllStoresContext.Provider
      value={{
        isLoaded,
        coffeeData,
        restaurantData,
        barsData,
        shoppingData,
        storesToShowRestaurant,
        update,
        setUpdated,
      }}
    >
      {children}
    </AllStoresContext.Provider>
  );
};

export default AllStoresProvider;
