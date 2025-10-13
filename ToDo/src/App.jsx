import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './components/Home.jsx';
import TodoList from './components/TodoList.jsx';

function App() {
  return (
    
    <Router>
      <div>
        <nav style={{ backgroundColor: '#1a1a1a', padding: '1rem', marginBottom: '2rem' }}>
          <ul style={{ listStyle: 'none', display: 'flex', gap: '2rem', margin: 0, padding: 0, justifyContent: 'center' }}>
            <li>
              <Link to="/" style={{ color: '#646cff'}}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/todo" style={{ color: '#646cff'}}>
                To-Do List
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<TodoList />} />
          <Route render={() => <h3>404: page not found</h3>} /> 
        </Routes>
      </div>
    </Router>
  )
}

export default App