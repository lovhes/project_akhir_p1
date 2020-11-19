const bcrypt = require('bcrypt');

function hashPass(plainPass) {
  const salt = bcrypt.genSaltSync(10);
  const hashedPass = bcrypt.hashSync(plainPass, salt) //hook req done

  return hashedPass
}

module.exports = hashPass