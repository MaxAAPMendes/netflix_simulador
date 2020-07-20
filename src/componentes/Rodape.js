import React from 'react';
import { makeStyles } from '@material-ui/core';

const estilos = makeStyles({
  root: {
    display: 'grid',
    minHeight: '250px',
    margin: '3% 20% 3% 20%'
  },
  quadro: {
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  titInfo:{
    fontSize: '18px',
    color: '#757575',
    textAlign: 'start',
    marginBottom: '0%'
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    whiteSpace: 'nowrap',
    margin: '0% 3% 0% 0%',
    fontSize: '13px',
    color: '#757575',
  }
});

const rotulos = [
  'Perguntas Frequentes', 'Centro de ajuda', 'Conta', 'Imprensa', 'Relações com investidores', 'Carreiras', 'Resgatar cartão pré-pago', 'Comprar cartão pré-pago', 'Formas de assistir', 'Termos de uso', 'Privacidade', 'Preferências de cookies', 'Informações corporativas', 'Entre em contato', 'Teste de velocidade', 'Avisos legais', 'Originais Netflix'
];

const Rodape = () => {
  const classes = estilos();
  return (
    <div className={classes.root}>
      <span className={classes.titInfo}>Dúvidas? Ligue 0800-761-4631</span>
      <div className={classes.quadro}>
        {rotulos.map( item => {
          return (
            <span key={item} className={classes.info}>
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Rodape;