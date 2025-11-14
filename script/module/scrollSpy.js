export default class ScrollSpy {
  constructor(selectors) {
    // Seleciona todas as seções que queremos monitorar
    this.targets = document.querySelectorAll(selectors);
    this.handleIntersection = this.handleIntersection.bind(this);
  }

  handleIntersection(entries) {
    entries.forEach((entry) => {
      // Se o elemento estiver visível na tela (dentro da margem definida)
      if (entry.isIntersecting) {
        
        // 1. Remove a classe 'active' de todos os outros para garantir que só um tenha foco
        this.targets.forEach((item) => item.classList.remove('active'));
        
        // 2. Adiciona a classe 'active' ao elemento que acabou de aparecer
        // Isso fará o CSS (.about.active h1) disparar a animação de descida
        entry.target.classList.add('active');

        // (Opcional) Lógica específica se quiser fazer algo SOMENTE no about
        if (entry.target.classList.contains('about')) {
          // Ex: console.log("Estou na seção about!");
        }

        // 3. Atualiza a URL (Lógica do ScrollSpy original)
        const id = entry.target.getAttribute('id');
        if (id) {
            const newURL = id === 'home' 
              ? window.location.pathname 
              : `${window.location.pathname}#${id}`;
            
            // Atualiza URL sem recarregar
            history.replaceState(null, '', newURL);
        }
      }
    });
  }

  init() {
    if (!this.targets.length) return this;

    const options = {
      root: null, // viewport
      // rootMargin define a "linha de chegada". 
      // O evento dispara quando o elemento cruza essa linha invisível no meio da tela.
      rootMargin: '-30% 0px -50% 0px', 
      threshold: 0
    };

    const observer = new IntersectionObserver(this.handleIntersection, options);

    // Manda o observador vigiar cada seção
    this.targets.forEach((target) => {
      observer.observe(target);
    });

    return this;
  }
}