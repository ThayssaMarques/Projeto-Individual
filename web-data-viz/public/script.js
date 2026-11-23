function abrirFecharMenu() {
    let menu = document.getElementById("menu");
    menu.classList.toggle("menu-aberto");
}

function fecharMenu() {
    let menu = document.getElementById("menu");
    menu.classList.remove("menu-aberto");
}

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

function abrirVersiculo(referencia) {
    let texto = versiculos[referencia];

    if (texto == undefined) {
        texto = "Versículo ainda não cadastrado.";
    }

    document.getElementById("modalReferencia").innerHTML = referencia;
    document.getElementById("modalTexto").innerHTML = texto;

    document.getElementById("modalVersiculo").classList.add("aberto");
}

function fecharVersiculo() {
    document.getElementById("modalVersiculo").classList.remove("aberto");
}

function clicarFundoModal(evento) {
    if (evento.target.id == "modalVersiculo") {
        fecharVersiculo();
    }
}

document.addEventListener("keydown", function (evento) {
    if (evento.key == "Escape") {
        fecharVersiculo();
    }
});

function abrirCapitulo(numero) {
    let capitulo = document.getElementById("capitulo" + numero);
    capitulo.classList.toggle("aberto");
}

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

let pluginNumerosNasBarras = {
    id: "numerosNasBarras",
    afterDatasetsDraw: function (grafico) {
        let ctx = grafico.ctx;
        let barras = grafico.getDatasetMeta(0).data;
        let valores = grafico.data.datasets[0].data;

        ctx.font = "500 16px 'Cormorant Garamond', Georgia, serif";
        ctx.fillStyle = "#1e5a9e";
        ctx.textAlign = "center";

        let i = 0;
        while (i < barras.length) {

            ctx.fillText(valores[i], barras[i].x, barras[i].y - 8);
            i++;
        }
    }
};

function criarGrafico() {

    let nomes = [];
    let quantidades = [];
    let cores = [];

    let i = 0;
    while (i < evangelhos.length) {
        nomes.push(evangelhos[i].nome);
        quantidades.push(evangelhos[i].capitulos);
        cores.push(evangelhos[i].cor);
        i++;
    }

    Chart.defaults.font.family = "'DM Sans', Arial, sans-serif";

    let canvas = document.getElementById("graficoEvangelhos");

    new Chart(canvas, {
        type: "bar",

        data: {
            labels: nomes,
            datasets: [
                {
                    label: "Capítulos",
                    data: quantidades,
                    backgroundColor: cores,
                    barPercentage: 0.4,
                    borderRadius: 0
                }
            ]
        },

        options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: { top: 28 }
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: "#0b2a4b",
                    padding: 10,
                    callbacks: {

                        label: function (contexto) {
                            return contexto.raw + " capítulos";
                        }
                    }
                }
            },
            scales: {
                x: {
                    ticks: { display: false },
                    grid: { display: false },
                    border: { color: "#dbe6f2" }
                },
                y: {
                    beginAtZero: true,
                    max: 30,
                    ticks: { display: false, stepSize: 10 },
                    grid: { color: "#e3ebf4" },
                    border: { display: false, dash: [4, 4] }
                }
            }
        },

        plugins: [pluginNumerosNasBarras]
    });
}

function montarLegenda() {
    let html = "";
    let i = 0;

    while (i < evangelhos.length) {

        html = html + "<button class='legenda-item' id='legenda" + i + "' onclick='mostrarEvangelho(" + i + ")'>" +
            "<strong>" + evangelhos[i].nome + "</strong>" +
            "<em>" + evangelhos[i].perspectiva + "</em>" +
            "</button>";
        i++;
    }

    document.getElementById("legendaGrafico").innerHTML = html;
}

function mostrarEvangelho(indice) {
    let escolhido = evangelhos[indice];

    document.getElementById("descricaoEvangelho").innerHTML =
        "<strong>" + escolhido.nome + " · " + escolhido.perspectiva + "</strong> — " + escolhido.descricao;

    let i = 0;
    while (i < evangelhos.length) {
        document.getElementById("legenda" + i).classList.remove("ativo");
        i++;
    }
    document.getElementById("legenda" + indice).classList.add("ativo");
}

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
    },
    {
        pergunta: "Segundo Lucas 2:7, onde Maria deitou Jesus quando Ele nasceu?",
        alternativas: ["Em um berço de ouro", "Em uma manjedoura", "No templo", "Em um barco"],
        correta: 1,
        explicacao: "Lucas 2:7 — não havia lugar na estalagem, então foi deitado numa manjedoura."
    },
    {
        pergunta: "Em Marcos 6:3, qual profissão as pessoas ligavam a Jesus?",
        alternativas: ["Pescador", "Cobrador de impostos", "Pastor de ovelhas", "Carpinteiro"],
        correta: 3,
        explicacao: "Marcos 6:3 — “Não é este o carpinteiro, filho de Maria?”"
    },
    {
        pergunta: "Segundo Mateus 4:2, depois de quantos dias de jejum Jesus teve fome?",
        alternativas: ["40 dias", "7 dias", "12 dias", "3 dias"],
        correta: 0,
        explicacao: "Mateus 4:2 — jejuou quarenta dias e quarenta noites, e depois teve fome."
    },
    {
        pergunta: "O que Jesus estava fazendo no barco durante a tempestade (Marcos 4:38)?",
        alternativas: ["Pescando", "Remando", "Dormindo", "Pregando"],
        correta: 2,
        explicacao: "Marcos 4:38 — Ele dormia sobre uma almofada, cansado como qualquer homem."
    },
    {
        pergunta: "Em João 4:6, como Jesus estava quando se sentou junto à fonte de Jacó?",
        alternativas: ["Cansado do caminho", "Com raiva", "Com pressa", "Doente"],
        correta: 0,
        explicacao: "João 4:6 — Jesus, cansado do caminho, sentou-se junto à fonte."
    },
    {
        pergunta: "Qual destas frases Jesus disse na cruz, mostrando sua humanidade (João 19:28)?",
        alternativas: ["Estou com frio", "Tenho sede", "Quero descansar", "Estou com fome"],
        correta: 1,
        explicacao: "João 19:28 — “Tenho sede.”"
    },
    {
        pergunta: "Segundo Lucas 2:52, em que Jesus crescia?",
        alternativas: ["Só em estatura", "Em riqueza e fama", "Em força e poder", "Em sabedoria, estatura e graça"],
        correta: 3,
        explicacao: "Lucas 2:52 — crescia em sabedoria, em estatura e em graça para com Deus e os homens."
    }
];

