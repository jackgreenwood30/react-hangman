import React from 'react'

type HangmanWordProps = {
  guessedLetters: string[]
  wordToGuess: string
  reveal?: boolean
}


const HangmanWord = ({ reveal=false,guessedLetters, wordToGuess }: HangmanWordProps) => {
  return (
    <div style={{ display:"flex", gap:".25em", fontSize:"6rem", fontWeight:"bold", textTransform:"uppercase", fontFamily:"monospace"}} >
      {wordToGuess.split("").map((letter, index) => (
        <span style={{ borderBottom:".1em solid black" }} key={index} >
          <span style={{ visibility: guessedLetters.includes(letter) || reveal ? "visible" : "hidden", opacity: !guessedLetters.includes(letter) && reveal ? "0.5" : "1"}} >{letter}</span>
        </span>
      ))}
    </div>
  )
}

export default HangmanWord