
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Whywe from "./components/whywe/Whywe";
import Number from "./components/Number/Number";
import Feedback from "./components/Feedback/Feedback";

function App() {

  return (
    <div className="App">
      <Header/>
      <main>
        <Hero/>
        <Whywe/>
        <Number/>
        <Feedback/>
      </main>
    </div>
  );
}

export default App;
