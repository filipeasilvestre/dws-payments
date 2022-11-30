import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://sandbox.eupago.pt/clientes/rest_api/mbway',
  headers: {          
    "Access-Control-Allow-Origin": "*", 
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
    "Content-Type": "application/json;charset=UTF-8"
  }
});