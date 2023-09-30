'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [state, setState] = useState('')

  function handleEvent() {
    // The play method exists on HTMLAudioElement and not HTMLElement. getElementById returns HTMLElement | null, so you'd have to cast mytrack as HTMLAudioElement for TypeScript to allow it. https://stackoverflow.com/a/55270654/13658418
    const drumPad = document.activeElement?.firstChild as HTMLAudioElement
    // Fix error "TypeError: drumPad is null"
    if (drumPad) {
      drumPad.play()
      setState(drumPad.id)
      console.log('Playing: ', drumPad)
    }
  }

  useEffect(() => {
    const buttons = document.querySelectorAll('button.drum-pad')
    for (let button of buttons) {
      button.addEventListener('click', handleEvent)
    }
  })

  return (
    <div className="flex flex-col items-center h-screen">
      <header>Drum Machine</header>

      <main className="grid place-items-center">
        <div id="drum-machine">
          {/* Display */}
          <div id="display-box" className="grid place-items-center">
            <h2>Display</h2>
            <div id="display" className="w-40 h-10 bg-red-500">
              {state} {/* Display pressed key */}
            </div>
          </div>

          {/* Drum-pad */}
          <div id="drum-pad-box" className="grid grid-cols-3 grid-rows-3 place-items-center">
            {/* Q */}
            <button id="drum-pad-q" className="drum-pad w-full bg-red-400">
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

      <footer>
        Made by <a href="https://github.com/webdev4422/fcc-frontend-drum-machine">webdev4422</a>
      </footer>

      <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
    </div>
  )
}
