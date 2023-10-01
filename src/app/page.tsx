'use client'
import { useState, useEffect } from 'react'

const DATA = [
  { id: 'Q', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
  { id: 'W', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
  { id: 'E', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
  { id: 'A', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },
  { id: 'S', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
  { id: 'D', src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
  { id: 'Z', src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
  { id: 'X', src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
  { id: 'C', src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' },
]

export default function Home() {
  const [display, setDisplay] = useState('')

  function handleClick(e: any) {
    // Find element by focus event.target and trigger play()
    const drumPad = e.target.firstChild as HTMLAudioElement
    drumPad.play().catch((e) => console.log(e)) // Handle promise callback https://stackoverflow.com/a/62963021/13658418
    setDisplay(drumPad.id)
    console.log('Playing: ', drumPad, 'Event type: ', e.type)
  }

  // Handle 'keydown' event separately (global), because the buttons is not focused with keyboard, only with mouse (handleClick)
  function handleKeyDown(e: any) {
    // Check if current key is found in DATA
    const audio = DATA.find((item) => item.id == e.key.toUpperCase())

    if (audio) {
      // Find element by id and trigger play()
      const drumPad = document.getElementById(audio.id) as HTMLAudioElement
      drumPad.play().catch((e) => console.log(e))
      setDisplay(drumPad.id)
      console.log('Playing: ', drumPad, 'Event type: ', e.type)
    }
  }
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
  })

  // Map buttons
  const mappedButtons = DATA.map((item) => (
    <button
      key={item.id}
      id={item.id + '-button'}
      className="drum-pad"
      onClick={handleClick}
      // onKeyDown={handleKeyDown} // Handled separately because it's global
    >
      <audio id={item.id} className="clip" src={item.src}></audio>
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
              {display} {/* Display pressed key */}
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

      <script defer src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
    </div>
  )
}
