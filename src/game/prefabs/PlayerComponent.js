export default{
    name: "PlayerComponent",
    components: [
        {
            type: "RectangleComponent",
            values: [
                {
                    key: "width",
                    value: "20",
                },
                {
                    key: "height",
                    value: "100",
                },
                {
                    key: "fill",
                    value: "rgb(184, 242, 255)"
                },
                {
                    key: "stroke",
                    value: "rgb(184, 242, 255)"
                },
            ]
        },
        {
            type: "MovementBehavior",
            //type: "CollisionRectangleBehavior"
        },
        {
            type: "Gravity",
        }
        /*{
            type: "PlayerBehavior"
        }*/
    ]
}