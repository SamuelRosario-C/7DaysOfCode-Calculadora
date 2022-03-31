calc = (operador, primeiroNumeroParaCalcular, segundoNumeroParaCalcular) => {
    switch (operador) {
        case "+":
            console.log(primeiroNumeroParaCalcular + segundoNumeroParaCalcular)
            break;

        case "-":
            console.log(primeiroNumeroParaCalcular - segundoNumeroParaCalcular)
            break;

        case "*":
            console.log(primeiroNumeroParaCalcular * segundoNumeroParaCalcular)
            break;

        case "/":
            console.log(primeiroNumeroParaCalcular / segundoNumeroParaCalcular)
            break;

        default:
            console.log("número ou operador Invalído")
            break;
    }
}

calc("+", 10, 20)