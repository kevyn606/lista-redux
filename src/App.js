import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home';
import Contato from './components/pages/Contato';
import { GlobalCss } from './components/styles';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <GlobalCss />
      
      <Routes>
        <Route exact path="/" element={<Home/>}>
          
        </Route>
        <Route exact path="/contato" element={<Contato/>}>
          
        </Route>

      </Routes>

    </Router>
    </Provider>
  );
}

export default App;
