const parrotcard = [
    "bobrossparrot.gif",
    "explodyparrot.gif",
    "fiestaparrot.gif",
    "metalparrot.gif",
    "revertitparrot.gif",
    "tripletsparrot.gif",
    "unicornparrot.gif",
];

let parrot_game = [];

let gameNumber = prompt(
    "com quantas cartas quer jogar? (escolha números pares de 4 a 14)"
);
while (
    isNaN(gameNumber) === true ||
    gameNumber % 2 != 0 ||
    gameNumber < 4 ||
    gameNumber > 14
) {
    gameNumber = prompt(`apenas números impares a partir de 4 a 14 amigo o.o`);
}

parrotcard.sort(comparador);

function comparador() {
    return Math.random() - 0.5;
}

for (let i = 0; i < gameNumber / 2; i++) {
    parrot_game.push(parrotcard[i]);
    parrot_game.push(parrotcard[i]);
}

parrot_game.sort(comparador);

const allcards = document.querySelector(".container");
for (let i = 0; i < gameNumber; i++) {
    allcards.innerHTML += ` 
            <div class="front" onclick="game(this)" name=${parrot_game[i]}>
                <img src="img/front.png" />
            </div>
        `;
}

function game(elemento) {
    const selecionado = document.querySelector(".selecionado");
    elemento.classList.add("back");
    elemento.classList.add("selecionado");
    const img = elemento.querySelector("img");
    img.src = `img/${elemento.getAttribute("name")}`;
    elemento.setAttribute("onclick", "");
    if (selecionado !== null) {
        const cards = document.querySelectorAll(".front");
        cards.forEach((valor) => valor.setAttribute("onclick", ""));
        setTimeout(() => {
            if (
                selecionado.getAttribute("name") ===
                elemento.getAttribute("name")
            ) {
                parrot_game = parrot_game.filter((valor) => {
                    return elemento.getAttribute("name") !== valor;
                });
                if (parrot_game.length === 0) {
                    alert("FIM DE JOGO");
                }
            } else {
                elemento.classList.remove("back");
                selecionado.classList.remove("back");
                const img2 = selecionado.querySelector("img");
                img.src = `img/front.png`;
                img2.src = `img/front.png`;
                elemento.setAttribute("onclick", "game(this)");
                selecionado.setAttribute("onclick", "game(this)");
            }
            cards.forEach((valor) =>
                valor.setAttribute("onclick", "game(this)")
            );
            selecionado.classList.remove("selecionado");
            elemento.classList.remove("selecionado");
        }, 1000);
    }
}
