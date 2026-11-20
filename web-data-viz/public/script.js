/* =========================================================
   O HOMEM-DEUS — script.js
   JavaScript da página principal (index.html).

   Organização:
   1. Menu do celular
   2. Versículos (janela/modal)
   3. Capítulos da jornada (abrir e fechar)
   4. Gráfico com Chart.js (Evangelhos)
   5. Quiz
   6. Usuário logado (mostrar nome e sair)
   7. O que roda quando a página abre
   ========================================================= */


/* =========================================================
   1. MENU DO CELULAR
   ========================================================= */

// Chamada pelo botão ☰. classList.toggle("x") funciona como um interruptor:
// se o elemento NÃO tem a classe, adiciona; se JÁ tem, remove.
// O CSS mostra o menu quando ele tem a classe "menu-aberto".
function abrirFecharMenu() {
    let menu = document.getElementById("menu");
    menu.classList.toggle("menu-aberto");
}

// Chamada ao clicar em um link do menu: fecha o menu no celular.
function fecharMenu() {
    let menu = document.getElementById("menu");
    menu.classList.remove("menu-aberto");
}


/* =========================================================
   2. VERSÍCULOS
   CONCEITO NOVO — OBJETO: guarda informações em pares "chave: valor".
   Aqui a chave é a referência (ex.: "João 1:14") e o valor é o texto.
   Para buscar um texto: versiculos["João 1:14"]
   Para adicionar um versículo novo, é só incluir mais uma linha.
   "\n" dentro do texto significa "quebra de linha".
   ========================================================= */
