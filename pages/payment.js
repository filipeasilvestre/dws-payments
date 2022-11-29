import { useContext } from "react"
import AppContext from "../components/AppContext"

export default function Page2() {
    const {company, capvalue, phone} = useContext(AppContext)
    const fetch = require('node-fetch');

    const url = 'https://sandbox.eupago.pt/clientes/rest_api/mbway/create';
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json', 'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        chave: 'demo-7248-9939-9b44-15b',
        valor: "20",
        id: '1',
        alias: "965071853",
        descricao: 'Pagamento',
      })
    };
    console.log(options.body)
    
    fetch(url, options)
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.error('error:' + err));

}