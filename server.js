const express = require("express");
const AuthController = require("./src/controllers/AuthController");
const AdminController = require("./src/controllers/AdminController");
const authenticateMiddleware = require("./src/middlewares/authenticate");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const app = express();

app.use(express.json());

app.use("/Api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/auth", AuthController);
app.use("/admin", AdminController);

app.listen(3001,()=>{
    console.log("server is runing");
});