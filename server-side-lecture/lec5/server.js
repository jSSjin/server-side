const express = require("express")
const swaggerUi = require("swagger-ui-express")
const swaggerJsdoc = require("swagger-jsdoc")

const swaggerOption = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            tiele: "Users API",
            version: "1.0.0",
            description: "Users API Information"
        },

    },
    servers: [
        {
            url: "http://localhost:3000"
        },
    ],

    apis: ["server.js"]
}

const swaggerDocs = swaggerJsdoc(swaggerOption);

const app = express()

app.use(express.json())
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

let users = [
    {
        id:1,
        name:"Jhon"
    },
    {
        id:2,
        name:"Lex"
    }
]

/**
 * @swagger
 * /users:
 *  get:
 *      description: get all users
 *      responses:
 *          200:
 *              description: Success
 *          400:
 *              description: error
 */

app.get("/users", (req, res) => {
    res.json(users)
})

app.listen(3000, () => {
    console.log("server running on http://localhost:3000")
})