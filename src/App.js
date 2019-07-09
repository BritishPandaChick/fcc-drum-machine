import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const sounds = [
  { id: 'bells', letter: 'Q', src: 'http://dight310.byu.edu/media/audio/FreeLoops.com/2/2/Christmas%20Bells%20Loop-18474-Free-Loops.com.mp3' },
  { id: 'santa', letter: 'W', src:'http://thecyberbuddy.com/sounds/ho-ho-ho.wav' },
  { id: 'sleigh bells', letter: 'E', src: 'http://sfxcontent.s3.amazonaws.com/soundfx/SleighBells3.mp3' },
  { id: 'champagne', letter: 'A', src: 'http://sfxcontent.s3.amazonaws.com/soundfx/ChampagnePopPour.mp3' },
  { id: 'turkey', letter: 'S', src: 'http://courses.cs.vt.edu/~cs1004/turkeyGobble.mp3' },
  { id: 'party horn', letter: 'D', src: 'http://dight310.byu.edu/media/audio/FreeLoops.com/5/5/Party%20Horn.wav-22854-Free-Loops.com.mp3' },
  { id: 'waterfall', letter: 'Z', src: 'http://csfiles.maniapc.org/cs/sound/ambience/waterfall1.wav' },
  { id: 'rain', letter: 'X', src: 'http://msh38.ivyro.net/bookphotoshopdata2/rain03.wav' },
  { id: 'stream', letter: 'C', src:'http://koo.corpus.cam.ac.uk/naturesound/waves/riviere3.wav' },
];

class DrumPad extends React.Component {

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  /* Get the key code for event listener so sound wil play */
  handleKeyDown = e => {
    if(e.keyCode === this.props.letter.charCodeAt()) {
      this.audio.play()
      this.audio.currentTime = 0;
      this.props.handleDisplay(this.props.id);
    }
  }

  handleClick = () => {
    this.audio.play()
    this.audio.currentTime = 0; //allows you to play two sounds close to each other. Lets you activate sounds quicker
    this.props.handleDisplay(this.props.id); //pass description want to display
  }

  render() {
    return (
      <div
        className="drum-pad"
        id={this.props.id}
        onClick={this.handleClick}
       >
        <p>{this.props.letter}</p>
        <audio
          src={this.props.src}
          id={this.props.letter}
          className="clip"
          ref={ref => this.audio = ref}>
        </audio>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: ""
    }
  }

  handleDisplay = display => this.setState({ display }); //setting display property to what it takes in

  render() {
    return (
      <div id="drum-machine">
        <div class="container">
          <div class="row">
            <div id="display">{this.state.display}</div>
              <div id="drum-pads">
                {sounds.map(s => (
                <DrumPad
                  id={s.id}
                  letter={s.letter}
                  src={s.src}
                  handleDisplay={this.handleDisplay}
                  />
                ))}
              </div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

export default App;
