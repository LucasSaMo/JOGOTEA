let themeImages = {
    'personagem1': [
        { img: 'img/C1.png', text: 'EU QUERO' },
        { img: 'img/C2.png', text: 'QUERO COMER' },
        { img: 'img/C3.png', text: 'EU QUERO ÁGUA' },
        { img: 'img/C4.png', text: 'EU QUERO LER' },
        { img: 'img/C5.png', text: 'QUERO BRINCAR' },
        { img: 'img/C6.png', text: 'NÃO QUERO' },
        { img: 'img/C7.png', text: 'CANSADO' },
        { img: 'img/C8.png', text: 'ESTOU FELIZ' },
        { img: 'img/C10.png', text: 'BANHEIRO' }
    ],
    'personagem2': [
        { img: 'img/p1.png', text: 'Quero Comer' },
        { img: 'img/p2.png', text: 'Quero Água' },
        { img: 'img/p3.png', text: 'Eu Quero ler' },
        { img: 'img/p4.png', text: 'Quero Brincar' },
        { img: 'img/p5.png', text: 'Não Quero' },
        { img: 'img/p6.png', text: 'Cansado' },
        { img: 'img/p7.png', text: 'Eu Quero' },
        { img: 'img/p8.png', text: 'Estou Feliz' },
        { img: 'img/p9.png', text: 'Banheiro' }
    ],
    'personagem3': [
        { img: 'img/d2.png', text: 'estou Felíz' },
        { img: 'img/d3.png', text: 'cansado' },
        { img: 'img/d4.png', text: 'não quero' },
        { img: 'img/d5.png', text: 'Quero Brincar' },
        { img: 'img/d6.png', text: 'Eu Quero Ler' },
        { img: 'img/d7.png', text: 'Eu Quero Água' },
        { img: 'img/d8.png', text: 'banheiro' },
        { img: 'img/dino1.png', text: 'Eu Quero' },
        { img: 'img/d10.png', text: 'Quero Comer' }
    ],
    'personagem4': [
        { img: 'img/N1.png', text: 'EU QUERO' },
        { img: 'img/N2.png', text: 'ESTOU FELIZ' },
        { img: 'img/N3.png', text: 'CANSADO' },
        { img: 'img/N4.png', text: 'NÃO QUERO' },
        { img: 'img/N5.png', text: 'QUERO BRINCAR' },
        { img: 'img/N6.png', text: 'EU QUERO LER' },
        { img: 'img/N7.png', text: 'EU QUERO ÁGUA' },
        { img: 'img/N8.png', text: 'QUERO COMER' },
        { img: 'img/N9.png', text: 'BANHEIRO' }
    ],
    'personagem5': [
        { img: 'img/m1.png', text: 'estou Felíz' },
        { img: 'img/m2.png', text: 'cansado' },
        { img: 'img/m3.png', text: 'não quero' },
        { img: 'img/m4.png', text: 'Quero Brincar' },
        { img: 'img/m5.png', text: 'Eu Quero Ler' },
        { img: 'img/m6.png', text: 'Eu Quero Água' },
        { img: 'img/m7.png', text: 'banheiro' },
        { img: 'img/m8.png', text: 'Eu Quero' },
        { img: 'img/m9.png', text: 'Quero Comer' }
    ],
    'personagem6': [
        { img: 'img/po1.png', text: 'BANHEIRO' },
        { img: 'img/po2.png', text: 'ESTOU FELIZ' },
        { img: 'img/po3.png', text: 'EU QUERO' },
        { img: 'img/po4.png', text: 'CANSADO' },
        { img: 'img/po5.png', text: 'NÃO QUERO' },
        { img: 'img/po6.png', text: 'QUERO BRINCAR' },
        { img: 'img/po8.png', text: 'EU QUERO LER' },
        { img: 'img/po9.png', text: 'EU QUERO ÁGUA' },
        { img: 'img/po10.png', text: 'QUERO COMER' }
    ],
    'personagem7': [
        { img: 'img/mc1.png', text: 'QUERO BRINCAR' },
        { img: 'img/mc2.png', text: 'QUERO COMER' },
        { img: 'img/mc3.png', text: 'EU QUERO ÁGUA' },
        { img: 'img/mc4.png', text: 'EU QUERO LER' },
        { img: 'img/mc5.png', text: 'NÃO QUERO' },      
        { img: 'img/mc6.png', text: 'CANSADO' },
        { img: 'img/mc7.png', text: 'ESTOU FELIZ' },
        { img: 'img/mc8.png', text: 'EU QUERO' },
        { img: 'img/mc9.png', text: 'BANHEIRO' }
    ]
};

let currentTheme = [];

function setTheme(theme) {
    currentTheme = themeImages[theme];
    shufflePieces();
}

function shufflePieces() {
    const gameBoard = document.getElementById("gameBoard");
    const pieces = Array.from(gameBoard.children);

    pieces.forEach((piece, index) => {
        piece.style.backgroundImage = `url('${currentTheme[index].img}')`;
        piece.style.order = Math.floor(Math.random() * pieces.length);

        piece.onclick = function () {
            let descriptionText = currentTheme[index].text;
            document.getElementById('description').textContent = descriptionText;
            speakText(descriptionText);
        };
    });
}

function checkWin() {
    const pieces = Array.from(document.querySelectorAll('.piece'));
    let isWin = pieces.every((piece, index) => parseInt(piece.style.order) === index);

    if (isWin) {
        document.getElementById('winMessage').style.display = 'block';
    }
}

function speakText(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-BR';
    window.speechSynthesis.speak(utterance);
}
