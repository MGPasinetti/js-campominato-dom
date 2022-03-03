/*
Consegna
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una b.
BONUS:
1- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
2- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste
*/


const eleLevel = document.getElementById(`level`);
const btnPlay = document.getElementById(`play`);
const eleGrid = document.querySelector(`.grid`);

btnPlay.addEventListener(`click`, setupGame);

arrLevels = [100, 81, 49];

function setupGame() {
    eleGrid.innerHTML = ``;
    // selezionare il livello 
    const indexLevel = parseInt(eleLevel.value);
    console.log(`indexLevel`, indexLevel);
    const cellsCount = arrLevels[indexLevel];
    console.log(`cellsCount`, cellsCount);
    const cellsPerRow = Math.sqrt(cellsCount);

    for (let cellNum = 1; cellNum <= cellsCount; cellNum++) {
        const eleCell = document.createElement(`div`);
        eleCell.classList.add(`cell`);
        // eleCell.append(cellNum); // metodo 1
        eleCell.innerHTML = cellNum; // metodo 2
        eleCell.style.width = `calc(100% / ${cellsPerRow})`;
        eleCell.style.height = `calc(100% / ${cellsPerRow})`;
        eleCell.addEventListener(`click`, changeCellColor); // TODO: 
        eleGrid.append(eleCell);

        console.log(cellNum);
    }   
    // stampare la griglia in base al livello

    // settare la logica del gioco
}

function changeCellColor(event) {
    // this.classList.add(`selected`);
    this.classList.toggle(`selected`);

    // console.log(event.target);
}
