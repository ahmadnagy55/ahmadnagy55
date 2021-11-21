import React from 'react';
import './App.css';
<<<<<<< HEAD
=======
import FilteredData from './component/FilterData/FilteredData;';
>>>>>>> aaf1c5f31fb00aa90a9749120d543201836c5e73
import JobItems from './component/JobItems/JobItems';
import bgHeaderDeskTop from './component/JobItems/images/bg-header-desktop.svg';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={bgHeaderDeskTop} className="App-logo" alt="bg-header-desktop" />
        </header>
        <JobItems/>
    </div>
    
  );
}


export default App;
