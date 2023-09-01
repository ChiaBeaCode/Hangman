import styles from "~/style/tiles.module.css"

type HangmanGuesses = {
    correctLetters: string[],
    incorrectLetters: string[],
    addGuessedLetter: (letter: string) => void
}

export function TileRack({correctLetters, incorrectLetters, addGuessedLetter}: HangmanGuesses){
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    return (
        <div className="tileRack">
            {alphabet.map((letter, i) => {
                const isActive = correctLetters.includes(letter)
                const isInactive = incorrectLetters.includes(letter)
                return (
                <button 
                className={
                    `${styles.tile}
                    ${isActive ? styles.active : ''}
                    ${isInactive ? styles.inactive : ''}
                    `} 
                key={i} 
                onClick={() => addGuessedLetter(letter)}
                disabled={isActive || isInactive}
                >{letter.toUpperCase()}</button>
                )
            })}
        </div>
    )
}