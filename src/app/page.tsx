'use client'
import { useState, useEffect } from 'react'

const DATA = [
  {
    id: 'Q',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  },
  {
    id: 'W',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
  },
]

export default function Home() {
  const [state, setState] = useState('')

  function handleClick(e: any) {
    const drumPad = e.target.firstChild as HTMLAudioElement
    drumPad.play()
    setState(drumPad.id)
    console.log('Playing: ', drumPad, 'Event type: ', e.type)
  }

  function handleKeyPress(e: any) {
    const drumPad = e.target.firstChild as HTMLAudioElement

    if (e.key.toUpperCase() == drumPad.id) {
      drumPad.play()
      setState(drumPad.id)
      console.log('Playing: ', drumPad, 'Event type: ', e.type)
    }
  }

  const mappedButtons = DATA.map((item) => (
    <button key={item.id} className="drum-pad" onClick={handleClick} onKeyDown={handleKeyPress}>
      <audio id={item.id} className="clip" src={item.url}></audio>
      {item.id}
    </button>
  ))

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
            {/* Maped buttons */}
            {mappedButtons}
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
