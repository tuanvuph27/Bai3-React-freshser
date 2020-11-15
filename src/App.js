import React from "react";
import "./App.css";
import Header from "./Pages/Header"
import Reminders from "./Components/Reminders"


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <section className='section'>
          <Reminders />
        </section>
      </div>
    );
  }
}

export default App;
