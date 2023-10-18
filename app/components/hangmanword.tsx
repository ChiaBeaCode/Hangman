type HangmanWordProps = {
  guessedLetters: string[];
  word: string;
  lose: boolean;
};

export function HangmanWord({ guessedLetters, word, lose }: HangmanWordProps) {
  return (
    <div className="wordRack">
      {word.split("").map((letter, i) => {
        return (
          <div
            key={i}
            style={{
              borderBottom: "5px solid black",
              margin: "0px 10px",
              maxHeight: "45px",
            }}
          >
            {lose === true ? (
              <div
                style={{
                  visibility: "visible",
                    color: guessedLetters.includes(letter)
                    ? "black"
                    : "red",
                }}
              >
                {letter}
              </div>
            ) : (
              <div
                style={{
                  visibility: guessedLetters.includes(letter)
                    ? "visible"
                    : "hidden",
                }}
              >
                {letter}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
