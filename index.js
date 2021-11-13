let prato_pipoca = "pipoca";
let prato_macarrao = "macarrao";
let prato_carne = "carne";
let prato_feijao = "feijao";
let prato_brigadeiro = "brigadeiro";

function pipoca(tempo) {
    let tempo_pipoca = 10;
    if (tempo == tempo_pipoca) {
        console.log(`Prato pronto, Bom apetite!`)
    } else if (tempo < tempo_pipoca) {
        console.log(`Tempo insuficiente`)
    } else if (tempo <= tempo_pipoca * 2) {
        console.log(`seu prato queimou`)
    } else if (tempo >= tempo_pipoca * 3) {
        console.log(`Kaboom`)
    }
}

function macarrao(tempo) {
    let tempo_macarrao = 15;
    if (tempo == tempo_macarrao) {
        console.log(`Prato pronto, Bom apetite!`)
    } else if (tempo < tempo_macarrao) {
        console.log(`Tempo insuficiente`)
    } else if (tempo <= tempo_macarrao * 2) {
        console.log(`seu prato queimou`)
    } else if (tempo >= tempo_macarrao * 3) {
        console.log(`Kaboom`)
    }
}

function carne(tempo) {
    let tempo_carne = 8;
    if (tempo == tempo_carne) {
        console.log(`Prato pronto, Bom apetite!`)
    } else if (tempo < tempo_carne) {
        console.log(`Tempo insuficiente`)
    } else if (tempo <= tempo_carne * 2) {
        console.log(`seu prato queimou`)
    } else if (tempo >= tempo_carne * 3) {
        console.log(`Kaboom`)
    }
}

function feijao(tempo) {
    let tempo_feijao = 12;
    if (tempo == tempo_feijao) {
        console.log(`Prato pronto, Bom apetite!`)
    } else if (tempo < tempo_feijao) {
        console.log(`Tempo insuficiente`)
    } else if (tempo <= tempo_feijao * 2) {
        console.log(`seu prato queimou`)
    } else if (tempo >= tempo_feijao * 3) {
        console.log(`Kaboom`)
    }
}

function brigadeiro(tempo) {
    let tempo_brigadeiro = 8;
    if (tempo == tempo_brigadeiro) {
        console.log(`Prato pronto, Bom apetite!`)
    } else if (tempo < tempo_brigadeiro) {
        console.log(`Tempo insuficiente`)
    } else if (tempo <= tempo_brigadeiro * 2) {
        console.log(`seu prato queimou`)
    } else if (tempo >= tempo_brigadeiro * 3) {
        console.log(`Kaboom`)
    }
}


// função do micro
function microondas(tempo, comida) {
    if (comida == prato_macarrao) {
        macarrao(tempo);
    } else if (comida == prato_pipoca) {
        pipoca(tempo);
    } else if (comida == prato_carne) {
        carne(tempo)
    } else if (comida == prato_feijao) {
        feijao(tempo)
    } else if (comida == prato_brigadeiro) {
        brigadeiro(tempo)
    }
}

microondas(28, prato_brigadeiro);