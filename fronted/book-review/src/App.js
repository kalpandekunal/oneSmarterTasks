import './App.css';
import { Navbar } from './components/Navbar';
import Footer from './Pages/footer';
import { MainRoute } from './Pages/MainRoute';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoute />
      
    </div>
  );
}

export default App;
