const juros = (valor,juros) => {
    for(let i = 0; i <= 5 ;i++){
        valor += valor*juros + 1.09
    }

    console.log(valor.toFixed(2))
}

juros(330,0.05)