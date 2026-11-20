/* =========================================================
   O HOMEM-DEUS — auth.js
   JavaScript das páginas de login e cadastro.

   IMPORTANTE (para estudo): aqui os dados ficam no localStorage
   do próprio navegador. Isso serve para aprender a lógica, mas um
   site de verdade guarda usuários em um BANCO DE DADOS (ex.: MySQL)
   no servidor, e nunca guarda a senha em texto aberto.
   ========================================================= */


/* ---------- Mostrar mensagens de erro ou sucesso ----------
   texto: o que vai aparecer
   tipo: "erro" (vermelho) ou "sucesso" (verde) — são classes do CSS */
function mostrarMensagem(texto, tipo) {
    let caixa = document.getElementById("mensagem");
    caixa.innerHTML = texto;
    // className troca TODAS as classes do elemento de uma vez
    caixa.className = "mensagem " + tipo;
}


/* ---------- Mostrar / ocultar a senha ----------
   idCampo: id do input de senha
   botao: o próprio botão clicado (enviado com "this" no HTML)
   Trocando o type de "password" para "text", a senha fica visível. */
function mostrarSenha(idCampo, botao) {
    let campo = document.getElementById(idCampo);

    if (campo.type == "password") {
        campo.type = "text";
        botao.innerHTML = "Ocultar";
    } else {
        campo.type = "password";
        botao.innerHTML = "Mostrar";
    }
}


/* ---------- CADASTRO ----------
   Lê os campos, valida um por um com if / else if
   e, se tudo estiver certo, guarda no localStorage. */
function cadastrar() {
    // .value pega o que a pessoa digitou no input
    let nome = document.getElementById("inputNome").value;
    let email = document.getElementById("inputEmail").value;
    let senha = document.getElementById("inputSenha").value;
    let confirmacao = document.getElementById("inputConfirmacao").value;

    // Validações (a primeira que der errado mostra a mensagem e para ali)
    if (nome == "" || email == "" || senha == "" || confirmacao == "") {
        mostrarMensagem("Preencha todos os campos.", "erro");
    } else if (nome.length < 3) {
        mostrarMensagem("O nome precisa ter pelo menos 3 letras.", "erro");
    } else if (email.includes("@") == false || email.includes(".") == false) {
        mostrarMensagem("Digite um e-mail válido (com @ e ponto).", "erro");
    } else if (senha.length < 6) {
        mostrarMensagem("A senha precisa ter pelo menos 6 caracteres.", "erro");
    } else if (senha != confirmacao) {
        mostrarMensagem("As senhas não são iguais.", "erro");
    } else {
                // Envia os dados para a API (rota /usuarios/cadastrar)
        fetch("/usuarios/cadastrar", {
            method: "POST",                                   // POST = criar algo novo
            headers: { "Content-Type": "application/json" },  // avisa que vamos mandar JSON
            body: JSON.stringify({                            // transforma o objeto em texto
                nomeServer: nome,
                emailServer: email.toLowerCase(),
                senhaServer: senha
            })
        }).then(function (resposta) {
            // .then roda QUANDO a API responder
            if (resposta.ok) {
                mostrarMensagem("Conta criada com sucesso! Levando você para o login...", "sucesso");
                setTimeout(function () {
                    window.location.href = "login.html";
                }, 1500);
            } else {
                mostrarMensagem("Houve um erro ao criar a conta. Tente novamente.", "erro");
            }
        }).catch(function (erro) {
            // .catch roda se nem foi possível falar com a API (servidor desligado, por exemplo)
            console.log(erro);
            mostrarMensagem("Não foi possível conectar ao servidor.", "erro");
        });
}
}

/* ---------- LOGIN ----------
   Compara o que foi digitado com o que foi guardado no cadastro. */
function entrar() {
    let email = document.getElementById("inputEmail").value;
    let senha = document.getElementById("inputSenha").value;

    if (email == "" || senha == "") {
        mostrarMensagem("Preencha e-mail e senha.", "erro");
    } else {
        // Pergunta para a API se esse e-mail e essa senha existem no banco
        fetch("/usuarios/autenticar", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                emailServer: email.toLowerCase(),
                senhaServer: senha
            })
        }).then(function (resposta) {
            if (resposta.ok) {
                // resposta.json() "abre o pacote" que a API mandou: { id, nome, email }
                resposta.json().then(function (json) {
                    // Guarda quem está logado (mesmos nomes que o modelo da faculdade usa)
                    sessionStorage.ID_USUARIO = json.id;
                    sessionStorage.NOME_USUARIO = json.nome;
                    sessionStorage.EMAIL_USUARIO = json.email;

                    mostrarMensagem("Bem-vindo(a), " + json.nome + "!", "sucesso");
                    setTimeout(function () {
                        window.location.href = "index.html";
                    }, 1200);
                });
            } else {
                // A API mandou um texto de erro (ex.: "Email e/ou senha inválido(s)")
                resposta.text().then(function (texto) {
                    mostrarMensagem(texto, "erro");
                });
            }
        }).catch(function (erro) {
            console.log(erro);
            mostrarMensagem("Não foi possível conectar ao servidor.", "erro");
        });
    }
}
