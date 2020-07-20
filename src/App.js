import React from 'react';
import './App.css';
import logo from './img/netflix-logo.png';
import { Button, Tooltip } from '@material-ui/core';
import { Router, Link } from '@reach/router';

import Home from './paginas/home';
import Filmes from './paginas/filmes';
import PaginaNaoLocalizada from './paginas/paginaNaoLocalizada';
import Populares from './paginas/populares';

const estilo = {
  logo: {
    height: '36px',
    width: '134px',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    float: 'left',
    margin: '3% 0% 0% 3%',
  },
  btnEntrar:{
    backgroundColor: '#e50914',
    lineHeight: 'normal',
    padding: '7px 17px',
    fontWeight: '400',
    fontSize: '1rem',
    float: 'right',
    color: '#fff',
    width: '80px',
    textTransform: 'capitalize',
    margin: '3% 3%',
    '&:hover': {
      backgroundColor: '#e50914',
    },
  },
}

function App() {
  return (
    <div className="App">
      <Tooltip title="Página Inicial">
        <Link to="/">
          <img style={estilo.logo} src={logo}/>
        </Link>
      </Tooltip>
      <Button style={estilo.btnEntrar}>
        Entrar
      </Button>
      <Router>
        <Home path="/"/>
        <Filmes path="/filmes"/>
        <Populares path="/populares"/>
        <PaginaNaoLocalizada default/>
      </Router>
    </div>
  );
}

export default App;
