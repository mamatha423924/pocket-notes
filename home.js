
import React, { Component } from 'react';
import './home.css';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="sidebar">
        <div className="header">Pocket notes</div>
        <div className="create">+create notes group</div>
        </div>
        <div className="chats">
        <img src="intro.png" alt="introduction image" />
          <h1>Send and recive your message without your phone online use pocket notes upto 4 linked divices</h1>
          
        </div>
      </div>
    );
  }
}

export default Home;
