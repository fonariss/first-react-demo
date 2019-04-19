import React, { Component } from 'react';
import profile from './20181129_195518.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="resume">
        <div className="resume-left">
        <img
          className="image"
          alt="profile"
          src={profile}
          />
          <h2>Arissara Phetmaneewan</h2>
          <div className="title">Front-End Developer</div>
          <p>Email: arissara.phe@gmail.com</p>
          <p>Address: Bangkok</p>
        </div>
        <div className="resume-right">
          <h2>About</h2>
          <div className="line"></div>
          <p>An energetic and dependable individual who possesses good verbal and written communication skills. Graduate of a highly ranked university with experience in 3d model design and motion graphic.</p>
          <h2>Education</h2>
          <div className="line"></div>
          <p>Bachelor of Science in Information and Communication Technology<br></br>(Major Multimedia Systems), Mahidol University</p>
          <h2>Experiences</h2>
          <div className="line"></div>
          <h4>CareerVisa</h4>
          <ul>
            <li>Design webpage and mobile application.</li>
            <li>Edit careercoach video.</li>
          </ul>
          <h4>Association Student Staff, MU Freshy Welcoming Ceremony 2017</h4>
          <ul>
            <li>Coordinated with the Association Student and each Freshy welcoming home groups about information and assistance.</li>
            <li>Order food and drinking water for the MU Freshy Welcoming Ceremony.</li>
          </ul>
          <h2>Skills</h2>
          <div className="line"></div>
          <ul>
            <li>Microsoft Office (Word, Excel, Powerpoint)</li>
            <li>Adobe (Photoshop, Illustrator)</li>
          </ul>
        </div>
      </div>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;
