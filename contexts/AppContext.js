import { createContext, useState } from "react";
import { api } from "../services/api";
import axios from 'axios';

export const AppContext = createContext({});

export function AppContextProvider({ children }) {
  const [company, setCompany] = useState("");
  const [capvalue, setCapValue] = useState("");
  const [phone, setPhone] = useState("");

  const [isPayment, setIsPayment] = useState(false);

  async function createPayment({ phone, capvalue }) {
    // const url = 'https://sandbox.eupago.pt/clientes/rest_api/mbway/create';
    // const options = {
    //   method: 'POST',
    //   headers: {
    //     accept: 'application/json', 'content-type': 'application/json',
    //     'Access-Control-Allow-Origin': '*'
    //   },
    //   body: JSON.stringify({
    //     chave: 'demo-7248-9939-9b44-15b',
    //     valor: '1',
    //     id: '1',
    //     alias: '123456789',
    //     descricao: 'Pagamento',
    //   })
    // };

    // console.log(options.body);
    
    // await fetch(url, options)
    //   .then(res => res.json())
    //   .then(json => console.log(json))
    //   .catch(err => console.error('error:' + err));

    const options = {
      method: 'POST',
      url: 'https://sandbox.eupago.pt/clientes/rest_api/mbway/create',
      headers: {accept: 'application/json', 'content-type': 'application/json', 'Access-Control-Allow-Origin': '*'},
      data: {
        chave: 'demo-7248-9939-9b44-15b',
        valor: 1,
        id: '1',
        alias: '123456789',
        descricao: 'Pagamento'
      }
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });

    setIsPayment(true);
  }

  return (
    <AppContext.Provider
      value={{ 
        company,
        setCompany, 
        setCapValue, 
        setPhone, 
        capvalue, 
        phone, 
        createPayment, 
        isPayment
      }}>
      { children }
    </AppContext.Provider>
  );
}
