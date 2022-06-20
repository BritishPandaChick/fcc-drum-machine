import { useEffect } from "react";
import './App.css';

function App() {
  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      playSound(event.key.toUpperCase());
    });
  }, []);

  //Array of keycodes and sounds
  const drumPads = [
    {
      keyCode: 81,
      text: "Q",
      src: "http://dight310.byu.edu/media/audio/FreeLoops.com/2/2/Christmas%20Bells%20Loop-18474-Free-Loops.com.mp3",
    },
    {
      keyCode: 87,
      text: "W",
      src: "http://thecyberbuddy.com/sounds/ho-ho-ho.wav",
    },
    {
      keyCode: 69,
      text: "E",
      src: "http://sfxcontent.s3.amazonaws.com/soundfx/SleighBells3.mp3",
    },
    {
      keyCode: 65,
      text: "A",
      src: "http://sfxcontent.s3.amazonaws.com/soundfx/ChampagnePopPour.mp3",
    },
    {
      keyCode: 83,
      text: "S",
      src: "http://courses.cs.vt.edu/~cs1004/turkeyGobble.mp3",
    },
    {
      keyCode: 68,
      text: "D",
      src: "http://dight310.byu.edu/media/audio/FreeLoops.com/5/5/Party%20Horn.wav-22854-Free-Loops.com.mp3",
    },
    {
      keyCode: 90,
      text: "Z",
      src: "http://csfiles.maniapc.org/cs/sound/ambience/waterfall1.wav",
    },
    {
      keyCode: 88,
      text: "X",
      src: "http://msh38.ivyro.net/bookphotoshopdata2/rain03.wav",
    },
    {
      keyCode: 67,
      text: "C",
      src: "http://koo.corpus.cam.ac.uk/naturesound/waves/riviere3.wav",
    },
  ];

  //Plays audio sounds
  function playSound(selector) {
    const audio = document.getElementById(selector);
    console.log(audio);
    audio.play();
  }

  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display"></div>
        <div className="drum-pads">
          {drumPads.map((drumPad) => ( //Sets up drum pads
            <div
              key={drumPad.src}
              onClick={() => {
                playSound(drumPad.text);
              }}
              className="drum-pad"
              id={drumPad.src}
            >
              {drumPad.text}
              <audio
                className="clip"
                id={drumPad.text}
                src={drumPad.src}
              ></audio>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
