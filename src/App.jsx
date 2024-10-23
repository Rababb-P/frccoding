import './index.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/Landing';
import Assignments from './components/Assignments';
import Videos from './components/Videos';


export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="container mx-auto mt-4 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/assignments" element={<Assignments />} />
            <Route path="/videos" element={<Videos />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}