let versiculos = {
    "João 1:1": "No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus.",
    "João 1:14": "E o Verbo se fez carne e habitou entre nós, e vimos a sua glória, como a glória do unigênito do Pai, cheio de graça e de verdade.",
    "João 1:1-14": "1 No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus.\n2 Ele estava no princípio com Deus.\n3 Todas as coisas foram feitas por ele, e sem ele nada do que foi feito se fez.\n(...)\n14 E o Verbo se fez carne e habitou entre nós, e vimos a sua glória, como a glória do unigênito do Pai, cheio de graça e de verdade.",
    "Filipenses 2:5-8": "De sorte que haja em vós o mesmo sentimento que houve também em Cristo Jesus, que, sendo em forma de Deus, não teve por usurpação ser igual a Deus, mas aniquilou-se a si mesmo, tomando a forma de servo, fazendo-se semelhante aos homens; e, achado na forma de homem, humilhou-se a si mesmo, sendo obediente até à morte e morte de cruz.",
    "Gálatas 4:4": "Mas, vindo a plenitude dos tempos, Deus enviou seu Filho, nascido de mulher, nascido sob a lei.",
    "Lucas 2:7": "E deu à luz o seu filho primogênito, e envolveu-o em panos, e deitou-o numa manjedoura, porque não havia lugar para eles na estalagem.",
    "Lucas 2:52": "E crescia Jesus em sabedoria, e em estatura, e em graça para com Deus e os homens.",
    "Lucas 2:42-43": "E, tendo ele já doze anos, subiram a Jerusalém, segundo o costume do dia da festa. E, regressando eles, terminados aqueles dias, ficou o menino Jesus em Jerusalém, e não o souberam seus pais.",
    "Marcos 6:3": "Não é este o carpinteiro, filho de Maria, e irmão de Tiago, e de José, e de Judas, e de Simão? E não estão aqui conosco suas irmãs? E escandalizavam-se nele.",
    "Mateus 4:2": "E, tendo jejuado quarenta dias e quarenta noites, depois teve fome.",
    "João 4:6": "E estava ali a fonte de Jacó. Jesus, pois, cansado do caminho, assentou-se assim junto da fonte.",
    "Marcos 4:38": "E ele estava na popa, dormindo sobre uma almofada; e despertaram-no, dizendo-lhe: Mestre, não se te dá que pereçamos?",
    "João 19:28": "Depois, sabendo Jesus que já todas as coisas estavam terminadas, para que a Escritura se cumprisse, disse: Tenho sede.",
    "João 11:5": "Ora, Jesus amava a Marta, e a sua irmã, e a Lázaro.",
    "João 19:26-27": "Ora, Jesus, vendo ali sua mãe e que o discípulo a quem ele amava estava presente, disse à sua mãe: Mulher, eis aí o teu filho. Depois, disse ao discípulo: Eis aí tua mãe. E desde aquela hora o discípulo a recebeu em sua casa.",
    "João 11:35": "Jesus chorou.",
    "Mateus 26:38": "Então, lhes disse: A minha alma está cheia de tristeza até à morte; ficai aqui e vigiai comigo.",
    "Lucas 4:29": "E, levantando-se, o expulsaram da cidade e o levaram até ao cume do monte em que a cidade deles estava edificada, para dali o precipitarem.",
    "Isaías 53:3": "Era desprezado e o mais indigno entre os homens, homem de dores, experimentado nos trabalhos; e, como um de quem os homens escondiam o rosto, era desprezado, e não fizemos dele caso algum.",
    "Hebreus 4:15": "Porque não temos um sumo sacerdote que não possa compadecer-se das nossas fraquezas; porém um que, como nós, em tudo foi tentado, mas sem pecado.",
    "Mateus 26:49": "E logo, aproximando-se de Jesus, disse: Eu te saúdo, Rabi. E beijou-o.",
    "Mateus 26:56": "Mas tudo isso aconteceu para que se cumpram as Escrituras dos profetas. Então, todos os discípulos, deixando-o, fugiram.",
    "Mateus 27:26": "Então, soltou-lhes Barrabás e, tendo mandado açoitar a Jesus, entregou-o para ser crucificado.",
    "Mateus 27:46": "E, perto da hora nona, exclamou Jesus em alta voz, dizendo: Eli, Eli, lamá sabactâni, isto é, Deus meu, Deus meu, por que me desamparaste?",
    "Salmo 22:1": "Deus meu, Deus meu, por que me desamparaste? Por que te alongas das palavras do meu bramido e não me auxilias?",
    "Isaías 53:5": "Mas ele foi ferido pelas nossas transgressões e moído pelas nossas iniquidades; o castigo que nos traz a paz estava sobre ele, e pelas suas pisaduras fomos sarados.",
    "Romanos 5:19": "Porque, como, pela desobediência de um só homem, muitos foram feitos pecadores, assim, pela obediência de um, muitos serão feitos justos.",
    "Romanos 5:12-21": "12 Pelo que, como por um homem entrou o pecado no mundo, e pelo pecado, a morte, assim também a morte passou a todos os homens, por isso que todos pecaram.\n(...)\n19 Porque, como, pela desobediência de um só homem, muitos foram feitos pecadores, assim, pela obediência de um, muitos serão feitos justos.\n(...)\n21 Para que, assim como o pecado reinou na morte, também a graça reinasse pela justiça para a vida eterna, por Jesus Cristo, nosso Senhor.",
    "1 Coríntios 15:22": "Porque, assim como todos morrem em Adão, assim também todos serão vivificados em Cristo.",
    "Hebreus 4:15-16": "15 Porque não temos um sumo sacerdote que não possa compadecer-se das nossas fraquezas; porém um que, como nós, em tudo foi tentado, mas sem pecado.\n16 Cheguemos, pois, com confiança ao trono da graça, para que possamos alcançar misericórdia e achar graça, a fim de sermos ajudados em tempo oportuno.",
    "João 14:6": "Disse-lhe Jesus: Eu sou o caminho, e a verdade, e a vida. Ninguém vem ao Pai senão por mim.",
    "Mateus 11:28": "Vinde a mim, todos os que estais cansados e sobrecarregados, e eu vos aliviarei.",
    "Mateus 5:9": "Bem-aventurados os pacificadores, porque eles serão chamados filhos de Deus.",
    "João 11:25": "Disse-lhe Jesus: Eu sou a ressurreição e a vida; quem crê em mim, ainda que esteja morto, viverá.",
    "Mateus 4:4": "Ele, porém, respondendo, disse: Está escrito: Nem só de pão viverá o homem, mas de toda a palavra que sai da boca de Deus.",
    "Mateus 6:34": "Não vos inquieteis, pois, pelo dia de amanhã, porque o dia de amanhã cuidará de si mesmo. Basta a cada dia o seu mal."
};

