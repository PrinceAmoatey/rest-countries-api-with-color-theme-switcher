import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Home/Header";
import Home from './components/Home/Home';
import axios from "axios";
import CountryPoster from './components/Country/CountryPoster';
import { Theme, themeType } from './Theme';



const http = axios.create({
  baseURL: 'https://restcountries.com/v3.1',
});


export const api = {
  //get all countries
  getCountries: async () => {
      const response = await http.get('/all')
      const data = await response.data
      return data;
  },
  //get country by name
  getCountry: async (name: string) => {
      const response = await http.get(`/name/${name}`);
      const data = await response.data
      return data;
  },

  //get country data by code
  getByCountryCode: async (code: string) => {
      const response = await http.get(`/alpha/${code}`);
      return response.data;    
  }

}




function App() {
    // Detect the default browser theme
const isbrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;


//render specific mode when default theme is set
const getDefaultTheme = (): themeType => {
  const localStorageTheme = localStorage.getItem('theme')!;

  // check if the user has set dark theme in the browser 
  // as prefered else set theme to light
  const browserDefault:themeType = isbrowserDefaultDark() ? 'dark' : 'light';

  //if there is a theme in local storage maintain it else set browser default
  return ( localStorageTheme ? localStorageTheme as themeType : browserDefault);
};

  //switch between themes
  const switchTheme = (lightMode: string) => { 
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light'); // toggle theme 

    localStorage.setItem('theme', currentTheme === 'dark' ? 'light' : 'dark'); //persist user's set theme
  };
  
  const [currentTheme, setCurrentTheme] = useState<themeType>(getDefaultTheme());

  //apply theme to body 
  document.querySelector("body")!.setAttribute('id', currentTheme);

  return (
    <Theme.Provider value={{currentTheme, switchTheme}}>
    <div className="App" >
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/country/:name' element={<CountryPoster />} />
          <Route path='/country/code/:code' element={<CountryPoster />} />
        </Routes>
      </div>
      </Theme.Provider>
  );
}

export default App;
