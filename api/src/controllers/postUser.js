const { User, Recipe } = require("../db");

async function postUser(req, res) {
  const { email, password } = req.body;
  if (!email || !password) return res.status(401).json({ message: "Faltan datos" });
  const regex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  if (!regex.test(email)) {
   return res.status(401).json({ message: "el email no es valido" });
  } else if (email.length > 35) {
   return  res
      .status(401)
      .json({ message: "el email no puede tener mas de 35 caracteres." });
  }
  if (!/\d/.test(password)) {
    return  res
      .status(401)
      .json({ message: "La contraseña debe tener al menos un numero" });
  } else if (password.length < 6 || password.length > 10) {
   return res.status(401).json({
      message: "la contraseña tiene que tener una longitud entre 6 y 10 caracteres",
    });
  }
  try {
    const existingUser = await User.findOne({
      where: {
        email: email,
      },
    });
    if (existingUser) {
      return res.status(401).json({ message: "El email ya está registrado" });
    } else {
      const newUser = await User.create({
        email: email,
        password: password,
      });
      const recipesToAdd = await Recipe.findAll();
      if (recipesToAdd.length > 0) {
        await newUser.setRecipes(recipesToAdd);
      }
       res.status(200).json({ message: "El usuario se creo correctamente" });
    }
  } catch (error) {
     return res.status(500).json({ error: "Server Error" });
  }
}

module.exports = postUser