// Abre a janela com o versículo. Recebe a referência pelo onclick do HTML.
// Exemplo: onclick="abrirVersiculo('João 1:14')"
function abrirVersiculo(referencia) {
    let texto = versiculos[referencia];

    // Se a referência não existir no objeto, o resultado é "undefined"
    if (texto == undefined) {
        texto = "Versículo ainda não cadastrado.";
    }

    // innerHTML troca o conteúdo de dentro do elemento
    document.getElementById("modalReferencia").innerHTML = referencia;
    document.getElementById("modalTexto").innerHTML = texto;

    // A classe "aberto" faz o CSS mostrar a janela (display: flex)
    document.getElementById("modalVersiculo").classList.add("aberto");
}

function fecharVersiculo() {
    document.getElementById("modalVersiculo").classList.remove("aberto");
}

// Fecha a janela ao clicar no fundo escuro (mas não ao clicar na caixa branca).
// "evento" traz informações do clique. evento.target é o elemento exato clicado.
function clicarFundoModal(evento) {
    if (evento.target.id == "modalVersiculo") {
        fecharVersiculo();
    }
}

// CONCEITO NOVO — addEventListener: "fica escutando" um acontecimento.
// Aqui escutamos as teclas: se apertar Esc, a janela fecha.
document.addEventListener("keydown", function (evento) {
    if (evento.key == "Escape") {
        fecharVersiculo();
    }
});


/* =========================================================
   3. CAPÍTULOS DA JORNADA
   Cada capítulo tem id "capitulo1", "capitulo2"...
   Juntando o texto "capitulo" com o número, achamos o certo.
   ========================================================= */
function abrirCapitulo(numero) {
    let capitulo = document.getElementById("capitulo" + numero);
    capitulo.classList.toggle("aberto");   // abre se estava fechado, fecha se estava aberto
}


/* =========================================================
   4. GRÁFICO COM CHART.JS

   COMO O CHART.JS FUNCIONA:
   - A biblioteca é carregada no index.html pela tag <script src="...chart.js">.
   - Ela cria a função "Chart". Usamos: new Chart(canvas, configuracao)
   - A configuração é um OBJETO com 3 partes principais:
       type    → tipo do gráfico ("bar" = barras, "line" = linhas, "pie" = pizza)
       data    → os dados: labels (nomes) e datasets (valores e cores)
       options → a aparência: eixos, legenda, tooltip, responsividade

   DADOS FÁCEIS DE ATUALIZAR:
   Todos os dados ficam no vetor "evangelhos" abaixo. Para mudar o gráfico,
   mude só aqui: o gráfico, os nomes embaixo e o total 89 se atualizam sozinhos.
   ========================================================= */
let evangelhos = [
    {
        nome: "Mateus",
        perspectiva: "Rei",
        capitulos: 28,
        cor: "#0b2a4b",
        descricao: "Escrito pensando nos judeus, apresenta Jesus como o Rei prometido, descendente de Davi, que cumpre as profecias do Antigo Testamento."
    },
    {
        nome: "Marcos",
        perspectiva: "Servo",
        capitulos: 16,
        cor: "#84acd6",
        descricao: "O mais curto e dinâmico. Mostra Jesus em ação, servindo: Ele não veio para ser servido, mas para servir (Marcos 10:45)."
    },
    {
        nome: "Lucas",
        perspectiva: "Humano",
        capitulos: 24,
        cor: "#1e5a9e",
        descricao: "Escrito por um médico, destaca a humanidade de Jesus: nascimento, infância e compaixão pelos pobres, pelas mulheres e pelos excluídos."
    },
    {
        nome: "João",
        perspectiva: "Deus",
        capitulos: 21,
        cor: "#bcd3eb",
        descricao: "Começa antes da criação (“No princípio era o Verbo”) e revela a divindade de Jesus pelos sinais e pelas declarações “Eu sou”."
    }
];

