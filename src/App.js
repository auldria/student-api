import logo from './logo.svg';
import './App.css';
import AddStudent from './components/AddStudent';
import SearchStudent from './components/SearchStudent';
import DeleteStudent from './components/DeleteStudent';
import ViewStudent from './components/ViewStudent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginStudent from './components/LoginStudent';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginStudent/>}/>
      <Route path="/" element={<AddStudent/>}/>
      <Route path="/AddStudent" element={<AddStudent/>}/>
      <Route path="/SearchStudent" element={<SearchStudent/>}/>
      <Route path="/DeleteStudent" element={<DeleteStudent/>}/>
      <Route path="/ViewStudent" element={<ViewStudent/>}/>
      <Route path="/login" element={<LoginStudent/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;