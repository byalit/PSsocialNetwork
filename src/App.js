import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Music from "./components/Music/music";
import News from "./components/News/news";
import Photo from "./components/Photo/photo";
import React from "react";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />

        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/dialogs/*"
              element={<DialogsContainer/>}
            />
            <Route
              path="/profile"
              element={
                <Profile/>
              }
            />
            <Route path="/music" element={<Music />} />
            <Route path="/news" element={<News />} />
            <Route path="/photo" element={<Photo />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