/* PLUGIN para escrever o número em cima de cada barra.
   Plugin = um "complemento" que o Chart.js chama em certos momentos.
   afterDatasetsDraw roda DEPOIS que as barras são desenhadas.
   ctx é o "pincel" do canvas: com ele escrevemos o texto. */
let pluginNumerosNasBarras = {
    id: "numerosNasBarras",
    afterDatasetsDraw: function (grafico) {
        let ctx = grafico.ctx;
        let barras = grafico.getDatasetMeta(0).data;   // posições de cada barra
        let valores = grafico.data.datasets[0].data;   // os números (28, 16...)

        ctx.font = "500 16px 'Cormorant Garamond', Georgia, serif";
        ctx.fillStyle = "#1e5a9e";
        ctx.textAlign = "center";

        let i = 0;
        while (i < barras.length) {
            // escreve o valor no x da barra, 8px acima do topo dela
            ctx.fillText(valores[i], barras[i].x, barras[i].y - 8);
            i++;
        }
    }
};

function criarGrafico() {
    // 1) Separamos os dados do vetor de objetos em 3 vetores simples,
    //    porque é assim que o Chart.js recebe os dados.
    let nomes = [];
    let quantidades = [];
    let cores = [];

    let i = 0;
    while (i < evangelhos.length) {
        nomes.push(evangelhos[i].nome);              // push = adiciona no fim do vetor
        quantidades.push(evangelhos[i].capitulos);
        cores.push(evangelhos[i].cor);
        i++;
    }

    // 2) Fonte padrão de todos os textos do gráfico
    Chart.defaults.font.family = "'DM Sans', Arial, sans-serif";

    // 3) Pegamos o <canvas> onde o gráfico será desenhado
    let canvas = document.getElementById("graficoEvangelhos");

    // 4) Criamos o gráfico
    new Chart(canvas, {
        type: "bar",

        data: {
            labels: nomes,                       // nomes de cada barra
            datasets: [
                {
                    label: "Capítulos",
                    data: quantidades,           // altura de cada barra
                    backgroundColor: cores,      // uma cor para cada barra
                    barPercentage: 0.4,          // largura da barra (0 a 1)
                    borderRadius: 0              // barras com cantos retos, como no protótipo
                }
            ]
        },

        options: {
            responsive: true,            // acompanha o tamanho da tela
            maintainAspectRatio: false,  // usa a altura da div .grafico-area (CSS)
            layout: {
                padding: { top: 28 }     // espaço para o número em cima da barra mais alta
            },
            plugins: {
                legend: { display: false },      // esconde a legenda padrão (fizemos a nossa em HTML)
                tooltip: {
                    backgroundColor: "#0b2a4b",
                    padding: 10,
                    callbacks: {
                        // muda o texto da caixinha que aparece ao passar o mouse
                        label: function (contexto) {
                            return contexto.raw + " capítulos";
                        }
                    }
                }
            },
            scales: {
                x: {
                    ticks: { display: false },   // nomes ficam na nossa legenda em HTML
                    grid: { display: false },    // sem linhas verticais
                    border: { color: "#dbe6f2" } // linha da base
                },
                y: {
                    beginAtZero: true,           // eixo começa no zero
                    max: 30,
                    ticks: { display: false, stepSize: 10 },   // linhas a cada 10 capítulos, sem números
                    grid: { color: "#e3ebf4" },  // cor das linhas horizontais
                    border: { display: false, dash: [4, 4] }   // linhas tracejadas (4px traço, 4px espaço)
                }
            }
        },

        plugins: [pluginNumerosNasBarras]
    });
}

// Cria os nomes embaixo das barras (Mateus / Rei, Marcos / Servo...)
function montarLegenda() {
    let html = "";
    let i = 0;

    while (i < evangelhos.length) {
        // Montamos o HTML de cada botão juntando textos (concatenação com +)
        html = html + "<button class='legenda-item' id='legenda" + i + "' onclick='mostrarEvangelho(" + i + ")'>" +
            "<strong>" + evangelhos[i].nome + "</strong>" +
            "<em>" + evangelhos[i].perspectiva + "</em>" +
            "</button>";
        i++;
    }

    document.getElementById("legendaGrafico").innerHTML = html;
}

