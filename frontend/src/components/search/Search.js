import SearchBar from "../searchBar/SearchBar";

import "./Search.css";

// const YELP_API_KEY =
//   "4enntBHfeYier6LSVphCx9BsPZuovcDrN56fft5v_CsaM9Jbp_EB9ERPLGJwGuxsTiQHv1qQW7Y_YT3SihiO3WKazr2dYZRPqxFFlF7qjWKfLEE9mfIUK8GlavOOYnYx";

const Search = () => {
  // const [restaurantData, setRestaurantData] = useState([]);

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

  // console.log(restaurantData);

  return (
    <div>
      <SearchBar />
    </div>
  );
};

export default Search;
