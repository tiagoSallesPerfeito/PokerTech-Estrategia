// Aguarda o conteúdo da página carregar
document.addEventListener('DOMContentLoaded', () => {
    
    // --- FUNCIONALIDADE 1: SCROLL SUAVE ---
    
    // Seleciona todos os links da navegação que apontam para âncoras (#)
    const navLinks = document.querySelectorAll('nav ul li a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Previne o "salto" padrão do navegador
            e.preventDefault();

            // Pega o ID da seção (ex: "#regras")
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Rola suavemente para a seção
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' // Alinha ao topo da seção
                });

                // MELHORIA: Remove o #id da URL para manter a barra de endereços limpa
                history.pushState(null, '', targetId);
            }
        });
    });

    // --- FUNCIONALIDADE 2: EFEITO DE REVELAÇÃO DA SEÇÃO (ON SCROLL) ---
    
    const sections = document.querySelectorAll('.poker-section');
    
    // Configura o Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe is-visible quando a seção entra na tela
                entry.target.classList.add('is-visible');
                // Para de observar depois que a seção é revelada
                observer.unobserve(entry.target);
            }
        });
    }, {
        // Opções de observação
        rootMargin: '0px',
        threshold: 0.2 // A seção é visível quando 20% dela entra na viewport
    });

    // Observa cada seção
    sections.forEach(section => {
        observer.observe(section);
    });

    // --- FUNCIONALIDADE 3: TOPO DA PÁGINA APÓS RECARREGAR (UX) ---
    // Garante que a página comece sempre no topo ao ser carregada, 
    // prevenindo que o navegador memorize a posição anterior.
    window.onload = function() {
        if (window.scrollY !== 0) {
            window.scrollTo(0, 0);
        }
    };
});