
import './App.css';
import GrandFather from './Componants/GrandFather/GrandFather';
import { createContext } from 'react';

export const RingContext = createContext('ring')

function App() {
  const ornaments = "dimond 3"
  return (
    <RingContext.Provider value={ornaments}>
      <div>
        <GrandFather></GrandFather>
      </div>
    </RingContext.Provider>
  );
}

export default App;