// Mostra a explicação do Evangelho clicado e destaca o nome dele
function mostrarEvangelho(indice) {
    let escolhido = evangelhos[indice];

    document.getElementById("descricaoEvangelho").innerHTML =
        "<strong>" + escolhido.nome + " · " + escolhido.perspectiva + "</strong> — " + escolhido.descricao;

    // Tira o destaque de todos e coloca só no clicado
    let i = 0;
    while (i < evangelhos.length) {
        document.getElementById("legenda" + i).classList.remove("ativo");
        i++;
    }
    document.getElementById("legenda" + indice).classList.add("ativo");
}

// Soma os capítulos com um while (acumulador) e mostra o total na tela
function mostrarTotalCapitulos() {
    let total = 0;
    let i = 0;

    while (i < evangelhos.length) {
        total = total + evangelhos[i].capitulos;
        i++;
    }

    document.getElementById("totalCapitulos").innerHTML = total;
    document.getElementById("totalTexto").innerHTML = total;
}


/* =========================================================
   5. QUIZ
   As perguntas ficam num vetor de objetos. Cada objeto tem:
   pergunta, alternativas (outro vetor), correta (posição da certa,
   começando em 0) e explicacao (mostrada após responder).
   ========================================================= */
let perguntas = [
    {
        pergunta: "Segundo João 1, quem se fez carne e habitou entre nós?",
        alternativas: ["O Verbo", "Moisés", "João Batista", "Um anjo"],
        correta: 0,
        explicacao: "João 1:14 — o Verbo, que é Jesus."
    },
    {
        pergunta: "Qual versículo mostra Jesus chorando pela morte de Lázaro?",
        alternativas: ["Mateus 5:9", "João 11:35", "João 14:6", "Lucas 2:52"],
        correta: 1,
        explicacao: "João 11:35 — “Jesus chorou.”"
    },
    {
        pergunta: "Qual Evangelho tem o maior número de capítulos?",
        alternativas: ["Marcos", "João", "Mateus", "Lucas"],
        correta: 2,
        explicacao: "Mateus, com 28 capítulos (veja o gráfico)."
    },
    {
        pergunta: "Segundo Hebreus 4:15, Jesus foi tentado em tudo como nós, mas...",
        alternativas: ["Desistiu no deserto", "Pediu que os anjos lutassem", "Fugiu da cruz", "Sem pecado"],
        correta: 3,
        explicacao: "Ele foi tentado em tudo, mas sem pecado."
    }
];

let letras = ["A", "B", "C", "D"];

// Variáveis globais: guardam o "estado" do quiz enquanto a pessoa joga
let perguntaAtual = 0;     // posição da pergunta no vetor
let acertos = 0;           // quantas acertou
let jaRespondeu = false;   // impede responder duas vezes a mesma pergunta

// Coloca na tela a pergunta da posição "perguntaAtual"
function mostrarPergunta() {
    let item = perguntas[perguntaAtual];

    // Contador "Questão 1 de 4" (somamos 1 porque o vetor começa no 0)
    document.getElementById("quizContador").innerHTML =
        "Questão " + (perguntaAtual + 1) + " de " + perguntas.length;

    // Porcentagem de progresso: quantas já respondidas / total
    let porcentagem = (perguntaAtual / perguntas.length) * 100;
    document.getElementById("quizPorcentagem").innerHTML = porcentagem.toFixed(0) + "%";
    document.getElementById("barraPreenchida").style.width = porcentagem + "%";

    document.getElementById("quizPergunta").innerHTML = item.pergunta;

    // Monta os 4 botões de alternativa com while
    let html = "";
    let i = 0;
    while (i < item.alternativas.length) {
        html = html + "<button class='opcao' id='opcao" + i + "' onclick='escolherResposta(" + i + ")'>" +
            "<span class='opcao-letra'>" + letras[i] + "</span>" +
            item.alternativas[i] +
            "</button>";
        i++;
    }
    document.getElementById("quizOpcoes").innerHTML = html;

    // Reinicia o rodapé da pergunta
    document.getElementById("quizFeedback").innerHTML = "";
    document.getElementById("botaoProxima").disabled = true;   // desativa até responder
    jaRespondeu = false;

    // Na última pergunta, o botão muda de texto
    if (perguntaAtual == perguntas.length - 1) {
        document.getElementById("botaoProxima").innerHTML = "Ver resultado <span>→</span>";
    } else {
        document.getElementById("botaoProxima").innerHTML = "Próxima questão <span>→</span>";
    }
}

