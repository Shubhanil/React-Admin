import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

/*custom screens*/
import Sidebar from "./components/Sidebar/index";
import Topbar from "./components/Topbar/index";
import AuthRoutes from "./routes/index";
import Footer from "./components/Footer/index";


function App() {
  return (
    <Router>
      <div className="App">
        <div className="wrapper">
          <Sidebar />
          <div className="container">
            <Topbar />
            <AuthRoutes />
            {/* <Footer /> */}
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
