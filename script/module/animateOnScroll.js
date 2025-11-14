export default class AnimateOnScroll {
  constructor(selectors) {
    this.targets = document.querySelectorAll(selectors);
    this.handleIntersection = this.handleIntersection.bind(this);
  }

  handleIntersection(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Adiciona a classe 'active' para disparar a animação CSS
        entry.target.classList.add('active');
        
        // (Opcional) Se quiser que a animação se repita sempre que sair/entrar da tela,
        // descomente o 'else' abaixo:
        // } else {
        //   entry.target.classList.remove('active');
      }
    });
  }

  init() {
    if (!this.targets.length) return this;

    const options = {
      root: null,
      // Dispara quando o elemento estiver 30% visível na tela
      rootMargin: '0px 0px -30% 0px', 
      threshold: 0.1
    };

    const observer = new IntersectionObserver(this.handleIntersection, options);

    this.targets.forEach((target) => {
      observer.observe(target);
    });

    return this;
  }
}