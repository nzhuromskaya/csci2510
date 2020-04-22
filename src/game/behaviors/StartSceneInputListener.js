import Engine from "../../engine/Engine.js"
import SceneManager from "../SceneManager.js"

export default class TextBehavior extends Engine.Base.Behavior {
    
    start() {

    }
    update() {
        if(Engine.Base.Input.getKeyUp('Enter'))
        {
            SceneManager.currentScene = "GameScene";
        }

    }
}