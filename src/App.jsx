import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/practice-areas' element={<Home />} />
        <Route path='/about-us' element={<Home />} />
        <Route path='/insights' element={<Home />} />
        <Route path='/industries' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
