import Footer from "./components/Footer";
import Header from "./components/Header";
import Root from "./components/Root";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App w-100 h-100 d-flex flex-column justify-content-between">
       <Header/>
      <main>
        <Root/>
      </main>
      <footer>
       <Footer/>
      </footer>
    </div>
  );
}

export default App;
