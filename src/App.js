import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const data = [
  { id: 'chimes', letter: 'Q', src: 'http://www.codemist.co.uk/AmsterdamCatalog/02/02_01_4.wav' },
  { id: 'bells', letter: 'W', src:'http://orteil.dashnet.org/cookieclicker/snd/jingle.mp3' },
  { id: 'santa', letter: 'E', src: 'https://cdn.instructables.com/ORIG/FGK/19YK/IHUUE8SE/FGK19YKIHUUE8SE.mp3' },
  { id: 'champagne', letter: 'A', src: 'http://sfxcontent.s3.amazonaws.com/soundfx/ChampagnePopPour.mp3' },
  { id: 'turkey', letter: 'S', src: 'http://courses.cs.vt.edu/~cs1004/turkeyGobble.mp3' },
  { id: 'waterfall', letter: 'D', src: 'http://members.home.nl/sodejuu/index/TEMP/MP3%20pink%20noise.mp3' },
  { id: 'splash', letter: 'Z', src: 'http://tteacher.net/Sound/Bruitages/plongeon-SF.mp3' },
  { id: 'stream', letter: 'X', src: 'http://dight310.byu.edu/media/audio/FreeLoops.com/2/2/Brook%20Sound%20Effect-23172-Free-Loops.com.mp3' },
  { id: 'ocean', letter: 'C', src:'http://www.mp3item.com/soundeffects/seawave03.wav' },
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
        className='drum-pad'
        id={this.props.id}
        onClick={this.handleClick}
       >
        <p>{this.props.letter}</p>
        <audio
          src={this.props.src}
          id={this.props.letter}
          className='clip'
          ref={ref => this.audio = ref}></audio>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: ''
    }
  }

  handleDisplay = display => this.setState({ display }); //setting display property to what it takes in

  render() {
    return (
      <div id="drum-machine">
        <div id="display">{this.state.display}</div>
        <div id="drum-pads">
          {data.map(d => (
          <DrumPad
            id={d.id}
            letter={d.letter}
            src={d.src}
            handleDisplay={this.handleDisplay}
            />
          ))}
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
