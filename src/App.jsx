import './App.css';
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import Profile from './pages/Profile'
import Edit from './pages/Edit'
import ProfileHeader from './components/ProfileHeader'

function App() {
  return (
    <BrowserRouter>
      <ProfileHeader />
      <div className='App'>
        <Routes >
          <Route path='/profile' element={<Profile />} />
          <Route path='/alter' element={<Edit/>}/>
          <Route path='/accont' />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;