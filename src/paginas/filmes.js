import React from 'react';
import { observer } from 'mobx-react-lite';
import FilmeStore from '../store/Filmes';
import { makeStyles, Tooltip } from '@material-ui/core';
import Descricao from '../componentes/DescricaoFilme';

const estilos = makeStyles({
  root: {
    margin: '10%',
    position: 'absolute'
  },
  titulo: {
    color: '#fff'
  },
  conjunto: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 'auto',
    alignContent: 'center',
    alignItems: 'center'

  },
  bloco: {
    display: 'grid',
    flexDirection: 'row',
    flexWrap: 'wrap',
    whiteSpace: 'nowrap',
    margin: '2%',
    fontSize: '1em',
    color: '#fff',
    fontWeight: '500',
    textAlign: 'center',
    maxWidth: '300px',
    '&:hover': {
      cursor: 'pointer',
    },
  }
});


const Filmes = observer(() => {
  const classes = estilos();
  const exibirDescricao = (e, overview, ano, voto, tit) =>{
    e.preventDefault();
    FilmeStore.carregarDescricao(overview, ano, voto, tit);
    FilmeStore.alternarEstadoDescricao(e.target);
  };
  const imgFilme = caminho => {return `https://image.tmdb.org/t/p/w200${caminho}`};
  const listarFilmes = () => {
    const filmes = FilmeStore.resultado;
    const filmesExibir = [];
    filmes.map(i => {
      if (!filmesExibir.includes(i.title)) {
        filmesExibir.push(
          <div className={classes.bloco} key={i.id}>
            <span
              style={{
                marginBottom: '1%',
              }}
            >
              {i.title}
            </span>
            <Tooltip title="Ver detalhes do filme">
              <img 
                src={imgFilme(i.poster_path)} alt={i.title}
                onClick={(e)=>exibirDescricao(e, i.overview, i.release_date, i.vote_average, i.original_title)}
              />
            </Tooltip>
          </div>
        );
      }
    });
    return filmesExibir;
  }
  return (
    <div className={classes.root}>
      <h4 className={classes.titulo}>Foram localizados {FilmeStore.totalResultados} Filmes!</h4>
      <div className={classes.conjunto}>
        {listarFilmes()}
      </div>
      <Descricao />
    </div>
  );
});

export default Filmes;