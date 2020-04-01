const mongoose = require('mongoose');
const Player = mongoose.model('Player');


module.exports = {

    async create(req,res) {
        
        console.log("CRIANDO JOGADOR")
        console.log(req.body)
        let body = req.body
        let callback = {};
        let verifyUser = await Player.find({nickname:body.nickname})
        if(verifyUser.length){
            let p = verifyUser[0];         
                p.kills += body.kills
                p.deaths += body.deaths
                p.assist += body.assist
                p.totalGames += body.totalGames
                p.totalWins += body.totalWins
            await Player.update(p)
            res.json(verifyUser)

        }
        else{
            callback = await Player.create(req.body)
            res.json(callback)
        }
        
    },
    async find(req,res){
        console.log("PROCURANDO JOGADOR")
        let nick = req.params.nickname;  
        let result = []
        players = await Player.find({nickname:nick});


        players.forEach(player => {
        let data = {
            nickname:player.nickname,
            team:player.team,
            KDA:(player.kills+player.assist) / player.deaths,
            winRate: (player.totalWins / player.totalGames) * 100 


        }
        result.push(data)

        });
        res.json(result)

        

    }

}

