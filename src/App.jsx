import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Homee'
// import Video from './Pages/Video/video';
import { useState } from 'react'

const App = () => {

const [Sidebar, setSidebar] = useState(true);

  return (
    <div>
        <Navbar />
        <Router> {/* Wrap the Routes with BrowserRouter */}
      {/* Navbar component can be included here */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/video/:categoryId/:videoId" element={<Video />} /> Corrected the case of 'video' */}
      </Routes>
    </Router>
    </div>
  )
}

export default App
