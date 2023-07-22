import "./App.css";
import Navbar from "./components/home/Navbar";
import Header from "./components/home/Header";
import Csrsoul from "./components/home/Csrsoul";
import Dates from "./components/dates/Dates";
import ResponsiveDates from "./components/dates/ResponsiveDates";
import Scaling from "./components/scaling/Scaling";
import Emissions from "./components/emissions/Emissions";
import Ecosystem from "./components/ecosystem/Ecosystem";
import Footer from "./components/footer/Footer";
import News from "./components/news/News";
import Newsletter from "./components/newsletter/Newsletter";
import Sleeves from "./components/sleeves/Sleeves";
import Benefits from "./components/benefits/Benefits";
import ProofStake from "./components/proofStake/ProofStake";
import VrcScan from "./components/home/VrcScan";
import Vswap from "./components/vswap/Vswap";
import Slider from "./components/slider/Slider";
import PartVrc from "./components/partVrc/PartVrc";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Header />
      <Csrsoul />
      <ProofStake />
      <Benefits />
      <VrcScan />

      {/* <Dates /> */}
      {/* <ResponsiveDates /> */}
      {/* <Scaling /> */}
      <Emissions />
      <Vswap />
      <PartVrc />
      {/* <Ecosystem /> */}
      {/* <Sleeves /> */}
      {/* <News /> */}
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
