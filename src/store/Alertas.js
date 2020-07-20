import { decorate, observable, action } from 'mobx';

class AlertaStore {
  constructor() {
    this.suspenso = false;
    this.mensagem = '';
    this.alerta = false;
    this.alertaMensagem = '';
    this.alertaSeveridade = 'error';
  }

  suspender(mensagem) {
    if (!this.suspenso) this.suspenso = true;
    this.mensagem = mensagem;
  }

  retomar() {
    if (this.suspenso) this.suspenso = false;
    this.mensagem = '';
  }

  esconderAlerta() {
    if (this.alerta) this.alerta = false;
    this.alertaMensagem = '';
  }

  exibirAlerta({ mensagem, severidade }) {
    this.retomar();
    if (!this.alerta) this.alerta = true;
    this.alertaMensagem = mensagem;
    this.alertaSeveridade = severidade;
  }
}

decorate(AlertaStore, {
  suspenso: observable,
  suspender: action,
  retomar: action,
  mensagem: observable,
  exibirAlerta: action,
  esconderAlerta: action,
  alerta: observable,
  alertaMensagem: observable,
  alertaSeveridade: observable,
});

const alertaStore = new AlertaStore();
export default alertaStore;
