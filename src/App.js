import React, {useEffect, createContext, useReducer, useContext, useState} from 'react'
import NavBar from './components/NavBar';
import Footer from './components/Footer'
import Event from './screens/Event';
import About from './screens/About';
import Contact from './screens/Contact/Contact';
import Home from './screens/Home/Home';
import PageNotFound from './screens/PageNotFound';
import Work from './screens/Work/Work';
import AllPosts from "./screens/AllPosts";
import Notice from "./screens/Notice";
import PostDetail from "./screens/PostDetail/PostDetail";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import CreatePost from './screens/CreatePost';
import SignUp from './screens/SignUp/SignUp';
import Login from './screens/Login/Login';
import { initialUserState, userReducer } from './reducers/userReducer';
import MyAllPosts from './screens/MyAllPosts';


export const UserContext = createContext();

function DynamicRoutes() {

  const navigate = useNavigate();
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {

    const token = localStorage.getItem('token');
    if(token){ // user is already logged in
      const user = JSON.parse(localStorage.getItem('user'));
      const userState = {'token': token, 'user': user}
      const action = {type: 'LOGIN', payload: userState };
      dispatch(action);
      navigate('/posts');
    }else{
      navigate('/login');
    }

  }, []);

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/signup" element={<SignUp />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/notice" element={<Notice />} />
      <Route exact path="/event" element={<Event />} />
      <Route exact path="/posts" element={<AllPosts />} />
      <Route exact path="/myposts" element={<MyAllPosts />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/create" element={<CreatePost />} />
      <Route exact path="/create/:postId/:userId" element={<CreatePost />} />
      <Route exact path="/posts/:postId/:userId" element={<PostDetail />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/work" element={<Work />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
function App() {

  const [state, dispatch] = useReducer(userReducer, initialUserState);
  return (
    <UserContext.Provider value={{state: state, dispatch: dispatch}}>
      <Router>
        <div>
          <NavBar />
          <DynamicRoutes />
          <Footer />
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
