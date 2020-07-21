import { decorate, observable, action } from 'mobx';

class AlertaStore {
  constructor() {
    this.mensagem = '';
    this.alerta = false;
    this.alertaMensagem = '';
    this.alertaSeveridade = 'error';
  }


  esconderAlerta() {
    if (this.alerta) this.alerta = false;
    this.alertaMensagem = '';
  }

  exibirAlerta({ mensagem, severidade }) {
    if (!this.alerta) this.alerta = true;
    this.alertaMensagem = mensagem;
    this.alertaSeveridade = severidade;
  }
}

decorate(AlertaStore, {
  mensagem: observable,
  exibirAlerta: action,
  alerta: observable,
  alertaMensagem: observable,
  alertaSeveridade: observable,
});

const alertaStore = new AlertaStore();
export default alertaStore;
