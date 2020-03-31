const mongoose = require('mongoose');
const Player = mongoose.model('Player');


module.exports = {

    async create(req,res) {
        
        console.log("CRIANDO JOGADOR KK")
        console.log(req.body)
        
        let callback = {};
        try{
            callback = await Player.create(req.body);        
        } catch (e){
            res.send(400)
        }

        res.json(callback);
        
    }
}

