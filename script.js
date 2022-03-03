/*
Consegna
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero (in ordine) tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Lasciate perdere il cambiamento del colore della cella (serve una cosa che oggi non abbiamo visto). Qundi le celle saranno tutte dello stesso colore e non succede niente quando le clicchiamo.
Consigli del giorno:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.
*/


// let container = document.querySelector(`main`);
// let grid = document.createElement(`div`);
// grid.className = "grid";
// container.append(grid);

// const btnPlay = document.getElementById(`play`);

// btnPlay.addEventListener('click', play);

// function play() {
//     const selection = document.getElementById(`difficulty`);
    
//     if (selection.value == `difficulty_1`) {
//         const grid1 = generateListNumsBetween(1, 100);
//     } else if (selection.value == `difficulty_2`) {
//         const grid2 = generateListNumsBetween(1, 81);
//     } else {
//         const grid3 = generateListNumsBetween(1, 49);
//     }

//     function generateListNumsBetween(min, max) {
//         grid.innerHTML = ``;

//         for (let min = 1; min <= max; min++) {
//             grid.innerHTML += `<div class="box box-${max}">${min}</div>`;
//         }

//     }
// }


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
