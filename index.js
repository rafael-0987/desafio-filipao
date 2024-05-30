let XP = 500;
let name = "RafaX";
let niveis = ["ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante", ];

//1.000 = Ferro
//1.001 e 2.000 = Bronze
//2.001 e 5.000 = Prata
//5.001 e 7.000 = Ouro
//7.001 e 8.000 = Platina
//8.001 e 9.000 = Ascendente
//9.001 e 10.000= Imortal
//10.001 = Radiante

function _xp() {
    if (XP < 1000) {
        console.log("O Herói de nome " + name + "está no nível de " + niveis[0]);
    }
    else if (XP > 1000 && XP < 2000) {
        console.log("O Herói de nome " + name + "está no nível de " + niveis[1]);
    }
    else if (XP > 2000 && XP < 5000) {
        console.log("O Herói de nome " + name + "está no nível de " + niveis[2]);
    }
    else if (XP > 5000 && XP < 7000) {
        console.log("O Herói de nome " + name + "está no nível de " + niveis[3]);
    }
    else if (XP > 7000 && XP < 8000) {
        console.log("O Herói de nome " + name + "está no nível de " + niveis[4]);
    }
    else if (XP > 8000 && XP < 9000) {
        console.log("O Herói de nome " + name + "está no nível de " + niveis[5]);
    }
    else if (XP > 9000 && XP < 10000) {
        console.log("O Herói de nome " + name + "está no nível de " + niveis[6]);
    }
    else {
        console.log("O Herói de nome " + name + "está no nível de " + niveis[7]);
    }
}


_xp();