
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import LatestRelase from './components/LatestRelease';

function App() {
  return (
    <div className="App">
      <MyNav /> 
      <Welcome />
      <LatestRelase />
      <MyFooter />
    </div>
  );
}

export default App;
