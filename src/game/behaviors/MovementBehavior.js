import Base from "../../engine/Base.js"
import Components from "../../engine/Components.js"
import Input from "../../engine/base/Input.js";

export default class MovementBehavior extends Base.Behavior {
    speed = 5;
    
    start() {

    }
    
    update() {
        let inAir = false
        if (Input.keys['ArrowUp']) {
            if(this.gameObject.y == canv.heigh || this.gameObject.y > canv.height)
                inAir = true
            if(inAir){
                for(let i = 0; i < 10; i++){
                    this.gameObject.y -= 15
                }
                inAir = false
            }
        }
        /*if( Input.keys['ArrowDown']) {
            this.gameObject.y += this.speed
        }*/
        if (Input.keys['ArrowLeft']) {
            this.gameObject.x -= this.speed

        }
        if( Input.keys['ArrowRight']) {
            this.gameObject.x += this.speed
        }

    }
}