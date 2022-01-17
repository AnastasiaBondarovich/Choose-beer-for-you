import axios from "axios";

export const getUserInfo = () => {
  return axios.get(`https://random-data-api.com/api/users/random_user`)
} 

export const getBeerInfo = () => {
  return axios.get(`https://random-data-api.com/api/beer/random_beer`)
} 

const API_KEY = '24388463-98e74e0d8638a76e51f9a2f41';
export const addBeerImg = () => {
  return axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=beer`)
} 