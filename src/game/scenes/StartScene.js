export default  {
  name: "StartScene",  
  objects : [
    {
      name: "Scene listener",
      location: {x:0, y:0},
      type: "StartSceneListener",
    },
    {
      name: "Title",
      location: {x:canv.width, y:canv.height - 350},
      type: "Text",
      componentValues: [
        {
          type: "TextComponent",
          values: [
            {
              key: "text",
              value: "WOW THATS A GREAT TITLE FOR A FUN GAME!",
            }
          ]
        }
      ]
    },
    {
      name: "Enter",
      location: {x:canv.width + 150, y:canv.height + 100},
      type: "Text",
      componentValues: [
        {
          type: "TextComponent",
          values: [
            {
              key: "text",
              value: "Press Enter to start the game. . . ",
            }
          ]
        }
      ]
    },
  ]
}