import Hero from './Components/Hero/Hero';
import Nav from './Components/Nav/Nav';
import SectionBoost from './Components/SectionBoost/SectionBoost';
import SectionShorten from './Components/SectionShorten/SectionShorten';
import Provider from './Global/Provider';

function App() {
  return (
    <Provider>
      <Nav />
      <Hero />
      <SectionShorten />
      <SectionBoost />
    </Provider>
  );
}

export default App;
