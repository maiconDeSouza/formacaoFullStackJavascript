const bcrypt = require('bcrypt')

async function crypto(password){
    const salt = await bcrypt.genSalt()

    const passwordCripto = await bcrypt.hash(password, salt)

    return passwordCripto
}

module.exports = {
    crypto
}