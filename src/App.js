import Hero from './Components/Hero/Hero';
import Nav from './Components/Nav/Nav';
import Provider from './Global/Provider';

function App() {
  return (
    <Provider>
      <Nav />
      <Hero />
    </Provider>
  );
}

export default App;
