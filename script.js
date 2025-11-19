// Aguarda o conteúdo da página carregar
document.addEventListener('DOMContentLoaded', () => {
    
    // --- FUNCIONALIDADE: SCROLL SUAVE ---
    
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

    // (Futuras funcionalidades de JS podem ser adicionadas aqui)

});