import React from 'react';
import fundo from '../img/fundo1.png';
import Pesquisar from '../componentes/PesquisarFilmes';
import { makeStyles } from '@material-ui/core';
import Lancamento from '../componentes/Lancamento';
import BannerPopulares from '../componentes/BannerPopulares';
import PerguntasFrequentes from '../componentes/PerguntasFrequentes';
import Mensagens from '../componentes/Mensagens';
import Rodape from '../componentes/Rodape';

const estilos = makeStyles({
  rootImg: {
    position: 'relative',
    display: 'inline-block',
    textAlign: 'center'
  },
  img: {
    height: '100%',
    width: '100%',
  },
  titulo: {
    position: "absolute",
    color: '#fff',
    fontWeight: 'bold',
    top: '125px',
    fontSize: '50px',
    margin: 'auto',
    width: '100%',
    textAlign: 'center'
  },
  subTitulo: {
    position: "absolute",
    color: '#fff',
    fontWeight: 'bold',
    bottom: '210px',
    fontSize: '25px',
    margin: 'auto',
    width: '100%',
    textAlign: 'center'
  },
  orientacao: {
    position: "absolute",
    color: '#fff',
    fontWeight: 'bold',
    bottom: '125px',
    fontSize: '15px',
    margin: 'auto',
    width: '100%',
    textAlign: 'center'
  },
});

const Home = () => {
  const classes = estilos();
  return (
    <>
      <figure className={classes.rootImg}>
        <img src={fundo} className={classes.img}/>
        <h1 className={classes.titulo}>Filmes, séries e muito mais.<br/> Sem limites.</h1>
        <h4 className={classes.subTitulo}>Assista onde quiser. Cancele quando quiser.</h4>
        <Pesquisar />
        <h5 className={classes.orientacao}>Pronto para assistir? Pesquise acima por filmes e séries disponíveis.</h5>
      </figure>
      <Lancamento />
      <BannerPopulares />
      <PerguntasFrequentes />
      <Rodape />
      <Mensagens />
    </>
  )
}

export default Home;