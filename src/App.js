import './App.css';
import Navbar from './components/home/Navbar';
import Header from './components/home/Header'
import Csrsoul from './components/home/Csrsoul';
import Dates from './components/dates/Dates';
import ResponsiveDates from './components/dates/ResponsiveDates';
import Scaling from './components/scaling/Scaling';
import Emissions from './components/emissions/Emissions';
import Ecosystem from "./components/ecosystem/Ecosystem";
import Footer from './components/footer/Footer';
import News from './components/news/News';
import Newsletter from './components/newsletter/Newsletter';
import Sleeves from './components/sleeves/Sleeves';
import Benefits from './components/benefits/Benefits';
import ProofStake from './components/proofStake/ProofStake';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Header />
     <Csrsoul />
     <Benefits/>
     <ProofStake/>
     {/* <Dates /> */}
     {/* <ResponsiveDates /> */}
     <Scaling />
      <Emissions />
      <Ecosystem />
     <Sleeves />
     <News />
     <Newsletter />
     <Footer />
    </div>
  );
}

export default App;
