import Container from './Container.js'
import './App.css';
import { useState } from 'react';

function App() {
  const [renderMe, updateRenderMe] = useState(true)
  const callback = (val) => {
    updateRenderMe(val)
  }
  return (
    <div className="App">
    {renderMe ? <Container callBack={callback}></Container> : null} 
    </div>
  );
}

export default App;
