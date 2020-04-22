import Base from "../../engine/Base.js"

export default class Gravity extends Base.Behavior{
    speed = 5;
    start(){
        
    }
    update(){
        if(this.gameObject.y < canv.height)
        {
            this.gameObject.y += this.speed
        }
    }
}