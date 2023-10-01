'use client'

import { ok } from 'assert'
import { useState, useEffect } from 'react'

export default function Home() {
  const [state, setState] = useState('')

  function handleClick(e: any) {
    // The play method exists on HTMLAudioElement and not HTMLElement. getElementById returns HTMLElement | null, so you'd have to cast mytrack as HTMLAudioElement for TypeScript to allow it. https://stackoverflow.com/a/55270654/13658418
    // const drumPad = document.activeElement?.firstChild as HTMLAudioElement
    const drumPad = e.target.firstChild as HTMLAudioElement // Alternative use event object
    drumPad.play()
    setState(drumPad.id)
    console.log('Playing: ', drumPad, 'Event type: ', e.type)
  }

  function handleKeyPress(e: any) {
    const buttons = document.querySelectorAll('button')

    for (const button of buttons) {
      let drumPad = button.firstChild as HTMLAudioElement // TypeScript Check type

      if (drumPad) {
        // If our key == audio id, play that audio
        if (e.key.toUpperCase() == drumPad.id) {
          drumPad.play()
          // button.classList.add('active')
          setState(drumPad.id)
          console.log('Playing: ', drumPad, 'Event type: ', e.type)
        }
      }
    }
  }

  useEffect(() => {
    // Handle click
    const buttons = document.querySelectorAll('button.drum-pad')
    for (let button of buttons) {
      button.addEventListener('click', handleClick)
    }
    // Handle keypress
    document.addEventListener('keypress', handleKeyPress)
  })

  return (
    // <div className="flex flex-col items-center h-screen ">
    <div className="root text-center">
      <header className="text-xl m-4">Drum Machine</header>

      <main className="grid place-items-center">
        <div id="drum-machine">
          {/* Display */}
          <div id="display-box" className="grid place-items-center">
            <div
              id="display"
              className="w-32 h-10 mb-4 bg-slate-400 rounded-md grid place-items-center"
            >
              {state} {/* Display pressed key */}
            </div>
          </div>

          {/* Drum-pad */}
          <div id="drum-pad-box" className="grid grid-cols-3 grid-rows-3 place-items-center">
            {/* Q */}
            <button id="drum-pad-q" className="drum-pad">
              <audio
                id="Q"
                className="clip"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
              ></audio>
              Q
            </button>
            <button id="drum-pad-w" className="drum-pad">
              <audio
                id="W"
                className="clip"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
              ></audio>
              W
            </button>
            <button id="drum-pad-e" className="drum-pad">
              <audio
                id="E"
                className="clip"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
              ></audio>
              E
            </button>
            <button id="drum-pad-a" className="drum-pad">
              <audio
                id="A"
                className="clip"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
              ></audio>
              A
            </button>
            <button id="drum-pad-s" className="drum-pad">
              <audio
                id="S"
                className="clip"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
              ></audio>
              S
            </button>
            <button id="drum-pad-d" className="drum-pad">
              <audio
                id="D"
                className="clip"
                src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
              ></audio>
              D
            </button>
            <button id="drum-pad-z" className="drum-pad">
              <audio
                id="Z"
                className="clip"
                src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
              ></audio>
              Z
            </button>
            <button id="drum-pad-x" className="drum-pad">
              <audio
                id="X"
                className="clip"
                src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
              ></audio>
              X
            </button>
            <button id="drum-pad-c" className="drum-pad">
              <audio
                id="C"
                className="clip"
                src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
              ></audio>
              C
            </button>
          </div>
        </div>
      </main>

      <footer className="text-sm">
        Made by <a href="https://github.com/webdev4422/fcc-frontend-drum-machine">webdev4422</a>
      </footer>

      <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
    </div>
  )
}
