
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Whywe from "./components/whywe/Whywe";
import Number from "./components/Number/Number";
function App() {

  return (
    <div className="App">
      <Header/>
      <main>
        <Hero/>
        <Whywe/>
        <Number/>
      </main>
    </div>
  );
}

export default App;
