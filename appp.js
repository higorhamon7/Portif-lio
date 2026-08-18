'use strict';

// Função para alternar tema com persistência
function toggleTheme() {
    try {
        const body = document.body;
        body.classList.toggle('dark-theme');
        body.classList.toggle('light-theme');

        const themeBtn = document.querySelector('.theme-btn');
        if (body.classList.contains('dark-theme')) {
            themeBtn.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
            localStorage.setItem('theme', 'dark'); // Salva no localStorage
        } else {
            themeBtn.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
            localStorage.setItem('theme', 'light');
        }
        console.log('Tema alternado com sucesso.'); // Debug
    } catch (error) {
        console.error('Erro ao alternar tema:', error);
    }
}

// Função para redirecionar ao LinkedIn
function openLinkedIn() {
    try {
        window.open(
            'https://www.linkedin.com/in/higorhamon-',
            '_blank',
            'noopener' // Segurança
        );
        console.log('LinkedIn aberto com sucesso.'); // Debug
    } catch (error) {
        console.error('Erro ao abrir LinkedIn:', error);
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.querySelector('.theme-btn');
    const linkedinBtn = document.querySelector('.linkedin-btn');

    if (!themeBtn || !linkedinBtn) {
        console.error('Botões não encontrados. Verifique os seletores.');
        return;
    }

    // Carrega tema salvo
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
        themeBtn.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
    } else {
        themeBtn.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
    }

    // Eventos
    themeBtn.addEventListener('click', toggleTheme);
    linkedinBtn.addEventListener('click', openLinkedIn);
});
