import react from 'react'
import './App.css';
import '@radix-ui/themes/styles.css';
import Pages from './pages/users';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Access from './pages/access';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pages/>} caseSensitive={true} />
        <Route path="/authentication" element={<Access/>} caseSensitive={true} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
