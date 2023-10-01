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

  // useEffect(() => {
  // // Handle click
  // const buttons = document.querySelectorAll('button.drum-pad')
  // for (let button of buttons) {
  //   button.addEventListener('click', handleClick)
  // }
  // // Handle keypress
  // document.addEventListener('keypress', handleKeyPress)
  // })

  const mappedButtons = DATA.map((item) => (
    <button
      key={item.id}
      id="drum-pad-q"
      className="drum-pad"
      onClick={handleClick}
      onKeyDown={handleKeyPress}
      >
      {/* prettier-ignore */}
      <audio
        id={item.id}
        className="clip"
        src={item.url}
      ></audio>
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
