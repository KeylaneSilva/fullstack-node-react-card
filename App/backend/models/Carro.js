const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Carro = new Schema({
    veiculo:{
        type: String,
        required: true
    },
    marca:{
        type: String,
        required: false
    },
    ano:{
        type: Number,
        required: true

    },
    descricao:{
        type: String,
        required: true
    },
    vendido:{
        type: String,
        required: false
    },
    data:{
        type: Date,
        default: Date.now()
    }

})

mongoose.model("carros", Carro)