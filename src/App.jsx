import "./App.css";

import Aboutme from "./components/Aboutme";
// import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
// import Gototop from "./components/gototop";
// import Navbar from "./components/Navbar";
import Work from "./components/Work";

function App() {
  return (
    <div>
      {/* <Banner /> */}
      <Landing />
      {/* <Navbar /> */}
      <Aboutme />
      <Work />
      <Contact />
      {/* <Gototop /> */}
      <Footer />
    </div>
  );
}

export default App;
