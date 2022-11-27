const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json");

module.exports = (req, res, next )=>{

    const authHeader = req.headers.authorization;
  
    const [scheme, token] = parts;

   
    return jwt.verify(token, authConfig.secret,(err, decoded)=>{
        if(err){
            return res.status(401).json({
                error: true,
                message: "Token invalido/expirado"
            })
        }
        req.userLogged = decoded;
        return next();

    })

   
}