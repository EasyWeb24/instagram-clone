import SignUp from './pages/auth/sign-up';
import Home from './pages/home';
import CreatePost from './pages/create-post';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Stack
          justifyContent={'space-between'}
          flexDirection={'row'}
          bgcolor={'hsl(0, 0%, 100%);'}
          width={'100%'}
          p={'12px 24px'}
        >
          <Link to={'/'}>Instagram Clone</Link>
          <Link to={'/create-post'}>Create Post</Link>
        </Stack>
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
