import React, { useState } from 'react'
import { observer } from 'mobx-react-lite';
import FilmeStore from '../store/Filmes';
import { makeStyles, Tooltip } from '@material-ui/core';
import Descricao from '../componentes/DescricaoFilme';

const estilos = makeStyles({
  root: {
    margin: '10%',
    position: 'absolute',
    color: '#fff',
    textAlign: 'start'
  },
  principal: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    margin: 'auto',
    alignContent: 'flex-start',
  },
  bloco: {
    display: 'flex',
    flexDirection: 'row',
    margin: '1%',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  img: {
    width: '80px',
    height: '80px'
  },
});
const Populares = observer(() => {
  const classes = estilos();
  const generos = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };
  const exibirDescricao = (e, overview, ano, voto, tit) =>{
    e.preventDefault();
    FilmeStore.carregarDescricao(overview, ano, voto, tit);
    FilmeStore.alternarEstadoDescricao(e.target);
  };
  const imgFilme = caminho => { return `https://image.tmdb.org/t/p/w200${caminho}` };
  const listarFilmes = () => {
    const filmes = FilmeStore.populares;
    const todosGeneros = [];
    filmes.map(i => {
      i.genre_ids.map(id => {
        if (!todosGeneros.includes(id)) todosGeneros.push(id);
      });
    });
    const filmesExibir = [];
    todosGeneros.map(genero => {
      filmesExibir.push(
        <div style={{ display: 'block', color: '#fff' }}>
          <div style={{ display: 'flex', color: '#fff' }}>
            <h4>{generos[genero]}</h4>
          </div>
          <div style={{ display: 'flex', color: '#fff' }}>
            {
            filmes.map(i => {
              if (i.genre_ids.includes(parseInt(genero))) {
                return (
                  <div
                      key={i.id}
                      className={classes.bloco}
                    >
                      <span
                        style={{
                          marginBottom: '1%',
                          fontSize: '10px',
                        }}
                      >
                      </span>
                      <Tooltip title="Ver detalhes">
                        <img 
                          className={classes.img}
                          src={imgFilme(i.poster_path)}
                          alt={i.title}
                          onClick={(e)=>exibirDescricao(e, i.overview, i.release_date, i.vote_average, i.original_title)}
                        />
                      </Tooltip>
                    </div>
                )
              }
            })
            }
          </div>
        </div>
      )
    });
    return filmesExibir;
  } 
  return (
    <div className={classes.root}>
      <h2>Filmes em Alta</h2>
      {listarFilmes()}
      <Descricao />
    </div>
  );
});

export default Populares;