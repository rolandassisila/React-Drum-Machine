const descriptions = {
  'Q': 'Heater 1',
  'W': 'Heater 2',
  'E': 'Heater 3',
  'A': 'Heater 4',
  'S': 'Clap',
  'D': 'Open HH',
  'Z': 'Kick n\'Hat',
  'X': 'Kick',
  'C': 'Closed HH' };


const sounds = {
  'Q': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  'W': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
  'E': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
  'A': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
  'S': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
  'D': 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
  'Z': 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
  'X': 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
  'C': 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' };


class DrumMachine extends React.Component {

  constructor(props) {
    super(props);
    this.handlePick = this.handlePick.bind(this);
    this.power = this.power.bind(this);
    this.state = {
      active: true,
      text: '' };



  }

  someAction(option) {
    if (this.state.active === true) {
      const myValue = descriptions[option];
      const mySound = sounds[option];
      document.getElementById(option).style.background = "red";

      this.setState(() => {
        return {
          text: myValue };


      });


      const audio = new Audio(mySound);
      audio.play();

      setTimeout(function () {
        document.getElementById(option).style.background = "#6F5C5C";
      }, 200);

    }


  }



  handlePick(e) {
    console.log(e.target.id);
    const option = e.target.id;
    this.someAction(option);
  }

  componentDidMount() {
    console.log('componentDidMount');
    document.addEventListener("keydown", e => {
      console.log(e.key.toUpperCase());
      this.someAction(e.key.toUpperCase());
    });
  }

  power() {
    this.setState(() => {
      return {
        active: !this.state.active };

    });
  }

  render() {

    return React.createElement("div", { id: "drum-machine" },
    React.createElement("div", null,
    React.createElement("h1", { className: "header__title" }, "DRUM MACHINE")),


    React.createElement("div", { className: "container" },
    React.createElement("div", { id: "pad" },
    React.createElement("table", null,
    React.createElement("tbody", null,
    React.createElement("tr", null, React.createElement("td", { id: "Q", className: "drum-pad", onClick: this.handlePick }, "Q",
    React.createElement("audio", { src: this.state.url, autoPlay: true })), React.createElement("td", { id: "W", className: "drum-pad", onClick: this.handlePick }, "W"), React.createElement("td", { id: "E", className: "drum-pad", onClick: this.handlePick }, "E")),
    React.createElement("tr", null, React.createElement("td", { id: "A", className: "drum-pad", onClick: this.handlePick }, "A"), React.createElement("td", { id: "S", className: "drum-pad", onClick: this.handlePick }, "S"), React.createElement("td", { id: "D", className: "drum-pad", onClick: this.handlePick }, "D")),
    React.createElement("tr", null, React.createElement("td", { id: "Z", className: "drum-pad", onClick: this.handlePick }, "Z"), React.createElement("td", { id: "X", className: "drum-pad", onClick: this.handlePick }, "X"), React.createElement("td", { id: "C", className: "drum-pad", onClick: this.handlePick }, "C"))))),



    React.createElement("div", { id: "controls" },
    React.createElement("div", { style: { paddingLeft: '45%' }, onClick: this.power }, "Power",

    React.createElement("div", { id: "cPower", style: { width: '4.6rem', eight: '1.6rem', background: 'black', cursor: 'pointer' } },
    React.createElement("div", { style: { width: '50%', display: 'inline-block', color: this.state.active ? 'transparent' : 'white' } }, "off"),
    React.createElement("div", { style: { width: '50%', display: 'inline-block', color: this.state.active ? 'white' : 'transparent' } }, "on"))),


    React.createElement("div", { id: "display", style: { paddingTop: '30%', paddingLeft: '15%' } },
    React.createElement("div", { style: { width: '80%', height: '40px', textAlign: 'center', background: '#6F5C5C', paddingTop: '15px', color: 'white' } }, this.state.active ? this.state.text : this.state.text = '')))),




    React.createElement("div", { id: "footer" }));


  }}



ReactDOM.render(React.createElement(DrumMachine, null), document.getElementById('app'));