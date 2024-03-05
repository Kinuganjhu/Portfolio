import {
  Routes,
  Route
} from 'react-router-dom';
import {
  Button
} from 'react-bootstrap';
import Home from './Pages/Home';
import './App.css';
import {
  useState
} from "react";
export default function App() {
  const [dark,
    setDark] = useState(false);
  const handleDark = () => {
    setDark(!dark);
  };
  return (
    <div className={dark ? 'dark-mode': 'light-mode'}>
        <Button onClick={handleDark}>{dark ? 'Light': 'Dark'}</Button> 
    <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
       
  );
}