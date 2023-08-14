
class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'playing'
    }

    calculateStatus(){
        const finished = this.word.every((letter)=> this.guessedLetters.includes(letter) || letter === ' ')
        if(!this.remainingGuesses)
            this.status = 'failed'
        else if(finished)
            this.status = 'finished'
        else
            this.status = 'playing'
    }

    get puzzle(){
        let puzzle=''
        this.word.forEach((letter)=>{
            if(this.guessedLetters.includes(letter) || letter === ' '){
                puzzle+=letter;
            }else
                puzzle+='*'
        })
        return puzzle;
    }

    get statusMessage(){
        if(this.status === "playing")
            return `Guesses left: ${this.remainingGuesses}`
        if(this.status === "failed")
            return `GAME OVER! Word: ${this.word.join(' ')}.`
        return 'Great work!'
    }

    makeGuess (guess){
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)

        if(this.status ==='playing' && isUnique){
            this.guessedLetters.push(guess)
            if(isBadGuess)
                this.remainingGuesses--
            this.calculateStatus()
        }
    }
}




