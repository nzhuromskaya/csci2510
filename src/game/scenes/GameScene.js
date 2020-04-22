export default  {
    name: "GameScene",  
    objects : [
      {
        name: "Player",
        location: {x: canv.width, y: canv.height},
        type: "PlayerComponent",
      },
      {
        name: "Plat1",
        location: {x: 20, y: canv.height + 450},
        type: "Platform",
      },
      {
        name: "Coin1",
        location: {x: 100, y: canv.height + 450},
        type: "CoinObject",
      },
    ]
  }