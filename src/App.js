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
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreatePost from './screens/CreatePost';
import SignUp from './screens/SignUp/SignUp';
import Login from './screens/Login/Login';




function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/notice" element={<Notice />} />
          <Route exact path="/event" element={<Event />} />
          <Route exact path="/posts" element={<AllPosts />} />
          <Route exact path="/posts/:postId/:userId" element={<PostDetail />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/create" element={<CreatePost />} />
          <Route
            exact
            path="/create/:postId/:userId"
            element={<CreatePost />}
          />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/work" element={<Work />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
