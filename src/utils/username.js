const ADJECTIVES = [
    'agreeable', 'jealous', 'nebulous', 'emotional', 'solid', 'hateful', 'annoying'
]

const OBJECTS = [
    'sponge', 'bottle', 'paper', 'flowers', 'clothes', 'puddle', 'press'
]

function genRandomUsername() {
    let randomAdjectiveIndex = Math.floor(Math.random() * 7)
    let randomObjectIndex = Math.floor(Math.random() * 7)
    return `${ADJECTIVES[randomAdjectiveIndex]}-${OBJECTS[randomObjectIndex]}`
}

module.exports = {
    genRandomUsername
}