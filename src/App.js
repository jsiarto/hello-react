// We can import assets and React functionality up here
// Oh, and I'm a JavaScript comment. You'll see
import {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function Eclipse() {

  const [eclipseData, setEclipseData] = useState([]);

  useEffect(() => {
    const getEclipse = async () => {
      const res = await fetch("https://api.opendota.com/api/heroStats");
      const data = await res.json();
      setEclipseData(data);
    }
    getEclipse();
  });

  return (
    <ul>
      {eclipseData.map((eclipse) => (
        <li>{eclipse.name}</li>
      ))}
    </ul>
  )
}

// This is the main component in the file
// It's called below using the 'export default' keywords
function App() {
  return (
    // Use className for CSS and HTML classes
    <div className="App">
      <Eclipse />
    </div>
  );
}

// The export default keywords specifiy the main component in the file
export default App;