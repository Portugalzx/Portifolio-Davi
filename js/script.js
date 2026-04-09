

document.addEventListener('DOMContentLoaded', () => {
    const footerParagraph = document.querySelector('.rodape p:first-child');
    if (footerParagraph) {
        const currentYear = new Date().getFullYear();
        footerParagraph.innerHTML = `® ${currentYear} Davi Portugal. Todos os Direitos Reservados`;
    }

    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();

            formMessage.className = 'form-message';
            formMessage.textContent = '';

            const nomeInput = document.getElementById('nome');
            const emailInput = document.getElementById('email');
            const mensagemInput = document.getElementById('mensagem');

            const nome = nomeInput.value.trim();
            const email = emailInput.value.trim();
            const mensagem = mensagemInput.value.trim();

            let errors = [];
            if (nome.length < 3) {
                errors.push("O nome deve ter pelo menos 3 caracteres.");
                nomeInput.style.borderColor = 'red';
            } else {
                nomeInput.style.borderColor = '#ddd';
            }

            if (!validateEmail(email)) {
                errors.push("Por favor, insira um e-mail válido.");
                emailInput.style.borderColor = 'red';
            } else {
                emailInput.style.borderColor = '#ddd';
            }

            if (mensagem.length < 10) {
                errors.push("A mensagem deve ter pelo menos 10 caracteres.");
                mensagemInput.style.borderColor = 'red';
            } else {
                mensagemInput.style.borderColor = '#ddd';
            }

            if (errors.length > 0) {
                formMessage.classList.add('error');
                formMessage.textContent = errors.join(' ');
                formMessage.style.display = 'block';
            } else {
                formMessage.classList.add('success');
                formMessage.textContent = "Mensagem enviada com sucesso! Obrigado pelo contato.";
                formMessage.style.display = 'block';
                contactForm.reset();
                
                nomeInput.style.borderColor = '#ddd';
                emailInput.style.borderColor = '#ddd';
                mensagemInput.style.borderColor = '#ddd';
            }
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.setAttribute('title', 'Voltar ao topo');
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        display: none;
        background-color: #00d4ff;
        color: white;
        border: none;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        cursor: pointer;
        font-size: 20px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.3);
        z-index: 1000;
        transition: opacity 0.3s;
    `;
    document.body.appendChild(backToTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
