import React, { useState } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import {ApiLancamento} from '../api/apis';

const estilos = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    minHeight: '250px',
    margin: '3% 10% 3% 10%'
  },
  descricao: {
    width: '50%',
    color: '#fff',
    fontWeight: '500',
    textAlign: 'start',
    fontFamily: 'Helvetica Neue, Helvetica , Arial ,sans-serif',
  },
  img: {
    width: '50%',
  },
  hr: {
    backgroundColor: '#333333',
    height: '10px',
    width: '100%',
    border: 'none',
  },
  titulo:{
    color: '#f40612',
    fontWeight: '600',
    margin: '1% 0 1% 0',
  },
  imgLancamento: {
    margin: 'auto',
  }
});
const Lancamento = () => {
  const classes = estilos();
  const [titulo, setTitulo] = useState('Nenhum filme novo!');
  const [descricao, setDescricao] = useState('sem descricao');
  const [img, setImg] = useState('');
  const Filmelancamento = async () => {
    await ApiLancamento.get()
      .then(res => {
        setTitulo(res.data.results[0].name);
        setDescricao(res.data.results[0].overview);
        setImg(res.data.results[0].poster_path);
      });
  };
  Filmelancamento();
  const imgFilme = () => {return `https://image.tmdb.org/t/p/w200${img}`};
  return (
    <>
      <hr className={classes.hr}/>
      <div className={classes.root}>
        <div className={classes.descricao}>
          <Typography variant="h2">
            Lançamento!
          </Typography>
          <Typography variant="h2" className={classes.titulo}>
            {titulo}
          </Typography>
          <Typography variant="h6">
            {descricao}
          </Typography>
        </div>
        <div className={classes.imgLancamento}>
          <img src={imgFilme()} alt={titulo}/>
        </div>
      </div>
      <hr className={classes.hr}/>
    </>
  );
};

export default Lancamento;