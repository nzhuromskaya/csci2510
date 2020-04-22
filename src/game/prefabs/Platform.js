export default{
    name: "Platform",
    components: [
        {
            type: "RectangleComponent",
            values: [
                {
                    key: "width",
                    value: "70",
                },
                {
                    key: "height",
                    value: "20",
                },
                {
                    key: "fill",
                    value: "rgb(82, 8, 0)"
                },
                {
                    key: "stroke",
                    value: "rgb(255, 255, 255)"
                },
            ],
        },
        {
            type: "AABBCollider",
            values: [
                {
                key: "width",
                value: "70",
                },
                {
                    key: "height",
                    value: "20",
                },
            ],
        },
    ]
}