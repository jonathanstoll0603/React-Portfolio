import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import Resume from "./pages/Resume";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={AboutMe} />
          <Route exact path="/about" component={AboutMe} />
          {/* <Route exact path="/projects" component={Projects} />
          <Route exact path="/quotes" component={Quotes} />
          <Route exact path="/resume" component={Resume} /> */}
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
