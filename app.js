const textDisplay = document.getElementById("text")
const phrases = ['A Royale with Cheese', 'We\'ll find \'em. Just as sure as the turnin\' of the earth.', 'As far back as I can remember, I always wanted to be a gangster.']
let i = 0
let j = 0
let quoteDisplay = []
let isDeleting = false

function loop () {
    textDisplay.innerHTML = quoteDisplay.join('')

    if (i < phrases.length) {
        isEnd = false
        if (!isDeleting && j <= phrases[i].length + 1) {
            quoteDisplay.push(phrases[i][j])
            j++
            textDisplay.innerHTML = quoteDisplay.join('')
        }

        if(isDeleting && j <= phrases[i].length) {
            quoteDisplay.pop(phrases[i][j])
            j--
        }

        if (j == phrases[i].length) {
            isEnd = true
            isDeleting = true
        }

        if (isDeleting && j === 0) {
            quoteDisplay = []
            isDeleting = false
            i++
            if (i == phrases.length) {
                i = 0
            }
        }
    }
    const spedUp = Math.random() * (80 - 50) + 50
    const normalSpeed = Math.random() * (300 - 200) + 50
    const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
    setTimeout(loop, time)

}
loop()
