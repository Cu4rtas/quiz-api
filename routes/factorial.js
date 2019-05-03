var express = require('express')

var app = express.Router()

/**
 * Calcula el factorial de un numero
 */
fact = (num) => {
    if (num == 0) return 1
    else {
        return num * fact(num-1)
    }
}

app.get('/factorial/:number', function (req, res) {
    console.log(req.params.number);
    let resultado = fact(parseInt(req.params.number))
    res.send({message: `Resultado: ${resultado}`});
})

module.exports = app