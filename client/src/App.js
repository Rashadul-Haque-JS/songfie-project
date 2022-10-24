import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Songs from "./components/Songs/Songs";
import SingleSong from "./components/Songs/SingleSong";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import Mounts from "./components/mount/Mount";
import Auth from "./components/auth/Auth";
import PageNotFound from "./components/helper/PageNotFound";
import { Toaster } from "react-hot-toast";
import ResetPassword from "./components/auth/ResetPassword";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <div className="container mt-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/songs" element={<Songs />} />
            <Route path="/songs/:track" element={<SingleSong />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/reset/:id/:token" element={<ResetPassword />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
        <Mounts />
        <AudioPlayer />
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
