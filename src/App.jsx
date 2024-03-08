import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleButtonClick = (value) => {
    setInputValue((prevValue) => prevValue + value);
  };

  const handleACButtonClick = () => {
    setInputValue('');
  };

  const handleDEButtonClick = () => {
    setInputValue((prevValue) => prevValue.slice(0, -1));
  };

  const handleEqualsButtonClick = () => {
    try {
      const result = eval(inputValue).toString();
      setHistory((prevHistory) => [...prevHistory, `${inputValue} = ${result}`]);
      setInputValue(result);
    } catch (error) {
      setInputValue('Error');
    }
  };

  const handleTrigFunction = (func) => {
    setInputValue((prevValue) => prevValue + func + '(');
  };

  const handleExponentialFunction = () => {
    // Ajoutez la logique pour la fonction exponentielle
  };

  const handleLogarithmFunction = () => {
    // Ajoutez la logique pour la fonction logarithmique
  };

  const handleHistoryButtonClick = () => {
    setShowHistory(!showHistory);
  };

  const handleClearHistoryButtonClick = () => {
    setHistory([]);
  };

  const handleDarkModeButtonClick = () => {
    setDarkMode(!darkMode);
  };

  const renderHistory = () => {
    return history.map((entry, index) => (
      <div key={index} className={`history-entry ${darkMode ? 'dark-mode' : ''}`}>
        {entry}
      </div>
    ));
  };

  return (
    <div className={`container ${darkMode ? 'dark-mode' : ''}`}>
      <div className={`calculator ${darkMode ? 'dark-mode' : ''}`}>
        <form action="">
          <div className='display'>
            <input type="text" value={inputValue} readOnly />
          </div>
          <div className="buttons">
            <div>
              <input type="button" value="AC" onClick={handleACButtonClick} />
              <input type="button" value="DE" onClick={handleDEButtonClick} />
              <input type="button" value="." onClick={() => handleButtonClick('.')} />
              <input type="button" value="/" onClick={() => handleButtonClick('/')} />
              <input type="button" value="sin" onClick={() => handleTrigFunction('Math.sin')} />
            
             
              
            
            </div>
            <div>
              <input type="button" value="7" onClick={() => handleButtonClick('7')} />
              <input type="button" value="8" onClick={() => handleButtonClick('8')} />
              <input type="button" value="9" onClick={() => handleButtonClick('9')} />
              <input type="button" value="*" onClick={() => handleButtonClick('*')} />
              <input type="button" value="log" onClick={handleLogarithmFunction} />
            </div>
            <div>
              <input type="button" value="4" onClick={() => handleButtonClick('4')} />
              <input type="button" value="5" onClick={() => handleButtonClick('5')} />
              <input type="button" value="6" onClick={() => handleButtonClick('6')} />
              <input type="button" value="+" onClick={() => handleButtonClick('+')} />
              <input type="button" value="exp" onClick={handleExponentialFunction} />
            
            </div>
            <div>
              <input type="button" value="1" onClick={() => handleButtonClick('1')} />
              <input type="button" value="2" onClick={() => handleButtonClick('2')} />
              <input type="button" value="3" onClick={() => handleButtonClick('3')} />
              <input type="button" value="-" onClick={() => handleButtonClick('-')} />
              <input type="button" value="tan" onClick={() => handleTrigFunction('Math.tan')} />
            </div>
            <div>
              <input type="button" value="00" onClick={() => handleButtonClick('00')} />
              <input type="button" value="0" onClick={() => handleButtonClick('0')} />
              <input type="button" value="=" className='EGALE' onClick={handleEqualsButtonClick} />
              <input type="button" value="cos" onClick={() => handleTrigFunction('Math.cos')} />
            </div>
          </div>
          <div>
            <input type="button" value="historique" className='AFTER' onClick={handleHistoryButtonClick} />
          </div>
          <div>
            <input type="button" value="Supprimer historique" className='AFTER' onClick={handleClearHistoryButtonClick} />
          </div>
          <div>
            <input 
              type="button" 
              value={darkMode ? "Mode clair" : "Mode sombre"} 
              className='AFTER' 
              onClick={handleDarkModeButtonClick} 
            />
          </div>
          <div className="history-container">
            {showHistory && history.length > 0 && (
              <div>
                <h2>Historique</h2>
                {renderHistory()}
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