let letras = ["A", "B", "C", "D"];

let perguntaAtual = 0;
let acertos = 0;
let jaRespondeu = false;

function mostrarPergunta() {
    let item = perguntas[perguntaAtual];

    document.getElementById("quizContador").innerHTML =
        "Questão " + (perguntaAtual + 1) + " de " + perguntas.length;

    let porcentagem = (perguntaAtual / perguntas.length) * 100;
    document.getElementById("quizPorcentagem").innerHTML = porcentagem.toFixed(0) + "%";
    document.getElementById("barraPreenchida").style.width = porcentagem + "%";

    document.getElementById("quizPergunta").innerHTML = item.pergunta;

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

    document.getElementById("quizFeedback").innerHTML = "";
    document.getElementById("botaoProxima").disabled = true;
    jaRespondeu = false;

    if (perguntaAtual == perguntas.length - 1) {
        document.getElementById("botaoProxima").innerHTML = "Ver resultado <span>→</span>";
    } else {
        document.getElementById("botaoProxima").innerHTML = "Próxima questão <span>→</span>";
    }
}

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

            document.getElementById("opcao" + escolhida).classList.add("errada");
            document.getElementById("opcao" + certa).classList.add("correta");
            feedback.innerHTML = "Quase! Resposta: " + letras[certa] + ". " + perguntas[perguntaAtual].explicacao;
        }

        let i = 0;
        while (i < letras.length) {
            document.getElementById("opcao" + i).disabled = true;
            i++;
        }

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
                    obterDadosEvolucao();
        } else {
            console.log("Erro ao salvar o resultado.");
        }
    }).catch(function (erro) {
        console.log(erro);
    });
}

function mostrarResultado() {
     salvarResultado();

    document.getElementById("quizAndamento").style.display = "none";
    document.getElementById("quizResultado").style.display = "block";

    document.getElementById("resultadoNumero").innerHTML = acertos + "/" + perguntas.length;

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

function mostrarUsuario() {
    let nome = sessionStorage.NOME_USUARIO;

    if (nome != null) {
        document.getElementById("areaUsuario").innerHTML =
            "<span class='usuario-nome'>Olá, " + nome + "</span>" +
            "<button class='botao-sair' onclick='sair()'>Sair</button>";
    }
}

function sair() {
    sessionStorage.clear();
    window.location.href = "login.html";
}

let graficoEvolucao = null;

function obterDadosEvolucao() {
    let idUsuario = sessionStorage.ID_USUARIO;

    fetch("/resultados/ultimos/" + idUsuario, { cache: "no-store" })
        .then(function (resposta) {
            if (resposta.status == 200) {
                resposta.json().then(function (dados) {

                    dados.reverse();
                    plotarEvolucao(dados);
                });
            } else {

                document.getElementById("avisoEvolucao").innerHTML =
                    "Você ainda não fez o quiz. Responda para ver sua evolução aqui!";
            }
        })
        .catch(function (erro) {
            console.log(erro);
        });
}

function plotarEvolucao(dados) {

    let momentos = [];
    let acertosPorTentativa = [];

    let i = 0;
    while (i < dados.length) {
        momentos.push(dados[i].momento_grafico);
        acertosPorTentativa.push(dados[i].acertos);
        i++;
    }

    if (graficoEvolucao != null) {
        graficoEvolucao.destroy();
    }

    document.getElementById("avisoEvolucao").innerHTML = "";

    let canvas = document.getElementById("graficoEvolucao");

    graficoEvolucao = new Chart(canvas, {
        type: "line",
        data: {
            labels: momentos,
            datasets: [
                {
                    label: "Acertos",
                    data: acertosPorTentativa,
                    borderColor: "#1e5a9e",
                    backgroundColor: "#1e5a9e",
                    tension: 0.3
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
                    max: perguntas.length,
                    ticks: { stepSize: 1 }
                }
            }
        }
    });
}

mostrarUsuario();
montarLegenda();
mostrarTotalCapitulos();
verificarAcessoQuiz();
criarGrafico();