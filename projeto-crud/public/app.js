//lógica de negócio para extrair os dados do HTML
const form = document.getElementById('user-form'); 
const userList = document.getElementById('user-list'); 

carregarUsuarios(); //chamando a função logo que o código é carregado

//formulario de preenchimento dos dados da página index.html
form.addEventListener('submit', e => {
    //o método preventDefault() impede esse comportamento padrão, evitando o recarregamento da página.
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    cadastrarUsuario(nome, email);
});

//função para cadastrar os usuários
function cadastrarUsuario(nome, email) {
    //usa a função fetch(), que serve para fazer uma requisição HTTP ao servidor
    //a URL '/api/users' indica o endpoint da API que será chamado (neste caso, o endpoint para cadastrar novos usuários).
    //o segundo parâmetro é um objeto de configuração com as opções da requisição (método, cabeçalhos, corpo
    fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }, //informa ao servidor que o corpo da mensagem será enviado no formato JSON. Isso é importante para que o servidor saiba como interpretar os dados recebidos.
        body: JSON.stringify({ nome, email }) //converte o objeto JavaScript { nome, email } em uma string JSON, pois o fetch só pode enviar texto no corpo da requisição.
    })
    .then(() => { //método .then() é usado para tratar a resposta da requisição fetch.
        //ele será executado depois que o servidor responder (por exemplo, após o usuário ser cadastrado com sucesso).
        form.reset(); 
        carregarUsuarios(); //fazer depois de criar a função para mostrar todos os funcionarios cadastrados.
    });
};

//função para carregar usuários
function carregarUsuarios() { 
    fetch('/api/users') //faz uma requisição GET para o endpoint /api/users (busca os usuários do servidor)
        .then(res => res.json()) //converte a resposta da requisição para o formato JSON
        .then(data => { // manipula os dados já convertidos em JSON
            userList.innerHTML = '';  // limpa o conteúdo atual da lista de usuários na página
            data.forEach(user => { // percorre cada usuário retornado pela API
                const li = document.createElement('li'); // cria um novo elemento de lista (<li>) dinamicamente
                li.innerHTML = `${user.nome} (${user.email}) 
                <button onclick="atualizarUsuario(${user.id})">Editar</button>
                <button onclick="excluirUsuario(${user.id})">Excluir</button>`;
                userList.appendChild(li);  // adiciona o item de lista criado dentro do elemento userList (exibe na tela)
            });
        });
};

//função para atualizar (atualização completa)
function atualizarUsuario(id) {
    const nome = prompt('Digite o novo nome:');
    const email = prompt('Digite o novo email:');
    fetch(`/api/users/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email })
    })
    .then(() => {
        carregarUsuarios();
    });
};

//função para excluir
function excluirUsuario(id) {
    const confirmacao = confirm('Tem certeza?');

    if (!confirmacao) {
        return;
    };

    fetch(`/api/users/${id}`, {
        method: 'DELETE'
    })
    .then(() => {
        carregarUsuarios();
    });
};
