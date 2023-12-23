
import React from "react";
import './../styles/App.css';

const App = () => {
  const weather = {temperature: 25, conditions: "Sunny" };
  const tempClass = weather.temperature > 20 ? 'above':'below'; 

  return (
    <div>
        {/* Do not remove the main div */}
        <p>Temperature:<span className={tempClass}>{weather.temperature}</span></p>
        <p>Conditions: {weather.conditions}</p>
    </div>
  )
}

export default App
