import React, { useState } from 'react';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import Hobbies from './components/Hobbies';
import HobbyDetail from './components/HobbyDetail';
import About from './components/About';
import './App.css';



const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedHobby, setSelectedHobby] = useState(null);



  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'hobbies':
        return <Hobbies setCurrentPage={setCurrentPage} setSelectedHobby={setSelectedHobby} />;
      case 'hobbyDetail':
        return <HobbyDetail hobby={selectedHobby} setCurrentPage={setCurrentPage} setSelectedHobby={setSelectedHobby} />;
      case 'about':
        return <About />;
      default:
        return <Home />;
    }
  };


  
  return (
    <div className="app">
      <NavigationBar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        setSelectedHobby={setSelectedHobby}
      />
      
      {renderPage()}
    </div>
  );
};

export default App;