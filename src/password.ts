export default function generate(length = 32): string {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lowercase = "abcdefghijklmnopqrstuvwxyz"
    const numbers = "0123456789"
    const symbols = "!\"#$%&'()*+,-./:;<=>?@^[\\]^_`{|}~"
    const all = uppercase + lowercase + numbers + symbols
    let password = ""
    for (let index = 0; index < length; index++) {
        const character = Math.floor(Math.random() * all.length)
        password += all.substring(character, character + 1)
    }
    return password
}
