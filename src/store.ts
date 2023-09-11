import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from './features/countriesTile';
import countryPosterReducer from './features/countriesPagetile';


const store = configureStore({
  reducer: {
    countries: countriesReducer,
    countryPoster: countryPosterReducer,
  }
});

 export default store;