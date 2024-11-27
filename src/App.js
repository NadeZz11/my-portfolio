import React, { useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./container/Header";
import Home from "./container/Home";
import AboutMe from "./container/About Me";
import Education from "./container/Education";
import Activities from "./container/Activities";

function App() {
  const refHome = useRef(null);
  const refAbout = useRef(null);
  const refEducation = useRef(null);
  const refActivities = useRef(null);
  return (
    <div>
      <Header
        refHome={refHome}
        refAbout={refAbout}
        refEducation={refEducation}
        refActivities={refActivities}
      />
      <Home refSection={refHome} refAbout={refAbout} />
      <AboutMe refSection={refAbout} />
      <Education refSection={refEducation} />
      <Activities refSection={refActivities} />
    </div>
  );
}

export default App;
