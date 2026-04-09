async function carregarProjetos() {
  const response = await fetch('../data/projetos.json');
  const projetos = await response.json();

  const container = document.getElementById('container-projetos');

  projetos.forEach(projeto => {
    const card = document.createElement('div');
    card.classList.add('card');

    const titulo = document.createElement('h3');
    titulo.textContent = projeto.nome;

    const descricao = document.createElement('p');
    descricao.textContent = projeto.descricao;

    const botao = document.createElement('a');
    botao.href = projeto.github;
    botao.textContent = 'Ver no GitHub';
    botao.classList.add('btn-primario');

    card.appendChild(titulo);
    card.appendChild(descricao);
    card.appendChild(botao);

    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', carregarProjetos);