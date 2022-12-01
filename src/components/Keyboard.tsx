import React from 'react'
import keys from '../Keys.json'
import styles from "./Keyboard.module.css"

type KeyboardProps = {
  disabled?: boolean
  activeLetters: string[]
  inactiveLetters: string[]
  addGuessedLetter: (letter: string) => void
}

const Keyboard = ({disabled = false, activeLetters, inactiveLetters, addGuessedLetter}: KeyboardProps) => {
  return (
    <div style={{ display:"grid", gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))", gap: ".5rem" }} >
      {keys.map(key => {
        const isActive = activeLetters.includes(key)
        const isInactive = inactiveLetters.includes(key)
        return (
        <button 
          onClick={() => addGuessedLetter(key)} 
          key={key} 
          className={`${styles.btn} ${isActive ? styles.active : "" } ${isInactive ? styles.inactive : "" }`}
          disabled={isInactive || isActive || disabled }
        >
          {key}
        </button>
        )
      })}
    </div>
  )
}

export default Keyboard