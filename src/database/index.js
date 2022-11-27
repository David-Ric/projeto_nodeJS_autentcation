const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://tallos:tallos@apitallos.md59bha.mongodb.net/?retryWrites=true&w=majority",{},(error)=>{
    if(error){
        console.log("Falha ao conectar ao banco");
        console.log(error);
        return;
    }
    console.log("conexão estável");
});

mongoose.Promise = global.Promise;

module.exports = mongoose;