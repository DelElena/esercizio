let bottone = querySelector(".bottone");
let celletta = querySelectorAll(".cella");

bottone.addEventListener('click', giochiamo());

let x;
let o;
let croce = [document.getElementsByClassName("croce")];
let pallino = [document.getElementsByClassName("pallino")];

let c = map(croce, comeAvvieneVittoria());
let p = map(pallino, comeAvvieneVittoria());

function applicaScelta(scelta) {
    let x = parseInt("X");
    let o = parseInt("O");
    if (scelta == x) {
        scegli.classList.add("croce");
    }
    else if (scelta == o) {
        scegli.classList.add("pallino");
    }
    else {
        console.log("Cambia numero!")
    }
}

function comeAvvieneVittoria() {
    let x = 0;
    let o = 0;

    if (scegli[i] == croce) {
        x++;
        if (a == 3) {
            console.log("Ha vinto croce, fine gioco");
            return true;
        }
    }
    else if (scegli == pallino) {
        o++
        if (b == 3) {
            console.log("Ha vinto pallino, fine gioco");
            return true;
        }
    }
    else {
        console.log("Per ora nessuno a vinto");
    }
}

function giochiamo() {
    for (let i = 0; i < 6; i++) {
        let sceltaTua = prompt("scegli: X-croce, O-pallino");
        let scegli = prompt("scegli una cella, cliccandoci sopra");
        celletta.addEventListener('click', applicaScelta(sceltaTua));
        let sceltaC = alert("è il turno del computer");
        let x = parseInt("X");
        let o = parseInt("O");
        let sceltaComputer = Math.floor(Math.random(x, o));
        celletta.applicaScelta(sceltaComputer);
        if (i == 5) {
            scegli = alert("turno finale solo tuo");
            celletta.addEventListener('click', applicaScelta(sceltaTua));
        }
    }
}