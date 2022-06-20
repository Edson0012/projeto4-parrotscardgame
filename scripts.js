const parrotcard = [
    `<img src="/img/bobrosssparrot.gif" />
    <img src="/img/explodyparrot.gif" />
    <img src="/img/fiestaparrot.gif" />
    <img src="/img/metalparrot.gif.gif" />
    <img src="/img/revertitparrot.gif" />
    <img src="/img/tripletsparrot.gif" />
    <img src="/imgunicornparrot.gif" />
    `,
];

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

for (let i = 0; i < parrotcard.length; i++) {
    parrotcard.push[i];
    parrotcard.push[i];
}

const allcards = document.querySelector(".container");
for (let i = 0; i < gameNumber; i++) {
    allcards.innerHTML += ` 
            <div onclick="selecionarCard(this)" name=${parrot_game[i]}>
                <img src="img/front.png" />
            </div>
        `;
}

const parrot_game = [];

for (let i = 0; i < gameNumber / 2; i++) {
    parrot_game.push(parrotcard[i]);
    parrot_game.push(parrotcard[i]);
}
