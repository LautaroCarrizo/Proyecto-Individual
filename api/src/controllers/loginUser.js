const {User} = require("../db")

async function loginUser(req, res){
  try {
    const {email, password} = req.body
    

    const findUser = await User.findOne({
        where: {
          email: email,
        },
      });
     
    if(!findUser){
     return res.status(404).json({message: "Usuario no encontrado"})   
    }  
    if(findUser && findUser.password === password){
      res.status(200).json({acc : true})
    } else {
      return  res.status(400).json({message: "Contraseña incorrecta"})
    }
  } catch (error) {
    res.status(500).json({error: "Server Error"})
  }
}
module.exports = loginUser