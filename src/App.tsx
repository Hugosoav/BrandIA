import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Modules } from './components/Modules';
import { Agents } from './components/Agents';
import { Includes } from './components/Includes';
import { Story } from './components/Story';
import { Offer } from './components/Offer';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Problem />
      <Solution />
      <Modules />
      <Agents />
      <Includes />
      <Story />
      <Offer />
      <Footer />
    </div>
  );
}

export default App;
