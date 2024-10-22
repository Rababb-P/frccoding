import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/Home';
import Assignments from './components/Assignments';
import Videos from './components/Videos';


export default function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )
}
