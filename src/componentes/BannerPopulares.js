import React, { useState } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { Link } from '@reach/router';
import { ApiEmAlta } from '../api/apis';
import { observer } from 'mobx-react-lite';
import FilmeStore from '../store/Filmes';

const estilos = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    minHeight: '250px',
    margin: '3% 10% 3% 10%'
  },
  descricao: {
    width: '75%',
    color: '#fff',
    fontWeight: '500',
    textAlign: 'start',
    fontFamily: 'Helvetica Neue, Helvetica , Arial ,sans-serif',
  },
  img: {
    color: '#fff',
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
  },
  coluna: {
    flexDirection: 'column',
    height: '100px',
    width: '50px'
  },
  hr: {
    backgroundColor: '#333333',
    height: '10px',
    width: '100%',
    border: 'none',
  },
  btn: {
    color: '#fff',
    marginTop: '5%',
    backgroundColor: '#f40612',
    fontSize: '1.5em',
    fontWeight: '00',
    fontFamily: 'Century Gothic',
    width: '30%',
    height: '50px',
    textAlign: 'center',
    justifyContent: 'space-between',
    border: 'none',
    '&:hover': {
      cursor: 'pointer',
    },
  },
});
const Populares = observer(() => {
  const classes = estilos();
  const emAlta = async () => {
    await ApiEmAlta.get()
    .then(res => {
      const { data } = res;
      FilmeStore.filmesPopulares(data);
    });
  }
  
  return (
    <>
      <div className={classes.root}>
        <div className={classes.descricao}>
          <Typography variant="h2">
            Populares na Netflix
          </Typography>
          <Link to="/populares">
            <button
              className={classes.btn}
              onClick={() => {emAlta();}}
            >
              <span style={{margin: 'auto' }}>Em Alta <strong>>></strong></span>
            </button>
          </Link>
        </div>
      </div>
      <hr className={classes.hr}/>
    </>
  );
});

export default Populares;