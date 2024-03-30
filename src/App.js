import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AdminLogin from './components/AdminLogin';
import StudentLogin from './components/StudentLogin';
import JobList from './components/JobList';
import JobApplication from './components/JobApplication';

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" component={JobList} />
          <Route path="/admin" component={AdminLogin} />
          <Route path="/student" component={StudentLogin} />
          <Route path="/apply/:jobId" component={JobApplication} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </div>
  );
}

export default App;
