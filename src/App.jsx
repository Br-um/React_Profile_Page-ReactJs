import './App.css';
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import Profile from './pages/Profile'
import ProfileHeader from './components/ProfileHeader'

function App() {
  return (
    <BrowserRouter>
      <ProfileHeader />
      <div className='App'>
        <Routes >
          <Route path='/profile' element={<Profile />} />
          <Route path='/accont' />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;