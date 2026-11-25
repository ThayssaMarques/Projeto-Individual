

function mostrarMensagem(texto, tipo) {
    let caixa = document.getElementById("mensagem");
    caixa.innerHTML = texto;
    caixa.className = "mensagem " + tipo;
}


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


function cadastrar() {
    let nome = document.getElementById("inputNome").value;
    let email = document.getElementById("inputEmail").value;
    let senha = document.getElementById("inputSenha").value;
    let confirmacao = document.getElementById("inputConfirmacao").value;

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
        fetch("/usuarios/cadastrar", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                nomeServer: nome,
                emailServer: email.toLowerCase(),
                senhaServer: senha
            })
        }).then(function (resposta) {
            if (resposta.ok) {
                mostrarMensagem("Conta criada com sucesso! Levando você para o login...", "sucesso");
                setTimeout(function () {
                    window.location.href = "login.html";
                }, 1500);
            } else {
                mostrarMensagem("Houve um erro ao criar a conta. Tente novamente.", "erro");
            }
        }).catch(function (erro) {
            console.log(erro);
            mostrarMensagem("Não foi possível conectar ao servidor.", "erro");
        });
}
}

function entrar() {
    let email = document.getElementById("inputEmail").value;
    let senha = document.getElementById("inputSenha").value;

    if (email == "" || senha == "") {
        mostrarMensagem("Preencha e-mail e senha.", "erro");
    } else {
        fetch("/usuarios/autenticar", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                emailServer: email.toLowerCase(),
                senhaServer: senha
            })
        }).then(function (resposta) {
            if (resposta.ok) {
                resposta.json().then(function (json) {
                    sessionStorage.ID_USUARIO = json.id;
                    sessionStorage.NOME_USUARIO = json.nome;
                    sessionStorage.EMAIL_USUARIO = json.email;

                    mostrarMensagem("Bem-vindo(a), " + json.nome + "!", "sucesso");
                    setTimeout(function () {
                        window.location.href = "index.html";
                    }, 1200);
                });
            } else {
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
