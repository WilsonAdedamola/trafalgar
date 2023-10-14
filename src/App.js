import Blog from './Components/Blog';
import Feedback from './Components/Feedback';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar'
import Services from './Components/Services';

function App() {
  return (
    <div>
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Feedback />
      <Blog />
    </div>
    <Footer />
    </div>
  );
}

export default App;
