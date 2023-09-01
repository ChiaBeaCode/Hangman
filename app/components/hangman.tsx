const head = (
  <div
    style={{
      position: "absolute",
      height: "40px",
      width: "40px",
      border: "10px solid black",
      borderRadius: "100%",
      top: "55px",
      right: "-24px",
    }}
  ></div>
);
const torso = (
  <div
    style={{
      position: "absolute",
      height: "80px",
      width: "10px",
      top: "108px",
      right: "0px",
      background: "black",
      borderRadius: "5px"
    }}
  ></div>
);
const armR = (
  <div
    style={{
      position: "absolute",
      height: "10px",
      width: "70px",
      top: "110px",
      right: "-63px",
      background: "black",
      rotate: "150deg",
    }}
  ></div>
);
const armL = (
  <div
    style={{
      position: "absolute",
      height: "10px",
      width: "70px",
      top: "111px",
      right: "0px",
      background: "black",
      rotate: "-150deg",
    }}
  ></div>
);
const legR = (
  <div
    style={{
      position: "absolute",
      height: "10px",
      width: "71px",
      bottom: "53px",
      right: "-50px",
      background: "black",
      rotate: "60deg",
    }}
  ></div>
);
const legL = (
  <div
    style={{
      position: "absolute",
      height: "10px",
      width: "71px",
      bottom: "53px",
      right: "-12px",
      background: "black",
      rotate: "-60deg",
    }}
  ></div>
);
const BODY = [head, torso, armR, armL, legR, legL]


type HangmanBodyProps = {
    numOfGuess: number,

}

export function Hangman({ numOfGuess }: HangmanBodyProps) {
  return (
    // Container
    <div
      style={{
        position: "relative",
        margin: "0px auto",
        maxWidth: "300px",
      }}
    >
        {BODY.slice(0, numOfGuess)}

      <div
        style={{
          height: "10px",
          width: "160px",
          background: "black",
          marginLeft: "80px",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          height: "60px",
          width: "10px",
          background: "black",
          top: "0",
          right: "0px",
        }}
      ></div>
      <div
        style={{
          height: "250px",
          width: "10px",
          background: "black",
          marginLeft: "80px",
        }}
      ></div>
      <div
        style={{
          height: "10px",
          width: "200px",
          background: "black",
        }}
      ></div>
    </div>
  );
}
