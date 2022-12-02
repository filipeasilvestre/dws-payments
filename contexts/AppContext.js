import { createContext, useState } from "react";

import { api } from "../services/api";

export const AppContext = createContext({});

export function AppContextProvider({ children }) {

  const [isPayment, setIsPayment] = useState(false);

  async function createPayment(phone, capvalue) {
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
