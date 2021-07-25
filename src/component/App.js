import React from "react";
import ThreadList from "./ThreadList";
import CreateThread from "./CreateThread.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      threads: [
        {
          name: "Prof. Ross Geller",
          text: "Hai, I am a paleonthologist. I love Rachel, but she didn't loves me back :(",
          likes: 3,
          date: "2021-04-09 15:30:21",
          comments: [
            "You sucks",
            "I don't care",
            "It's okay Ross, I love you babe",
          ],
        },
        {
          name: "Chandler M. Bing",
          text: "Hey!. I'm afraid, the girl I text online is a fat bald guy!",
          likes: 16,
          date: "2021-04-10 11:20:11",
          comments: ["LMAO", "HAHAHA", "If you wanna be gay, be gay!"],
        },
        {
          name: "Phoebe Buffe",
          text: "I found a human thumb in my soda can and the soda company pay me $7000 what a crappy day.",
          likes: 100,
          date: "2021-05-10 16:20:11",
          comments: [
            "wait, what",
            "Can I have some amount of money please",
            "Buy a car phoeb",
          ],
        },
      ],
    };
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <CreateThread />
        <ThreadList list={this.state} />
      </div>
    );
  }
}

export default App;