type HangmanWordProps = {
    guessedLetters: string[],
    word: string
}

export function HangmanWord({ guessedLetters, word}: HangmanWordProps) {

  return (
    <div className="wordRack">
      {word.split("").map((letter, i) => {
        return (
          <div
            key={i}
            style={{
              borderBottom: "5px solid black",
              margin: "0px 10px",
              maxHeight: "45px"
            }}
          >
            <div
              style={{
                visibility: guessedLetters.includes(letter) ? "visible" : "hidden",
              }}
            >
              {letter}
            </div>
          </div>
        );
      })}
    </div>
  );
}