// Chamada ao clicar numa alternativa. "escolhida" é a posição clicada (0 a 3).
function escolherResposta(escolhida) {
    if (jaRespondeu == false) {
        jaRespondeu = true;

        let certa = perguntas[perguntaAtual].correta;
        let feedback = document.getElementById("quizFeedback");

        if (escolhida == certa) {
            acertos++;
            document.getElementById("opcao" + escolhida).classList.add("correta");
            feedback.innerHTML = "✓ Isso mesmo! " + perguntas[perguntaAtual].explicacao;
        } else {
            // marca a escolhida de vermelho e mostra qual era a certa em verde
            document.getElementById("opcao" + escolhida).classList.add("errada");
            document.getElementById("opcao" + certa).classList.add("correta");
            feedback.innerHTML = "Quase! Resposta: " + letras[certa] + ". " + perguntas[perguntaAtual].explicacao;
        }

        // Desativa todas as alternativas para não clicar de novo
        let i = 0;
        while (i < letras.length) {
            document.getElementById("opcao" + i).disabled = true;
            i++;
        }

        // Libera o botão "Próxima questão"
        document.getElementById("botaoProxima").disabled = false;
    }
}

function proximaPergunta() {
    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
}

// Envia o resultado do quiz para a API gravar no banco
function salvarResultado() {
    let idUsuario = sessionStorage.ID_USUARIO;

    fetch("/resultados/registrar/" + idUsuario, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            acertosServer: acertos,
            totalPerguntasServer: perguntas.length
        })
    }).then(function (resposta) {
        if (resposta.ok) {
            console.log("Resultado salvo no banco!");
                    obterDadosEvolucao();   // busca de novo, agora com a tentativa nova
        } else {
            console.log("Erro ao salvar o resultado.");
        }
    }).catch(function (erro) {
        console.log(erro);
    });
}

function mostrarResultado() {
     salvarResultado();
    // Esconde as perguntas e mostra o resultado (style.display)
    document.getElementById("quizAndamento").style.display = "none";
    document.getElementById("quizResultado").style.display = "block";

    document.getElementById("resultadoNumero").innerHTML = acertos + "/" + perguntas.length;

    // Se a pessoa estiver logada, usamos o nome dela na mensagem
    let nome = "";
        if (sessionStorage.NOME_USUARIO != null) {
        nome = ", " + sessionStorage.NOME_USUARIO;
    }
    let mensagem = "";
    if (acertos == perguntas.length) {
        mensagem = "Parabéns" + nome + "! Você acertou tudo. A jornada ficou no coração.";
    } else if (acertos >= perguntas.length / 2) {
        mensagem = "Muito bem" + nome + "! Você foi bem. Que tal revisitar os capítulos?";
    } else {
        mensagem = "Continue a jornada" + nome + "! Releia as seções e tente de novo.";
    }
    document.getElementById("resultadoMensagem").innerHTML = mensagem;
}

// Decide o que aparece no card do quiz:
// logado → começa o quiz; não logado → mostra o aviso para entrar
function verificarAcessoQuiz() {
    if (sessionStorage.ID_USUARIO != null) {
        mostrarPergunta();
    } else {
        document.getElementById("quizAndamento").style.display = "none";
        document.getElementById("quizBloqueado").style.display = "block";
}
        if (sessionStorage.ID_USUARIO != null) {
        mostrarPergunta();
        document.getElementById("evolucao").style.display = "block";
    
    } else {
            obterDadosEvolucao();
    }
}
function reiniciarQuiz() {
    perguntaAtual = 0;
    acertos = 0;
    document.getElementById("quizResultado").style.display = "none";
    document.getElementById("quizAndamento").style.display = "block";
    mostrarPergunta();
}


