import axios from 'axios';
const path = require('path');
require('dotenv').config();

const API_K = process.env.API_KEY;

const ApiBuscaFilmes = axios.create({
  baseURL: `https://api.themoviedb.org/3/search/movie?api_key=${API_K}&query=`
});

const ApiLancamento = axios.create({
  baseURL: `https://api.themoviedb.org/3/trending/all/day?api_key=${API_K}`
})

const ApiEmAlta = axios.create({
  baseURL: `https://api.themoviedb.org/3/discover/movie?api_key=${API_K}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
});

export {ApiBuscaFilmes, ApiLancamento, ApiEmAlta};



