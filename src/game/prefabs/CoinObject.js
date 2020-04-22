export default{
    name: "CoinObject",
    components: [
        {
            type: "CircleComponent",
            values: [
                {
                    key: "radius",
                    value: "10",
                },
                {
                    key: "fill",
                    value: "yellow"
                },
                {
                    key: "stroke",
                    value: "rgb(184, 242, 255)"
                },
            ]
        },
        {
            type: "CircleCollider",
            values: [
                {
                key: "radius",
                value: "10",
                }
            ],
            //type: "CollisionRectangleBehavior"
        },

        /*{
            type: "PlayerBehavior"
        }*/
    ]
}