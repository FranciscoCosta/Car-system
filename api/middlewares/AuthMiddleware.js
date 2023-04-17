import User from "../models/User.js"

const verifyRegister = async (req, res, next) => {
  const { username, email } = req.body;
  const checkUsername = await User.findOne({ username: username });
  const checkEmail = await User.findOne({ email: email });
  if (checkUsername) {
    return res.status(400).json({ message: "Usuário já existe!" });
  }
  if (checkEmail) {
    return res.status(400).json({ message: "Email já se encontra cadastrado" });
  }
  next();
};
const verifyInputs = async (req, res, next) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password ) {
    return res.status(400).json({ message: "Por favor preencha todo o formulário" });
  }
  if (username.length < 3) {
    return res
      .status(400)
      .json({ message: "Usuário precisa de ter 6 caracters" });
  }
  if (password.length < 6) {
    return res
      .status(400)
      .json({ message: "Password precisa de ter 6 caracters" });
  }
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!regexEmail.test(email)) {
    return res.status(400).json({ message: "Invalid email" });
  }
  next();
};

export { verifyInputs, verifyRegister };