const bcrypt = require('bcrypt')

async function verifyPassword() {
    const myPassword = 'admin 123 .202'
    const hash = '$2b$10$nswYR8AQebi7N98OWdc5Q.qYuh11XezOTIsiPVUTOqpwkezD173UG'
    const isMatch = await bcrypt.compare(myPassword, hash)
    console.log(isMatch);
}

verifyPassword()