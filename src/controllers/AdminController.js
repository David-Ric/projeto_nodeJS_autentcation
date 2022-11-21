const express = require("express");
const router = express.Router();
const user = require("../models/user");

router.get("/users",(req, res)=>{
    user.find((err,user)=>{
        res.status(200).json(user)
    })
    if(!user){
        return res.status(400).json({
            error: true,
            message:"Não existem usuários na base de dados"
        })
       }
})

router.get("/users/:id",async (req, res)=>{
    const id = req.params.id;

    await user.findById(id)
      .populate('name', 'email')
      .exec((err, user) => {
        if(!user){
            return res.status(400).json({
                error: true,
                message:"Usuário não encontrado"
            })
           } else {
        res.status(200).send(user);
      }
    })
    })
   

function buscaUsers(id){
    return user.findIndex(user =>user.id == id)
}

router.put("/users/:id",(req, res)=>{
    const id = req.params.id;

    user.findByIdAndUpdate(id, {$set: req.body}, (err) => {
        if(!err){
            res.status(200).send({message: 'usuario atualizado com sucesso'})
          } else {
            return res.status(500).json({
                error: true,
                message:"Usuário não encontrado"
            })
        }
    })

   
})
router.delete("/users/:id",(req, res)=>{
    const id = req.params.id;

    user.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).send({message: 'Usuário removido com sucesso'})
      } else {
        return res.status(500).json({
            error: true,
            message:"Usuário não encontrado"
        })
      }
    })
    
 })

module.exports = router;