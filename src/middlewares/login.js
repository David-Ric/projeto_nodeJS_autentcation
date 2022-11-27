const jwt = require('jsonwebtoken');
const authConfig = require("../config/auth.json");

exports.obrigatorio = (req,res, next) =>{
        try {
            const token = req.headers.authorization.split(' ')[1];
            const decode = jwt.verify(token, authConfig.secret);
            req.user = decode;
            next();
        } catch (error) {
            return res.status(401).send({ mensagem: 'Falha na autenticação' });
        }
    
    }
    
