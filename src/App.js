import React from 'react';
import './App.css';
import FilteredData from './component/FilteredData/FilteredData';
import JobItems from './component/JobItems/JobItems';
import bgHeaderDeskTop from './component/JobItems/images/bg-header-desktop.svg';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={bgHeaderDeskTop} className="App-logo" alt="bg-header-desktop" />
        </header>
        <FilteredData />
        <JobItems/>
    </div>
    
  );
}


export default App;
