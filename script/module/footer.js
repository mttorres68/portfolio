export default class UpdateFooterYear {
  constructor(selector) {
    // Seleciona o elemento que vai guardar o ano
    this.yearElement = document.querySelector(selector);
  }

  // Pega o ano atual
  getCurrentYear() {
    return new Date().getFullYear();
  }

  // Atualiza o texto do elemento com o ano atual
  updateYear() {
    if (this.yearElement) {
      this.yearElement.textContent = this.getCurrentYear();
    }
  }

  // Método de inicialização (igual ao seu ReadMore)
  init() {
    this.updateYear();
    return this;
  }
}