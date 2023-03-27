import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';


const App = () => {
  return (
    <div className="container">
      <div className="cards-wrapper">
        <div className="card">
          <div className="card-header">
            <h3>Free</h3>
            <h1><sup>$</sup> 0</h1>
          </div>
          <div className="card-body">
            <ul>
              <li><FontAwesomeIcon icon={faCheck} />Some Feature Text</li>
              <li><FontAwesomeIcon icon={faCheck} />Some Feature Text</li>
              <li><FontAwesomeIcon icon={faTimes} />Some Feature Text</li>
              <li><FontAwesomeIcon icon={faTimes} />Some Feature Text</li>
              <li><FontAwesomeIcon icon={faTimes} />Some Feature Text</li>
              <li><FontAwesomeIcon icon={faTimes} />Some Feature Text</li>
            </ul>
          </div>
          <div className="card-footer">
            <button type="button">Subscribe</button>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h3>Standard</h3>
            <h1><sup>$</sup> 49 /<span>Month</span></h1>
          </div>
          <div className="card-body">
            <ul>
              <li><FontAwesomeIcon icon={faCheck} />Some Feature Text</li>
              <li><FontAwesomeIcon icon={faCheck} />Some Feature Text</li>
              <li><FontAwesomeIcon icon={faCheck} />Some Feature Text</li>
              <li><FontAwesomeIcon icon={faCheck} />Some Feature Text</li>
              <li><FontAwesomeIcon icon={faTimes} />Some Feature Text</li>
              <li><FontAwesomeIcon icon={faTimes} />Some Feature Text</li>
            </ul>
          </div>
          <div className="card-footer">
            <button type="button">Subscribe</button>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h3>Premium</h3>
            <h1><sup>$</sup> 99 /<span>Month</span></h1>
          </div>
          <div className="card-body">
            <ul>
              <li><FontAwesomeIcon icon={faCheck} />Some Feature Text</li>
              <li><FontAwesomeIcon icon={faCheck} />Some Feature Text</li>
              <li><FontAwesomeIcon icon={faCheck} />Some Feature Text</li>
              <li><FontAwesomeIcon icon={faCheck} />Some Feature Text</li>
              <li><FontAwesomeIcon icon={faCheck} />Some Feature Text</li>
              <li><FontAwesomeIcon icon={faCheck} />Some Feature Text</li>
            </ul>
          </div>
          <div className="card-footer">
            <button type="button">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
