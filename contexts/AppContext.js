import { createContext, useState } from "react";
import { api } from "../services/api";
import axios from 'axios';



export const AppContext = createContext({});

export function AppContextProvider({ children }) {

  const [isPayment, setIsPayment] = useState(false);

  async function createPayment(phone, capvalue) {
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

    // const response = await api.post('create', {
    //   chave: 'demo-7248-9939-9b44-15b',
    //   valor: 1,
    //   id: '1',
    //   alias: '123456789',
    //   descricao: 'Pagamento'
    // });

    // console.log(response);

    const response = await api.post('api/create', {
      chave: 'demo-7248-9939-9b44-15b',
      valor: capvalue,
      id: '1',
      alias: phone,
      descricao: 'Pagamento'
    })

    console.log(response.data);

    setIsPayment(true);
  }

  return (
    <AppContext.Provider
      value={{
        createPayment, 
        isPayment
      }}>
      { children }
    </AppContext.Provider>
  );
}