/* =========================================================
   6. USUÁRIO LOGADO
   CONCEITO NOVO — localStorage: um "armazenamento" do navegador
   que guarda textos mesmo depois de fechar a página.
     localStorage.setItem("chave", "valor") → guarda
     localStorage.getItem("chave")          → lê (null se não existir)
   O login.html guarda logado = "sim". Aqui verificamos isso.
   ========================================================= */

function mostrarUsuario() {
    let nome = sessionStorage.NOME_USUARIO;

    // Se não tem ninguém logado, NOME_USUARIO não existe (fica undefined)
    if (nome != null) {
        document.getElementById("areaUsuario").innerHTML =
            "<span class='usuario-nome'>Olá, " + nome + "</span>" +
            "<button class='botao-sair' onclick='sair()'>Sair</button>";
    }
}

function sair() {
    sessionStorage.clear();                // apaga tudo que estava guardado
    window.location.href = "login.html";
}

/* =========================================================
   8. GRÁFICO DE EVOLUÇÃO (dados vindos do banco)
   Mesma ideia do dashboard da faculdade:
   1) obterDadosEvolucao → busca os dados na API
   2) plotarEvolucao     → desenha o gráfico com eles
   ========================================================= */

// Guarda o gráfico desenhado, para poder apagá-lo antes de desenhar de novo
let graficoEvolucao = null;

function obterDadosEvolucao() {
    let idUsuario = sessionStorage.ID_USUARIO;

    fetch("/resultados/ultimos/" + idUsuario, { cache: "no-store" })
        .then(function (resposta) {
            if (resposta.status == 200) {
                resposta.json().then(function (dados) {
                    // O banco manda do MAIS NOVO para o mais antigo (DESC).
                    // reverse() inverte o vetor, para o gráfico ir da esquerda (antigo) para a direita (novo).
                    dados.reverse();
                    plotarEvolucao(dados);
                });
            } else {
                // 204: a pessoa ainda não fez nenhuma tentativa
                document.getElementById("avisoEvolucao").innerHTML =
                    "Você ainda não fez o quiz. Responda para ver sua evolução aqui!";
            }
        })
        .catch(function (erro) {
            console.log(erro);
        });
}

function plotarEvolucao(dados) {
    // Separa os dados em dois vetores, como no gráfico dos Evangelhos
    let momentos = [];
    let acertosPorTentativa = [];

    let i = 0;
    while (i < dados.length) {
        momentos.push(dados[i].momento_grafico);
        acertosPorTentativa.push(dados[i].acertos);
        i++;
    }

    // Se já existe um gráfico desenhado, apaga antes de desenhar o novo
    if (graficoEvolucao != null) {
        graficoEvolucao.destroy();
    }

    document.getElementById("avisoEvolucao").innerHTML = "";

    let canvas = document.getElementById("graficoEvolucao");

    graficoEvolucao = new Chart(canvas, {
        type: "line",                         // gráfico de LINHA, bom para mostrar evolução
        data: {
            labels: momentos,                 // datas embaixo (eixo X)
            datasets: [
                {
                    label: "Acertos",
                    data: acertosPorTentativa,    // altura de cada ponto (eixo Y)
                    borderColor: "#1e5a9e",       // cor da linha
                    backgroundColor: "#1e5a9e",   // cor dos pontos
                    tension: 0.3                  // deixa a linha levemente curva
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: perguntas.length,        // o máximo é o total de perguntas (4)
                    ticks: { stepSize: 1 }        // só números inteiros: 0, 1, 2, 3, 4
                }
            }
        }
    });
}

/* =========================================================
   7. O QUE RODA QUANDO A PÁGINA ABRE
   Como o <script> está no fim do <body>, o HTML já existe aqui.
   ========================================================= */
// O gráfico fica por último: se a internet cair e o Chart.js não carregar,
// o resto do site (quiz, menu, versículos) continua funcionando.
mostrarUsuario();
montarLegenda();
mostrarTotalCapitulos();
verificarAcessoQuiz();
criarGrafico();
