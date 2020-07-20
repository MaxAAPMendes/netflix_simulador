import React, { useState } from 'react';
import { makeStyles, TextField } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { observer } from 'mobx-react-lite';
import AlertaStore from '../store/Alertas'
import FilmeStore from '../store/Filmes';
import {ApiBuscaFilmes} from '../api/apis';
import { navigate } from '@reach/router';

const estilos = makeStyles({
  rootPesquisa: {
    display: 'flex',
    flexDirection: 'row',
    width: '50%',
    margin: 'auto',
    position: 'absolute',
    bottom: '150px',
    left: '250px',
    right: '250px'
  },
  campoTexto: {
    color: '#8c8c8c',
    width: '70%',
    fontWeight: 'bold !important',
    borderRadius: '4px',
    paddingLeft: '.5%',
    marginLeft: '2%',
    backgroundColor: '#fff',
  },
  btn: {
    color: '#fff',
    backgroundColor: '#f40612',
    fontSize: '1.5em',
    fontWeight: '400',
    fontFamily: 'Century Gothic',
    width: '30%',
    textAlign: 'center',
    justifyContent: 'space-between',
    border: 'none',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  seta: {
    margin: '5% 0% 0% 5%',
  },
  alerta: {
    color: '#ffa00a',
    fontSize: '20px',
    position: 'absolute',
    fontWeight: 'bold',
    bottom: '100px',
    left: '350px',
    margin: 'auto',
    borderRadius: '4px'
  }
});

const Pesquisar = observer(() => {
  const classes = estilos();
  const [filmePesquisado, setfilmePesquisado] = useState('');

  const buscarFilme = async () => {
    if ( !filmePesquisado ) {
      AlertaStore.exibirAlerta({
        mensagem: 'Digite o nome de um filme ou série!',
        severidade: 'warning',
      });
      return;
    };
    await ApiBuscaFilmes.get(filmePesquisado.trim())
      .then(res => {
        if (res.status !== 200) {
          AlertaStore.exibirAlerta({
            mensagem: 'Ocorreu um erro na solicitacao tente novamente!',
            severidade: 'error',
          });
          return;
        }
        if (res.data.total_results === 0) {
          AlertaStore.exibirAlerta({
            mensagem: 'Ops! Nenhum filme encontrado! Tente novamente!',
            severidade: 'warning',
          });
          return;
        };
        const {data} = res;
        FilmeStore.carregarFilmes(data);
        navigate('/filmes');
      })
      .catch(() => {
        AlertaStore.exibirAlerta({
          mensagem: 'Erro na conexão!',
          severidade: 'error',
        });
        return;
      })
  }
  return (
    <>
      <div className={classes.rootPesquisa}>
        <TextField
        value={filmePesquisado}
        onChange={e => setfilmePesquisado(e.target.value)}
        className={classes.campoTexto}
        label="Pesquisar Filmes e Séries"
        autoFocus
        />
        <button
        className={classes.btn}
        onClick={(e) => {
          e.preventDefault();
          buscarFilme()}}
        >
          VAMOS LÁ
          <ArrowForwardIosIcon fontSize="small" className={classes.seta}/>
        </button>
      </div>
    </>
  )
});

export default Pesquisar;