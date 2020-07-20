import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { observer } from 'mobx-react-lite';

import AlertaStore from '../store/Alertas';

const Mensagens = observer(() => (
  <Snackbar
    open={AlertaStore.alerta}
    autoHideDuration={4000}
    onClose={() => AlertaStore.esconderAlerta()}
  >
    <Alert
      variant="filled"
      severity={AlertaStore.alertaSeveridade}
      onClose={() => AlertaStore.esconderAlerta()}
    >
      <strong>{AlertaStore.alertaMensagem}</strong>
    </Alert>
  </Snackbar>
));

export default Mensagens;