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
   2. CAPÍTULOS DA JORNADA
   Cada capítulo tem id "capitulo1", "capitulo2"...
   Juntando o texto "capitulo" com o número, achamos o certo.
   ========================================================= */
function abrirCapitulo(numero) {
    let capitulo = document.getElementById("capitulo" + numero);
    capitulo.classList.toggle("aberto");   // abre se estava fechado, fecha se estava aberto
}
/* =========================================================
   3. VERSÍCULOS
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