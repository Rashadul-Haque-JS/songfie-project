import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Songs from './components/Songs/Songs'
import SingleSong from './components/Songs/SingleSong';
import AudioPlayer from './components/AudioPlayer/AudioPlayer';
import Mounts from './components/mount/Mount'
import LoginForm from './components/auth/Auth';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/songs" element={<Songs />} />
            <Route path='/songs/:track' element={<SingleSong />} />
            <Route path='/auth' element={<LoginForm />} />
          </Routes>
        </div>
        <Footer />
        <Mounts />
        <AudioPlayer />
      </BrowserRouter>

    </div>
  );
}

export default App;
