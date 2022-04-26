import Hero from './Components/Hero/Hero';
import Nav from './Components/Nav/Nav';
import SectionShorten from './Components/SectionShorten/SectionShorten';
import Provider from './Global/Provider';

function App() {
  return (
    <Provider>
      <Nav />
      <Hero />
      <SectionShorten />
    </Provider>
  );
}

export default App;
