'use client'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen">
      <header>Drum Machine</header>

      <main className="grid place-items-center">
        <div id="drum-machine">
          <div id="display-box" className="w-40 h-10 grid place-items-center">
            <h2>Display</h2>
            <div id="display"></div>
          </div>
          <div id="drum-pad-box" className="grid grid-cols-3 grid-rows-3 place-items-center">
            <div id="drum-pad-q" className="drum-pad">
              <audio
                id="Q"
                className="clip"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
              ></audio>
              Q
            </div>
            <div id="drum-pad-w" className="drum-pad">
              <audio
                id="W"
                className="clip"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
              ></audio>
              W
            </div>
            <div id="drum-pad-e" className="drum-pad">
              <audio
                id="E"
                className="clip"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
              ></audio>
              E
            </div>
            <div id="drum-pad-a" className="drum-pad">
              <audio
                id="A"
                className="clip"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
              ></audio>
              A
            </div>
            <div id="drum-pad-s" className="drum-pad">
              <audio
                id="S"
                className="clip"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
              ></audio>
              S
            </div>
            <div id="drum-pad-d" className="drum-pad">
              <audio
                id="D"
                className="clip"
                src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
              ></audio>
              D
            </div>
            <div id="drum-pad-z" className="drum-pad">
              <audio
                id="Z"
                className="clip"
                src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
              ></audio>
              Z
            </div>
            <div id="drum-pad-x" className="drum-pad">
              <audio
                id="X"
                className="clip"
                src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
              ></audio>
              X
            </div>
            <div id="drum-pad-c" className="drum-pad">
              <audio
                id="C"
                className="clip"
                src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
              ></audio>
              C
            </div>
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
