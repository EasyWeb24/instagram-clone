import SignUp from './pages/auth/sign-up';
import Home from './pages/home';
import CreatePost from './pages/create-post';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
