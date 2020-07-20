import { decorate, observable } from 'mobx';

class FilmesStore {
  constructor () {
    this.resultado = [];
    this.pagina = 0;
    this.totalPaginas = 0;
    this.totalResultados = 0;
    this.populares = [];
    this.paginaPop = 0;
    this.totalResultados = 0;
    this.estadoDescricao = false;
    this.alvo = null;
    this.descricao = ['sem descricao'];
  }

  carregarFilmes(filmes) {
    this.resultado = [];
    const { page, results, total_pages, total_results } = filmes;
    this.pagina = page;
    this.resultado = results;
    this.totalPaginas = total_pages;
    this.totalResultados = total_results;
  }

  filmesPopulares(filmes) {
    this.populares = [];
    const { page, results, total_pages } = filmes;
    this.paginaPop = page;
    this.populares = results;
    this.totalPaginasPop = total_pages;
  }

  carregarDescricao(descricao, ano, popular, titulo) {
    this.descricao = [];
    this.descricao.push(descricao, ano, popular, titulo);
  }

  alternarEstadoDescricao(alvo) {
    this.estadoDescricao = !this.estadoDescricao;
    this.alvo = alvo;
  }

  get alvoClique() {
    return this.alvo;
  }

  get mostrarDescricao() {
    return this.descricao;
  }

}

decorate(FilmesStore, {
  resultado: observable,
  pagina: observable,
  totalPaginas: observable,
  totalResultados: observable,
  populares: observable,
  paginaPop: observable,
  totalPaginasPop: observable,
  estadoDescricao: observable,
  alvo: observable,
  descricao: observable,
});

export default new FilmesStore();