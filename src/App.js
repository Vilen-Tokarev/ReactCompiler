import React from "react";
import Header from "./components/Header";
import Image from "./components/image";
import logo2 from "./img/logo2.png";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpText: "HelpText",
      userData: "",
      textData: "",
      input: "",
    };

    this.inputClick = this.inputClick.bind(this);
    this.inputOver = this.inputOver.bind(this);
  }

  helpText = "da";
  input = document.getElementById("input");
  render() {
    return (
      <div className="div">
        <Header title="шапка сайта" />
        <h1>{this.state.helpText}</h1>
        <h2>{this.state.userData}</h2>
        <input
          id="input"
          placeholder={this.state.helpText}
          onChange={(event) => this.setState({ userData: event.target.value })}
          onMouseEnter={this.inputOver}
          onClick={this.inputClick}
        />
        <form>
          <label htmlFor="da">da</label>
          <input
            type="radio"
            name="daorno"
            id="da"
            value={this.state.userData === "Вилен лох?" ? "Неверно" : "Верно"}
            onChange={(event) => this.setState({ input: event.target.value })}
          />
          <label htmlFor="net">net</label>
          <input
            type="radio"
            name="daorno"
            id="net"
            value={this.state.userData === "Вилен лох?" ? "Верно" : "Неверно"}
            onChange={(event) => this.setState({ input: event.target.value })}
          />
        </form>
        <h2>{this.state.input}</h2>
        <input
          onChange={(event) => this.setState({ textData: event.target.value })}
        />
        <h2>{this.state.textData}</h2>
        <p>{this.state.helpText === "da" ? "Yes" : "No"}</p>
        <Image image={logo2} />
        <img src={logo2} alt="img" />
      </div>
    );
  }
  inputClick() {
    this.setState({ helpText: "Change" });
    console.log("click");
  }
  inputOver() {
    this.setState({ helpText: "Over" });
    console.log("mouse over");
  }
}
