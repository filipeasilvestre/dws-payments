import axios from "axios";

export default async function Create(req, res) {
  const body = req.body;

  const options = {
    method: 'POST',
    url: 'https://sandbox.eupago.pt/clientes/rest_api/mbway/create',
    headers: {accept: 'application/json', 'content-type': 'application/json', 'Access-Control-Allow-Origin': '*'},
    data: {
      chave: body.chave,
      valor: body.valor,
      id: body.id,
      alias: body.alias,
      descricao: body.descricao
    }
  };

  await axios
    .request(options)
    .then(function (response) {
      res.status(201).json(
        response.data
      );
    })
    .catch(function (error) {
      res.status(500).json(error)
  });
}