import './App.css';

import { BrowserRouter, Routes, Route, } from "react-router-dom";

// Screens
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import ProfileScreen from './screens/ProfileScreen';
import ProfileSetup from './screens/profileSetup';
import SearchScreen from './screens/SearchScreen';
import Comments from './screens/comments';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <>
          <Routes>
            <Route path='home' element={<HomeScreen />}></Route>
            <Route path='/' element={<LoginScreen />}></Route>
            <Route path='signup' element={<SignupScreen />}></Route>
            <Route path='profile' element={<ProfileScreen />}></Route>
            <Route path='profile-setup' element={<ProfileSetup />}></Route>
            <Route path='search' element={<SearchScreen />}></Route>
            <Route path='comments' element={<Comments />}></Route>

          </Routes>
        </>
      </BrowserRouter>
    </div>
  );
}

export default App;
