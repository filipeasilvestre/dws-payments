import '../styles/globals.css';
import { useState, createContext } from "react";
import AppContext from "../components/AppContext";

function MyApp({ Component, pageProps }) {

  const [company, setCompany] = useState("");
  const [capvalue, setCapValue] = useState("");
  const [phone, setPhone] = useState("");

  return (
      <AppContext.Provider value={ {company, setCompany, capvalue, setCapValue, phone, setPhone} }>
        <Component {...pageProps} />
      </AppContext.Provider>
    )
  ;
}

export default MyApp;
