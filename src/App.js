import {
  Routes,
  Route
} from 'react-router-dom';

import Home from './Pages/Home';
import './App.css';
export default function App() {
 return (
    <div>
    <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>

  );
}