# PROJETO API 2 DESENVOLVIDO POR MARVIN SENKIV

## INSTALAÇAO DO PROJETO

npm install - no diretorio onde está o package.json
node index - para subir o projeto

os dados estão sendo salvos no meu mongodb cloud de testes.

### ROTAS

* Caso o jogador ja exista, os valores passados serão contabilizados.

POST- localhost:3001/api/player
```json
Body :  {
	"name":"<NOME DO JOGADOR>",
	"nickname":"<NICKNAME DO JOGADOR>",
    "team":"<NOME DO TIME>",
    "role": "<LANE DO JOGADOR>",
    "kills":0,
    "assist": 0,
    "deaths": 0,
    "totalGames": 0,
    "totalWins": 0
}
```

GET - localhost:3001/api/player/nickname/<NICKNAME DO JOGADOR>

RESPOSTA ESPERADA :
```json=
[
  {
    "nickname": "fewge",
    "team": "Dinamite",
    "KDA": 1.811764705882353,
    "winRate": 60
  }
]
```
