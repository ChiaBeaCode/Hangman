import type { V2_MetaFunction } from "@remix-run/node";
import "~/style/index.css";
import { useCallback, useEffect, useState } from "react";
import words from "~/wordList.json";
import logo from "~/style/logo.png";
import { TileRack } from "~/components/tileRack";
import { HangmanArt } from "~/components/hangmanArt";
import { HangmanWord } from "~/components/hangmanword";
import { Win, Lose } from "~/components/winLoseBanner";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Hangman" }];
};

export default function App() {
  const choseWord = (): string => {
    return words[Math.floor(Math.random() * words.length)];
  };

  const [word, setWord] = useState(choseWord);

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrectLetters = guessedLetters.filter(
    (letter) => !word.includes(letter)
  );
  const correctLetters = guessedLetters.filter((letter) =>
    word.includes(letter)
  );
  const lose: boolean = incorrectLetters.length >= 6;
  const win: boolean = word
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter)) {
        return;
      } else {
        setGuessedLetters((prevLetters) => [...prevLetters, letter]);
      }
    },
    [guessedLetters]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-zA-Z]$/)) {
        return;
      } else {
        e.preventDefault();
        addGuessedLetter(key);
      }
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters, addGuessedLetter]);

  // function handleReset() {
  //   TODO: remove reload for
  //   refresh using vvvv
  //   setWord(choseWord);
  // }

  return (
    <div>
      <div style={{ fontSize: "25px", textAlign: "center", height: "72px" }}>
        <div className="header">
        <a href="https://chiabeacode.netlify.app/"><img src={logo} alt="logo"></img></a>
          <div className="title">Hangman</div>
          <div style={{ lineHeight: "60px" }}>
            {win || lose ? (
              <button
                className="playAgain"
                onClick={(e) => {
                  window.location.reload();
                }}
              >
                Play again?
              </button>
            ) : null}
          </div>
        </div>
        <div style={{ height: "20px" }}>
          {win ? <>{Win()}</> : lose ? <>{Lose()}</> : null}
        </div>
      </div>
      <div className="manAndWordArea">
        <HangmanArt numOfGuess={incorrectLetters.length} />
        <HangmanWord guessedLetters={guessedLetters} word={word} />
      </div>

      <TileRack
        correctLetters={correctLetters}
        incorrectLetters={incorrectLetters}
        addGuessedLetter={addGuessedLetter}
      />
    </div>
  );
}
