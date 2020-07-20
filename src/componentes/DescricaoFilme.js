import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { observer } from 'mobx-react-lite';
import FilmeStore from '../store/Filmes';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

const Descricao = observer(()=> {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const rotulos = ['Descrição: ', 'Ano: ', 'Nota: ', 'Título Original: '];
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Popover
        /* id={id} */
        className={classes.caixa}
        open={FilmeStore.estadoDescricao}
        anchorEl={FilmeStore.alvoClique}
        onClose={(e)=>{
          e.preventDefault();
          FilmeStore.alternarEstadoDescricao();
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography}>
          {FilmeStore.mostrarDescricao.map((item, ind) =>(
            <p>
              <strong>
                {rotulos[ind]}
              </strong>
              {item}
            </p>
          ))}
        </Typography>
      </Popover>
    </div>
  );
});

export default Descricao;
